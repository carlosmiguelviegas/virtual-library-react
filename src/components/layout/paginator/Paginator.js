import { PAGINATOR_ITEMS_PAGE, PAGINATOR_PAGE_NUMBER } from '../../../utils/titles-and-labels';
import styles from './Paginator.module.css';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const Paginator = ({ pageEvent, totalElements, pageEventChangeHandler }) => {

  let totalNumberPages = Math.ceil(totalElements / event['pageSize']);

  nextPage = () => {
    pageEvent = { ...pageEvent,
              pageIndex: pageEvent['pageIndex'] + 1 };
    PAGE_NUMBER_LABEL = PAGINATOR_PAGE_NUMBER(pageEvent['pageIndex'], totalNumberPages);
    pageEventChangeHandler(pageEvent);
  };

  previousPage = () => {
    pageEvent = { ...pageEvent,
              pageIndex: pageEvent['pageIndex'] - 1 };
    PAGE_NUMBER_LABEL = PAGINATOR_PAGE_NUMBER(pageEvent['pageIndex'], totalNumberPages);
    pageEventChangeHandler(pageEvent);
  };

  changePageSize = event => {
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
      <label className={styles.pageNumber}>{PAGE_NUMBER_LABEL}</label>
      <section className={styles.buttons-section}>
        <MdOutlineChevronLeft className={`${styles.icon} ${pageEvent['pageIndex'] === 1 ? 'disabled' : ''}`} onClick={previousPage} />
        <MdOutlineChevronRight className={`${styles.icon} ${pageEvent['pageIndex'] === totalNumberPages ? 'disabled' : ''}`} onClick={nextPage} />
      </section>
    </section>
  );

};

export default Paginator;
