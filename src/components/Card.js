import Avatar from './../assets/female_user.png';
import styles from './Card.module.css';
import { MdOutlineMailOutline, MdOutlinePersonOff } from 'react-icons/md';

const Card = ({ user, onDisableUser }) => {

  const handlerOnClick = userId => {
    onDisableUser(userId);
  };

  return (
    <section className={styles.userCard}>
      <section className={styles.cardHeader}>
        <img className={styles.avatar} src={Avatar} alt='user' />
      </section>
      <section className={styles.cardContent}>
        <p className={styles.infoLabel}>INFORMATION</p>
        <MdOutlinePersonOff className={styles.disableIcon} onClick={() => handlerOnClick(user['_id'])} />
        <section className={styles.name}>
          <label className={styles.label}>Name:</label>
          <p className={styles.property}>{user['name']}</p>
        </section>
        <section className={styles.role}>
          <label className={styles.label}>Role:</label>
          <p className={styles.property}>{user['role'] === 'admin' ? 'Administrator' : 'User'}</p>
        </section>
        <section className={styles.email}>
          <MdOutlineMailOutline className={styles.icon} />
          <p className={styles.property}>{user['email']}</p>
        </section>
      </section>
    </section>
  );

};

export default Card;
