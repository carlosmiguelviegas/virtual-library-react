import { PAGINATOR_ITEMS_PAGE, PAGINATOR_PAGE_NUMBER as paginatorPageNUmber } from '../../../utils/titles-and-labels';
import styles from './Paginator.module.css';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const Paginator = ({ pageEvent, totalElements, pageEventChangeHandler }) => {

  const { pageIndex, pageSize } = pageEvent;

  let totalNumberPages = Math.ceil(totalElements / pageSize);
  let pageNumberLabel = paginatorPageNUmber(pageIndex, totalNumberPages);

  const changePageNumber = index => {
    pageEvent = { ...pageEvent,
                  pageIndex: pageIndex + index};
    pageNumberLabel = paginatorPageNUmber(pageIndex, totalNumberPages);
    pageEventChangeHandler(pageEvent);
  };

  const changePageSize = event => {
    pageEvent = { ...pageEvent,
                  pageSize: Number(event['target']['value']) };
    pageEventChangeHandler(pageEvent);
  };

  return (
    <section className={styles.container}>
      <label className={styles.itemsPage}>{PAGINATOR_ITEMS_PAGE}</label>
      <select className={styles.select} onChange={changePageSize}>
        <option className={styles.option} value={4}>4</option>
        <option className={styles.option} value={8}>8</option>
        <option className={styles.option} value={12}>12</option>
      </select>
      <label className={styles.pageNumber}>{pageNumberLabel}</label>
      <section className={styles.buttonsSection}>
        <MdOutlineChevronLeft className={`${styles.icon} ${pageEvent['pageIndex'] === 1 ? styles.disabled : ''}`} onClick={() => changePageNumber(-1)} />
        <MdOutlineChevronRight className={`${styles.icon} ${pageEvent['pageIndex'] === totalNumberPages ? styles.disabled : ''}`} onClick={() => changePageNumber(1)} />
      </section>
    </section>
  );

};

export default Paginator;
