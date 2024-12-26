import { Fragment } from 'react';

import { useNavigate } from 'react-router-dom';
import styles from './NavigationBar.module.css';
import { LOGOUT_LINK, SIGN_IN_LINK, SIGN_UP_LINK } from "../../../utils/titles-and-labels";

const NavigationBar = ({ currentUser, linksList, onLogout }) => {

  const navigate = useNavigate();

  const onClickHandler = () => {
    onLogout();
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className={styles.navBar}>
      {currentUser['role'] ?
        <Fragment>
          {linksList.map(link => <a className={styles.ankor} key={link}><p className={styles.link}>{link}</p></a>)}
          <a className={styles.ankor} onClick={onClickHandler}><p className={`${styles.link} ${styles.logout}`}>{LOGOUT_LINK}</p></a>
        </Fragment>
        :
        <Fragment>
          <a className={styles.ankor}><p className={styles.link}>{SIGN_IN_LINK}</p></a>
          <a className={styles.ankor}><p className={styles.link}>{SIGN_UP_LINK}</p></a>
        </Fragment>}
    </nav>
  );

};

export default NavigationBar;
