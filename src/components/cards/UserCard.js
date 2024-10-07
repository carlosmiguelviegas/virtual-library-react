import Avatar from './../../assets/female_user.png';
import styles from './UserCard.module.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import ButtonCard from './../buttons/ButtonCard';

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
        <p className={styles.infoLabel}>INFORMATION</p>
        <ButtonCard handlerOnClick={handlerOnClick} />
        <section className={styles.name}>
          <label className={styles.label}>Name:</label>
          <p className={styles.property}>{user && user['name']}</p>
        </section>
        <section className={styles.role}>
          <label className={styles.label}>Role:</label>
          <p className={styles.property}>{user && user['role'] === 'admin' ? 'Administrator' : 'User'}</p>
        </section>
        <section className={styles.email}>
          <MdOutlineMailOutline className={styles.icon} />
          <p className={styles.property}>{user && user['email']}</p>
        </section>
      </section>
    </section>
  );

};

export default UserCard;
