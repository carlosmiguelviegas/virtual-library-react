import { ICON_DROPDOWN_ADMIN_ROLE, ICON_DROPDOWN_LOGOUT_LINK, ICON_DROPDOWN_PROFILE_LINK, ICON_DROPDOWN_USER_ROLE } from '../../../utils/titles-and-labels';
import styles from './LoggedIconDropdown.module.css';
import { IoExitOutline } from "react-icons/io5";

const LoggedIconDropdown = ({ currentUser, onLinkClick, onLogout }) => {
  return (
    <section className={styles.dropdownContainer}>
      <p className={`${styles.userInfo} ${styles.name}`}>{currentUser['name']}</p>
      <p className={`${styles.userInfo} ${styles.property}`}>{'admin' === currentUser['role'] ? ICON_DROPDOWN_ADMIN_ROLE : ICON_DROPDOWN_USER_ROLE}</p>
      <span className={styles.option} onClick={onLinkClick}><p className={styles.optionButton}>{ICON_DROPDOWN_PROFILE_LINK}</p></span>
      <span className={styles.option} onClick={onLogout}>
        <IoExitOutline />
        <p className={styles.optionButton}>{ICON_DROPDOWN_LOGOUT_LINK}</p>
      </span>
    </section>
  );
};

export default LoggedIconDropdown;
