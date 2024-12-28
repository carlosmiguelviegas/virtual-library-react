import { PAGINATOR_PAGE_NUMBER } from '../../../utils/titles-and-labels';
import styles from './Paginator.module.css';

const Paginator = ({ event, totalElements, clickHandler }) => {

  let totalNumberPages = Math.ceil(totalElements / event['pageSize']);

  nextPage = () => {
    event = { ...event,
              pageIndex: event['pageIndex'] + 1 };
    PAGE_NUMBER_LABEL = PAGINATOR_PAGE_NUMBER(event['pageIndex'], totalNumberPages);
    clickHandler(event);
  };

  return (
    <section className={styles.container}>
      {/* <label className={styles.items-page}>{{ ITEMS_PAGE_LABEL }}</label>
      <select className={styles.select} (change)="changePageSize($event)">
        <option style="background-color: blanchedalmond" [value]="4">4</option>
        <option style="background-color: blanchedalmond" [value]="8">8</option>
        <option style="background-color: blanchedalmond" [value]="12">12</option>
      </select>
      <label className={styles.page-number}>{{ PAGE_NUMBER_LABEL }}</label>
      <section className={styles.buttons-section">
        <mat-icon className={styles.icon} [ngClass]="{ 'disabled': event['pageIndex'] === 1 ? true : false }" [matTooltip]="previousPageTooltip"
                  fontIcon="chevron_left" onClick={previousPage}>
        </mat-icon>
        <mat-icon className={styles.icon} [ngClass]="{ 'disabled': event['pageIndex'] === totalNumberPages ? true : false }" [matTooltip]="nextPageTooltip"
                  fontIcon="chevron_right" onClick={nextPage}>
        </mat-icon>
      </section> */}
    </section>
  );

};

export default Paginator;
