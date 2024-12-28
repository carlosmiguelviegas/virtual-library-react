import { useState, useEffect } from 'react';

import api from './../../utils/api';
import BookCard from '../../components/cards/book-card/BookCard';
import Loading from '../../components/spinner/loading/Loading';
import styles from './Books.module.css';
import Button from '../../components/buttons/button/Button';
import { BOOKS_PAGE_CREATE_LABEL, BOOKS_PAGE_TITLE } from '../../utils/titles-and-labels';

const GET_BOOKS_URL = '/books';

const Books = ({ currentUser }) => {

  const [ books, setBooks ] = useState([]);

  useEffect(() => {

    const onGetAllBooks = async() => {
      
      try {
        const response = await api.get(GET_BOOKS_URL);
        const totalElements = response['data']['total']; console.log(totalElements);
        setBooks(books => books.concat([ ...response['data']['booksList'] ]));
      } catch(err) {
        console.log(err);
      }

    };

    onGetAllBooks();

  }, []);

  const booksToDisplay = books.map(book => <BookCard key={book['_id']} book={book} />)

  return !booksToDisplay.length ? <Loading /> : (
    <section>
      <h1 className={styles.title}>{BOOKS_PAGE_TITLE}</h1>
      <hr className={styles.divider} />
      <section className={styles.button}>
      {<Button>{BOOKS_PAGE_CREATE_LABEL}</Button>}
      </section>
      {/* <section className={styles.booksContainer}>
        {booksToDisplay}
      </section> */}
    </section>
  );

};

export default Books;
