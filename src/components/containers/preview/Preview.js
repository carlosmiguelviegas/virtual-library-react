import { Fragment } from "react";

import { IT_LABEL, SCIENCES_LABEL } from "../../../utils/titles-and-labels";
import styles from './Preview.module.css';
import BooksPreviewCard from "../../cards/books-preview-card/BooksPreviewCard";

const Preview = ({ code, books }) => {

  const title = mapTitle();

  function mapTitle() {
    let title;
    switch (code) {
      case 'IT':
        title = IT_LABEL;
        break;
      case 'SC':
        title = SCIENCES_LABEL;
        break;
      default:
        title = IT_LABEL;
        break;
    }
    return title;
  };

  return (
    <Fragment>
      <h2>{title}</h2>
      <section className={styles.previewContainer}>
        { books.map(book => <BooksPreviewCard key={book['_id']} book={book} />) }
      </section>
    </Fragment>
  );
};

export default Preview;
