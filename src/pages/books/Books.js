import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import api from './../../utils/api';
import BookCard from '../../components/cards/book-card/BookCard';
import Loading from '../../components/spinner/loading/Loading';
import styles from './Books.module.css';
import Button from '../../components/buttons/button/Button';
import { BOOKS_PAGE_CREATE_LABEL, BOOKS_PAGE_TITLE, ERROR_MESSAGE_TITLE, SUCCESS_MESSAGE_TITLE } from '../../utils/titles-and-labels';
import NotificationsDialog from '../../components/dialogs/notifications-dialog/NotificationsDialog';

const initialBooksState = { books: [], totalElements: 0 };
const initialModalsState = { showNotifications: false, openAddBook: false, message: '' };
const GET_BOOKS_URL = '/books';
const CREATE_BOOK_URL = '/books/create';

const Books = ({ currentUser }) => {

  const [ state, setState ] = useState(initialBooksState);
  const [ modalsState, setModalsState ] = useState(initialModalsState);

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

  const onClickCreateBookButton = option => { 
    setModalsState({ ...modalsState, openAddBook: option });
  };

  const onAddBook = newBook => { 
    api.post(CREATE_BOOK_URL, newBook)
    .then(res => setModalsState({ ...modalsState, showNotifications: true, message: res['message'] }))
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
      {modalsState['openAddBook'] && createPortal(<NotificationsDialog title={ERROR_MESSAGE_TITLE} message={modalsState['message']} onClose={() => onClickCreateBookButton(false)} />, document.body)}
      {modalsState['showNotifications'] && createPortal(<NotificationsDialog title={SUCCESS_MESSAGE_TITLE} message={modalsState['message']} onClose={() => setModalsState({ ...modalsState, showNotifications: false })} />, document.body)}
      {modalsState['showNotifications'] && createPortal(<NotificationsDialog title={ERROR_MESSAGE_TITLE} message={modalsState['message']} onClose={() => setModalsState({ ...modalsState, showNotifications: false })} />, document.body)}
    </section>
  );

};

export default Books;
