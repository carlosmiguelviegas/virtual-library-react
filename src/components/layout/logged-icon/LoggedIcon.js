import styles from './LoggedIcon.module.css';

const LoggedIcon = ({ name, onToggle }) => {
  return (
    <span onClick={onToggle}>{name}</span>
  );
};

export default LoggedIcon;
