import { HOME_PAGE_WELCOME } from '../../utils/titles-and-labels';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section>
      <h1 className={styles.title}>{HOME_PAGE_WELCOME}</h1>
      <hr className={styles.divider} />
    </section>
  );
};

export default Home;
