import Avatar from './../../../assets/female_user.png';
import styles from './BooksPreviewCard.module.css';

const BooksPreviewCard = ({ book }) => {

  return (
    <section className={styles.bookCard}>
      <section className={styles.cardHeader}>
        <img className={styles.avatar} src={Avatar} alt='book' />
      </section>
      <section className={styles.cardContent}>
        <p className={styles.property}>{book['title']}</p>
      </section>
    </section>
  );

};

export default BooksPreviewCard;
