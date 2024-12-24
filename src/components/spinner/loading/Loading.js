import styles from './Loading.module.css';

const Loading = () => {
  return (
    <section className={styles.spinnerContainer}>
      <div className={styles.loader}></div>
    </section>
  );
};

export default Loading;
