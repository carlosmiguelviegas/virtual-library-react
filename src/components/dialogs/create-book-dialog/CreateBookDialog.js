import { useState } from 'react';

import InputField from '../../inputs/input-field/InputField';
import SelectDropdown from './../../inputs/select-dropdown/SelectDropdown';
import styles from './CreateBookDialog.module.css';
import { BOOKS_DIALOG_CANCEL_LABEL, BOOKS_DIALOG_CATEGORY, BOOKS_DIALOG_CREATE_LABEL, BOOKS_DIALOG_QUANTITY, BOOKS_DIALOG_TITLE, BOOKS_DIALOG_TITLE_FIELD, CRIME_LABEL, IT_LABEL, MYSTERY_LABEL, ROMANCE_LABEL, SCIENCES_LABEL } from '../../../utils/titles-and-labels';
import Button from '../../buttons/button/Button';

const initialState = { title: '', category: '', quantity: 0 };

const CreateBookDialog = ({ onSetBook, onClose }) => {

  const [ createBookForm, setCreateBookForm ] = useState(initialState);
  const list = [ { code: 'IT', label: IT_LABEL }, { code: 'SC', label: SCIENCES_LABEL }, { code: 'MT', label: MYSTERY_LABEL },
                 { code: 'CR', label: CRIME_LABEL }, { code: 'RO', label: ROMANCE_LABEL } ];

  const handlerOnChange = event => {
    const { name, value } = event['target'];
    setCreateBookForm(
      { 
        ...createBookForm,
        [name]: 'quantity' === name ? Number(value) : value
      }
    );
  };

  const submitHandler = event => {
    event.preventDefault();
    onSetBook(createBookForm);
    onClose();
  };

  return (
    <section className={styles.modal}>
      <section className={styles.modalContainer}>
        <h2 className={styles.title}>{BOOKS_DIALOG_TITLE}</h2>
        <form className={styles.form} onSubmit={submitHandler}>
          <InputField label={BOOKS_DIALOG_TITLE_FIELD} name={'title'} value={createBookForm['title']} required minLength={2} maxLength={50} handlerOnChange={handlerOnChange} />
          <section className={styles.row}>
            <SelectDropdown label={BOOKS_DIALOG_CATEGORY} list={list} name={'category'} value={createBookForm['category']} required handlerOnChange={handlerOnChange} />
            <InputField type={'number'} label={BOOKS_DIALOG_QUANTITY} name={'quantity'} value={createBookForm['quantity']} required min={1} max={10} handlerOnChange={handlerOnChange} />
          </section>
          <section className={styles.buttonsSection}>
            <Button type={'submit'}>{BOOKS_DIALOG_CREATE_LABEL}</Button>
            <Button func={'secondary'} onClickHandler={onClose}>{BOOKS_DIALOG_CANCEL_LABEL}</Button>
          </section>
        </form>
      </section>
    </section>
  );

};

export default CreateBookDialog;
