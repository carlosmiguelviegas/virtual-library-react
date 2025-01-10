import { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';

import { useNavigate } from 'react-router-dom';
import styles from './NavigationBar.module.css';
import { BOOKS_LINK, HOME_LINK, SIGN_IN_LINK, SIGN_UP_LABEL, SIGN_UP_LINK, USERS_LINK } from "../../../utils/titles-and-labels";
import LoggedIcon from '../logged-icon/LoggedIcon';
import LoggedIconDropdown from '../logged-icon-dropdown/LoggedIconDropdown';
import { FiUserPlus } from "react-icons/fi";
import { LiaHomeSolid } from "react-icons/lia";
import { PiBooks } from "react-icons/pi";
import { TbLogin } from "react-icons/tb";
import { TbUserSquare } from "react-icons/tb";
import LinkComponent from '../link-component.js/LinkComponent';

const NavigationBar = ({ currentUser, onLogout }) => {

  const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);
  const navigate = useNavigate();
  let linksList = [ { path: HOME_LINK, icon: <LiaHomeSolid className={styles.icon} /> },
                    { path: BOOKS_LINK, icon: <PiBooks className={styles.icon} /> },
                    { path: USERS_LINK, icon: <TbUserSquare className={styles.icon} /> }
                  ];
  const loggedOutLinksList = [ { path: SIGN_IN_LINK, icon: <TbLogin className={styles.icon} /> },
                               { path: SIGN_UP_LINK, icon: <FiUserPlus className={styles.icon} /> }
                             ];

  const onLinkClick = link => navigate(link);

  const onToggleDropdown = () => setIsDropdownOpen(isDropdownOpen => !isDropdownOpen);
  
  const onClickLogout = () => {
    onLogout();
    localStorage.removeItem('token');
    navigate('/login');
  };

  const loggedInLinksList = 'admin' === currentUser?.role ? linksList : linksList.slice(0, 2);

  return (
    <nav className={styles.navBar}>
      {currentUser['role'] ?
        <Fragment>
          {loggedInLinksList.map(link => <LinkComponent key={link['path']} link={link} onLinkClick={onLinkClick} />)}
          <LoggedIcon name={currentUser['name']} isDropdownOpen={isDropdownOpen} onToggle={onToggleDropdown} />
          {isDropdownOpen && createPortal(<LoggedIconDropdown currentUser={currentUser} onLogout={onClickLogout} />, document.body)}
        </Fragment>
        :
        <Fragment>
          <LinkComponent key={loggedOutLinksList[0]['path']} link={loggedOutLinksList[0]} onLinkClick={() => onLinkClick(loggedOutLinksList[0]['path'])} />
          <LinkComponent key={loggedOutLinksList[1]['path']} link={loggedOutLinksList[1]} onLinkClick={() => onLinkClick(SIGN_UP_LABEL)} />
        </Fragment>}
    </nav>
  );

};

export default NavigationBar;
