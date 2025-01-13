import { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import styles from './NavigationBar.module.css';
import { SIGN_UP_LABEL } from "../../../utils/titles-and-labels";
import { LINKS_LIST, LOGGED_OUT_LINKS_LIST } from './nav-bar-utils';
import LoggedIcon from '../logged-icon/LoggedIcon';
import LoggedIconDropdown from '../logged-icon-dropdown/LoggedIconDropdown';
import LinkComponent from '../link-component.js/LinkComponent';
import { selectCurrentUser } from './../../../store/users/users.selector';
import { logoutUser } from '../../../store/users/users.action';

const NavigationBar = () => {

  const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedOutLinksList = LOGGED_OUT_LINKS_LIST;

  const onLinkClick = link => {
    navigate(link);
    setIsDropdownOpen(false);
  };

  const onToggleDropdown = () => setIsDropdownOpen(isDropdownOpen => !isDropdownOpen);
  
  const onClickLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem('token');
    navigate('/login');
    setIsDropdownOpen(false);
  };

  const loggedInLinksList = 'admin' === currentUser?.role ? LINKS_LIST : LINKS_LIST.slice(0, 2);

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
