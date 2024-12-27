import { Fragment } from 'react';

import { useNavigate } from 'react-router-dom';
import styles from './NavigationBar.module.css';
import { LOGOUT_LINK, SIGN_IN_LINK, SIGN_UP_LINK } from "../../../utils/titles-and-labels";

const NavigationBar = ({ currentUser, linksList, onLogout }) => {

  const navigate = useNavigate();

  const onLinkClick = link => navigate(link);
  
  const onClickLogout = () => {
    onLogout();
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className={styles.navBar}>
      {currentUser['role'] ?
        <Fragment>
          {linksList.map(link => <button className={`${styles.ankor} ${styles.link}`} key={link} onClick={() => onLinkClick(link)}>{link}</button>)}
          <button className={`${styles.ankor} ${styles.link}`} onClick={onClickLogout}>{LOGOUT_LINK}</button>
        </Fragment>
        :
        <Fragment>
          <button className={`${styles.ankor} ${styles.link}`} onClick={() => onLinkClick('login')}>{SIGN_IN_LINK}</button>
          <button className={`${styles.ankor} ${styles.link}`} onClick={() => onLinkClick('signup')}>{SIGN_UP_LINK}</button>
        </Fragment>}
    </nav>
  );

};

export default NavigationBar;
