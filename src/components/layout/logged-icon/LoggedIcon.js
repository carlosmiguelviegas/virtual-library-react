import styles from './LoggedIcon.module.css';
import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";

const LoggedIcon = ({ name, isDropdownOpen, onToggle }) => {
  return (
    <span className={styles.icon} onClick={onToggle}>
      {name}
      {isDropdownOpen ?
        <HiMiniChevronUp className={styles.iconChevron} />
        :
        <HiMiniChevronDown className={styles.iconChevron} />}
    </span>
  );
};

export default LoggedIcon;
