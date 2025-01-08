import styles from './LoggedIcon.module.css';

const LoggedIcon = ({ name, onToggle }) => {
  return (
    <span className={styles.icon} onClick={onToggle}>{name}</span>
  );
};

export default LoggedIcon;
