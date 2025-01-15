import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import api from './../../utils/api';
import Loading from '../../components/spinner/loading/Loading';
import styles from './Books.module.css';
import Button from '../../components/buttons/button/Button';
import { BOOKS_PAGE_CREATE_LABEL, BOOKS_PAGE_TITLE, ERROR_MESSAGE_TITLE } from '../../utils/titles-and-labels';
import CreateBookDialog from '../../components/dialogs/create-book-dialog/CreateBookDialog';
import GeneralDialog from '../../components/dialogs/general-dialog/GeneralDialog';
import { selectCurrentUser } from '../../store/users/users.selector';
import { setBooksPreview } from '../../store/books/books.action';
import { selectBooksPreview } from '../../store/books/users.selector';

const initialModalsState = { showNotification: false, openAddBook: false, message: '' };
const BOOKS_URL = '/books';
const BOOKS_PREVIEW_URL = `${BOOKS_URL}/preview?categories=`;

const categories = 'IT,SC';

const Books = () => {

  const [ modalsState, setModalsState ] = useState(initialModalsState);
  const dispatch = useDispatch();
  const booksPreview = useSelector(selectBooksPreview);
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {

    const onGetBooksPreview = async() => {
      
      try {
        const response = await api.get(`${BOOKS_PREVIEW_URL}${categories}`);
        dispatch(setBooksPreview(response['data']));
      } catch(err) {
        console.log(err);
      }

    };

    onGetBooksPreview();

  }, [dispatch]);

  

  const onClickCreateBookButton = option => setModalsState({ ...modalsState, openAddBook: option });

  const onAddBook = newBook => {
    api.post(BOOKS_URL, newBook)
    .then(() => {})
    .catch(err => setModalsState({ ...modalsState, showNotification: true, message: err['response']['data']['errors'][0]['message'] }));
  };

  const preview = Object.keys(booksPreview).map(el => booksPreview[el]);

  return !preview.length ? <Loading /> : (
    <section>
      <h1 className={styles.title}>{BOOKS_PAGE_TITLE}</h1>
      <hr className={styles.divider} />
      <section className={styles.button}>
      {'admin' === currentUser['role'] && <Button onClickHandler={() => onClickCreateBookButton(true)}>{BOOKS_PAGE_CREATE_LABEL}</Button>}
      </section>
      {/* <section className={styles.booksContainer}>
        {preview}
      </section> */}
      {modalsState['openAddBook'] && createPortal(<CreateBookDialog onSetBook={onAddBook} onClose={() => onClickCreateBookButton(false)} />, document.body)}
      <GeneralDialog showModal={modalsState['showNotification']} title={ERROR_MESSAGE_TITLE} message={modalsState['message']} onClose={() => setModalsState({ ...modalsState, showNotification: false })} />
    </section>
  );

};

export default Books;
