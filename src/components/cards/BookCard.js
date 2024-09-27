import Avatar from './../../assets/female_user.png';
import styles from './BookCard.module.css';

const BookCard = ({ book }) => {

  return (
    <section className={styles.userCard}>
      <section className={styles.cardHeader}>
        <img className={styles.avatar} src={Avatar} alt='user' />
      </section>
      <section className={styles.cardContent}>
        <p className={styles.infoLabel}>INFORMATION</p>
        {/* <MdOutlinePersonOff className={styles.disableIcon} onClick={() => handlerOnClick(user['_id'])} /> */}
        <section className={styles.name}>
          <label className={styles.label}>Name:</label>
          <p className={styles.property}>{book && book['title']}</p>
        </section>
        <section className={styles.role}>
          <label className={styles.label}>Role:</label>
          <p className={styles.property}>{book && book['category']}</p>
        </section>
        <section className={styles.email}>
          {/* <MdOutlineMailOutline className={styles.icon} /> */}
          <p className={styles.property}>{book && book['availability'] ? 'Available' : 'Not Available'}</p>
        </section>
      </section>
    </section>
  );

};

export default BookCard;
