import { Fragment } from 'react';

import { useNavigate } from 'react-router-dom';
import styles from './NavigationBar.module.css';
import { BOOKS_LINK, HOME_LINK, LOGOUT_LINK, SIGN_IN_LINK, SIGN_UP_LINK, USERS_LINK } from "../../../utils/titles-and-labels";

const NavigationBar = ({ currentUser, onLogout }) => {

  const navigate = useNavigate();

  const onLinkClick = link => navigate(link);
  
  const onClickLogout = () => {
    onLogout();
    localStorage.removeItem('token');
    navigate('/login');
  };

  const linksList = 'admin' === currentUser?.role ? [ HOME_LINK, BOOKS_LINK, USERS_LINK ] : [ HOME_LINK, BOOKS_LINK, USERS_LINK ].slice(0, 2);

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
