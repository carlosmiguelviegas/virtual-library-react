import { useState, useEffect } from 'react';

import api from './../../utils/api';
import BookCard from '../../components/cards/book-card/BookCard';
import Loading from '../../components/spinner/loading/Loading';
import styles from './Books.module.css';
import Button from '../../components/buttons/button/Button';
import { BOOKS_PAGE_CREATE_LABEL, BOOKS_PAGE_TITLE } from '../../utils/titles-and-labels';

const GET_BOOKS_URL = '/books';
const initialBooksState = { books: [], totalElements: 0 };

const Books = ({ currentUser }) => {

  const [ state, setState ] = useState(initialBooksState);

  useEffect(() => {

    const onGetAllBooks = async() => {
      
      try {
        const response = await api.get(GET_BOOKS_URL);
        setState({ books: [...response['data']['booksList']], totalElements: response['data']['total'] });
      } catch(err) {
        console.log(err);
      }

    };

    onGetAllBooks();

  }, []);

  const booksToDisplay = state['books'].map(book => <BookCard key={book['_id']} book={book} />)

  return !booksToDisplay.length ? <Loading /> : (
    <section>
      <h1 className={styles.title}>{BOOKS_PAGE_TITLE}</h1>
      <hr className={styles.divider} />
      <section className={styles.button}>
      {'admin' === currentUser['role'] && <Button>{BOOKS_PAGE_CREATE_LABEL}</Button>}
      </section>
      {/* <section className={styles.booksContainer}>
        {booksToDisplay}
      </section> */}
    </section>
  );

};

export default Books;
