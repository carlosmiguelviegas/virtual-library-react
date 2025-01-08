import { ICON_DROPDOWN_LOGOUT_LINK, ICON_DROPDOWN_PROFILE_LINK } from '../../../utils/titles-and-labels';
import styles from './LoggedIconDropdown.module.css';

const LoggedIconDropdown = ({ onLinkClick, onLogout }) => {
  return (
    <section className={styles.dropdownContainer}>
      <span className={styles.option} onClick={onLinkClick}><p>{ICON_DROPDOWN_PROFILE_LINK}</p></span>
      <span className={styles.option} onClick={onLogout}><p>{ICON_DROPDOWN_LOGOUT_LINK}</p></span>
    </section>
  );
};

export default LoggedIconDropdown;
