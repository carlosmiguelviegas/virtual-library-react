import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import api from './../../utils/api';
import BookCard from '../../components/cards/book-card/BookCard';
import Loading from '../../components/spinner/loading/Loading';
import styles from './Books.module.css';
import Button from '../../components/buttons/button/Button';
import { BOOKS_PAGE_CREATE_LABEL, BOOKS_PAGE_TITLE, ERROR_MESSAGE_TITLE } from '../../utils/titles-and-labels';
import CreateBookDialog from '../../components/dialogs/create-book-dialog/CreateBookDialog';
import NotificationsDialog from '../../components/dialogs/notifications-dialog/NotificationsDialog';

const initialBooksState = { books: [], totalElements: 0 };
const initialModalsState = { showNotifications: false, openAddBook: false, message: '' };
const BOOKS_URL = '/books';

const Books = ({ currentUser }) => {

  const [ state, setState ] = useState(initialBooksState);
  const [ modalsState, setModalsState ] = useState(initialModalsState);

  useEffect(() => onGetAllBooks(), []);

  const onGetAllBooks = async() => {
      
    try {
      const response = await api.get(BOOKS_URL);
      setState({ books: [...response['data']['booksList']], totalElements: response['data']['total'] });
    } catch(err) {
      console.log(err);
    }

  };

  const onClickCreateBookButton = option => setModalsState({ ...modalsState, openAddBook: option });

  const onAddBook = newBook => {
    api.post(BOOKS_URL, newBook)
    .then(() => onGetAllBooks())
    .catch(err => setModalsState({ ...modalsState, showNotifications: true, message: err['response']['data']['errors'][0]['message'] }));
  };

  const booksToDisplay = state['books'].map(book => <BookCard key={book['_id']} book={book} />)

  return !booksToDisplay.length ? <Loading /> : (
    <section>
      <h1 className={styles.title}>{BOOKS_PAGE_TITLE}</h1>
      <hr className={styles.divider} />
      <section className={styles.button}>
      {'admin' === currentUser['role'] && <Button onClickHandler={() => onClickCreateBookButton(true)}>{BOOKS_PAGE_CREATE_LABEL}</Button>}
      </section>
      {/* <section className={styles.booksContainer}>
        {booksToDisplay}
      </section> */}
      {modalsState['openAddBook'] && createPortal(<CreateBookDialog onSetBook={onAddBook} onClose={() => onClickCreateBookButton(false)} />, document.body)}
      {modalsState['showNotifications'] && createPortal(<NotificationsDialog title={ERROR_MESSAGE_TITLE} message={modalsState['message']} onClose={() => setModalsState({ ...modalsState, showNotifications: false })} />, document.body)}
    </section>
  );

};

export default Books;
