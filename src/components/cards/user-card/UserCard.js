import Avatar from './../../../assets/female_user.png';
import styles from './UserCard.module.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import ButtonCard from './../../buttons/button-card/ButtonCard';
import { USER_CARD_ADMIN_ROLE, USER_CARD_INFORMATION, USER_CARD_NAME, USER_CARD_ROLE, USER_CARD_USER_ROLE } from '../../../utils/titles-and-labels';

const UserCard = ({ user, onDisableUser }) => {

  const handlerOnClick = () => {
    onDisableUser(user['_id']); console.log(user['_id']);
  };

  return (
    <section className={styles.userCard}>
      <section className={styles.cardHeader}>
        <img className={styles.avatar} src={Avatar} alt='user' />
      </section>
      <section className={styles.cardContent}>
        <p className={styles.infoLabel}>{USER_CARD_INFORMATION}</p>
        <ButtonCard handlerOnClick={handlerOnClick} />
        <section className={styles.name}>
          <label className={styles.label}>{USER_CARD_NAME}</label>
          <p className={styles.property}>{user['name']}</p>
        </section>
        <section className={styles.role}>
          <label className={styles.label}>{USER_CARD_ROLE}</label>
          <p className={styles.property}>{user['role'] === 'admin' ? USER_CARD_ADMIN_ROLE : USER_CARD_USER_ROLE}</p>
        </section>
        <section className={styles.email}>
          <MdOutlineMailOutline className={styles.icon} />
          <p className={styles.property}>{user['email']}</p>
        </section>
      </section>
    </section>
  );

};

export default UserCard;

          