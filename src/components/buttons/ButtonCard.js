import styles from './ButtonCard.module.css';
import { MdOutlinePersonOff } from 'react-icons/md';

const ButtonCard = ({ handlerOnClick }) => {

  return (
    <div className={styles.button}>
      <MdOutlinePersonOff className={styles.icon} onClick={handlerOnClick} />
    </div>
  );

};

export default ButtonCard;
