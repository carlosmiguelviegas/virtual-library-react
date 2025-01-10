import styles from './NavigationBar.module.css';
import { BOOKS_LINK, HOME_LINK, SIGN_IN_LINK, SIGN_UP_LINK, USERS_LINK } from '../../../utils/titles-and-labels';
import { FiUserPlus } from "react-icons/fi";
import { LiaHomeSolid } from "react-icons/lia";
import { PiBooks } from "react-icons/pi";
import { TbLogin } from "react-icons/tb";
import { TbUserSquare } from "react-icons/tb";

const LINKS_LIST = [ { path: HOME_LINK, icon: <LiaHomeSolid className={styles.icon} /> },
                     { path: BOOKS_LINK, icon: <PiBooks className={styles.icon} /> },
                     { path: USERS_LINK, icon: <TbUserSquare className={styles.icon} /> }];
const LOGGED_OUT_LINKS_LIST = [ { path: SIGN_IN_LINK, icon: <TbLogin className={styles.icon} /> },
                                { path: SIGN_UP_LINK, icon: <FiUserPlus className={styles.icon} /> }];

export {  
          LINKS_LIST,
          LOGGED_OUT_LINKS_LIST
       };
