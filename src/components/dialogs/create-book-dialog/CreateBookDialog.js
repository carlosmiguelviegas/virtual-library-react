import { useState } from 'react';

import InputField from '../../inputs/input-field/InputField';
import SelectDropdown from './../../inputs/select-dropdown/SelectDropdown';
import styles from './CreateBookDialog.module.css';
import { BOOKS_DIALOG_CANCEL_LABEL, BOOKS_DIALOG_CATEGORY, BOOKS_DIALOG_CREATE_LABEL, BOOKS_DIALOG_QUANTITY, BOOKS_DIALOG_TITLE, BOOKS_DIALOG_TITLE_FIELD } from '../../../utils/titles-and-labels';

const initialState = { title: '', category: '', quantity: '' };

const CreateBookDialog = ({ onSetBook }) => {

  const [ createBookForm, setCreateBookForm ] = useState(initialState);

  const handlerOnChange = event => {
    const { name, value } = event['target'];
    setCreateBookForm(
      { 
        ...createBookForm,
        [name]: value
      }
    );
  };

  const submitHandler = event => {
    event.preventDefault();
    onSetBook(createBookForm);
  };

  return (
    <section className={styles.modal}>
      <section className={styles.modalContainer}>
        <h2 className={styles.title}>{BOOKS_DIALOG_TITLE}</h2>
        <form className={styles.form} onSubmit={submitHandler}>
          <InputField label={BOOKS_DIALOG_TITLE_FIELD} name={'title'} value={createBookForm['title']} required handlerOnChange={handlerOnChange} />
          <section className={styles.row}>
            <SelectDropdown label={BOOKS_DIALOG_CATEGORY} name={'category'} required handlerOnChange={handlerOnChange} />
            <InputField type={'number'} label={BOOKS_DIALOG_QUANTITY} name={'quantity'} value={createBookForm['quantity']} required handlerOnChange={handlerOnChange} />
          </section>
        </form>
        <section className={styles.buttonsSection}>
          <Button type={'submit'}>{BOOKS_DIALOG_CREATE_LABEL}</Button>
          <Button func={'secondary'} onClickHandler={() => onClose(false)}>{BOOKS_DIALOG_CANCEL_LABEL}</Button>
        </section>
      </section>
    </section>
  );

};

export default CreateBookDialog;
