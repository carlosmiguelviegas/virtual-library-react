import { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';

import { useNavigate } from 'react-router-dom';
import styles from './NavigationBar.module.css';
import { BOOKS_LINK, HOME_LINK, SIGN_IN_LINK, SIGN_UP_LINK, USERS_LINK } from "../../../utils/titles-and-labels";
import LoggedIcon from '../logged-icon/LoggedIcon';
import LoggedIconDropdown from '../logged-icon-dropdown/LoggedIconDropdown';
import { LiaHomeSolid } from "react-icons/lia";
import { PiBooks } from "react-icons/pi";
import { TbUserSquare } from "react-icons/tb";

const NavigationBar = ({ currentUser, onLogout }) => {

  const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);
  const navigate = useNavigate();

  const onLinkClick = link => navigate(link);

  const onToggleDropdown = () => setIsDropdownOpen(isDropdownOpen => !isDropdownOpen);
  
  const onClickLogout = () => {
    onLogout();
    localStorage.removeItem('token');
    navigate('/login');
  };

  const linksList = 'admin' === currentUser?.role ? [ { path: HOME_LINK, icon: <LiaHomeSolid className={styles.icon} /> }, { path: BOOKS_LINK, icon: <PiBooks className={styles.icon} /> }, { path: USERS_LINK, icon: <TbUserSquare className={styles.icon} /> } ] : [ { path: HOME_LINK, icon: <LiaHomeSolid className={styles.icon} /> }, { path: BOOKS_LINK, icon: <PiBooks className={styles.icon} /> }, { path: USERS_LINK, icon: <TbUserSquare className={styles.icon} /> }  ].slice(0, 2);

  return (
    <nav className={styles.navBar}>
      {currentUser['role'] ?
        <Fragment>
          {linksList.map(link => <LinkComponent key={link['path']} link={link} onLinkClick={onLinkClick} />)}
          <LoggedIcon name={currentUser['name']} isDropdownOpen={isDropdownOpen} onToggle={onToggleDropdown} />
          {isDropdownOpen && createPortal(<LoggedIconDropdown currentUser={currentUser} onLogout={onClickLogout} />, document.body)}
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
