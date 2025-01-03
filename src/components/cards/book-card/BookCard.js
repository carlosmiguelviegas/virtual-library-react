import Avatar from './../../../assets/female_user.png';
import styles from './BookCard.module.css';

const BookCard = ({ book }) => {

  return (
    <section className={styles.bookCard}>
      <section className={styles.cardHeader}>
        <img className={styles.avatar} src={Avatar} alt='user' />
      </section>
      <section className={styles.cardContent}>
        <p className={styles.infoLabel}>INFORMATION</p>
        <section className={styles.title}>
          <label className={styles.label}>Title:</label>
          <p className={styles.property}>{book && book['title']}</p>
        </section>
        <section className={styles.category}>
          <label className={styles.label}>Category:</label>
          <p className={styles.property}>{book && book['category']}</p>
        </section>
        <section className={styles.availability}>
          <p className={styles.property}>{book && book['availability'] ? 'Available' : 'Not Available'}</p>
        </section>
      </section>
    </section>
  );

};

export default BookCard;
