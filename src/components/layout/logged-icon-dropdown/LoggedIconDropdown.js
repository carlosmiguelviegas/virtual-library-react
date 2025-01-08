import { LOGOUT_LINK } from '../../../utils/titles-and-labels';
import styles from './LoggedIconDropdown.module.css';

const LoggedIconDropdown = ({ onLogout }) => {
  return (
    <section className={styles.dropdownContainer}>
      <span className={styles.option} onClick={}><p>{}</p></span>
      <span className={styles.option} onClick={onLogout}><p>{LOGOUT_LINK}</p></span>
    </section>
  );
};

export default LoggedIconDropdown;
