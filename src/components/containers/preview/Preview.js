import { Fragment, useEffect } from "react";

import { IT_LABEL, SCIENCES_LABEL } from "../../../utils/titles-and-labels";
import styles from './Preview.module.css';

const Preview = ({ code, books }) => {

  useEffect(() => {
    mapTitle();
  }, []);

  const mapTitle = () => {
    let title;
    switch (code) {
      case 'IT':
        title = IT_LABEL;
        break;
      case 'SC':
        title = SCIENCES_LABEL;
        break;
    }
  };

  return (
    <Fragment>
      <h2>{title}</h2>
      <section className={styles}>
        { books.map() }
      </section>
    </Fragment>
  );
};

export default Preview;
