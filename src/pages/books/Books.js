import { useState, useEffect } from 'react';

import api from './../../utils/api';
import BookCard from '../../components/cards/BookCard';
import Loading from '../../components/spinner/Loading';
import styles from './Books.module.css';

const GET_BOOKS_URL = '/books';

const Books = () => {

  const [ books, setBooks ] = useState([]);

  useEffect(() => {

    const onGetAllBooks = async() => {
      
      try {
        const response = await api.get(GET_BOOKS_URL);
        setBooks(books => books.concat([ ...response['data'] ]));
      } catch(err) {
        console.log(err);
      }

    };

    onGetAllBooks();

  }, []);

  const booksToDisplay = books.map(book => <BookCard key={book['_id']} book={book} />)

  return !booksToDisplay.length ? <Loading /> : (
    <section className={styles.booksContainer}>
      {booksToDisplay}
    </section>
  );

};

export default Books;
