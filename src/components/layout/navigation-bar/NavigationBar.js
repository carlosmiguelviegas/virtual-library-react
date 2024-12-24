import { Fragment } from 'react';

import styles from './NavigationBar.module.css';
import { LOGOUT_LINK, SIGN_IN_LINK, SIGN_UP_LINK } from "../../../utils/titles-and-labels";

const NavigationBar = ({ isLoggedIn, list, onLogout }) => {

  /* const linksToDisplay = list.map(link => <a className={styles.ankor}><p className={styles.link}>{link}</p></a>); */

  return (
    <nav className={styles.navBar}>
      {isLoggedIn ?
        <Fragment>
          {list.map(link => <a className={styles.ankor}><p className={styles.link}>{link}</p></a>)}
          <a className={styles.ankor} onClick={onLogout}><p className={styles.linkstyles.logout} >{LOGOUT_LINK}</p></a>
        </Fragment>
        :
        <Fragment>
          <a className={styles.ankor}><p className={styles.link}>{SIGN_IN_LINK}</p></a>
          <a className={styles.ankor}><p className={styles.link}>{SIGN_UP_LINK}</p></a>
        </Fragment>
      }
    </nav>
  );

};

export default NavigationBar;
