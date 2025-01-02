import { useState } from 'react';

import InputField from '../../inputs/input-field/InputField';
import SelectDropdown from './../../inputs/select-dropdown/SelectDropdown';
import styles from './CreateBookDialog.module.css';

const initialState = { title: '', category: '', quantity: '' };

const CreateBookDialog = () => {

  const [ createBookForm, setCreateBookForm ] = useState(initialState);

  const handlerOnChange = event => {
    // it was intentional
  };

  const submitHandler = event => {
    // it was intentional
  };

  return (
    <section className={styles.modal}>
      <section className={styles.modalContainer}>
        <h2 className={styles.title}>{title}</h2>
        <form className={styles.form} onSubmit={submitHandler}>
          <InputField label={'vdvds'} name={'title'} value={createBookForm['title']} required handlerOnChange={handlerOnChange} />
          <section className={styles.row}>
            <SelectDropdown label={'vdvds'} name={'category'} required handlerOnChange={handlerOnChange} />
            <InputField type={'number'} label={'vdvds'} name={'quantity'} value={createBookForm['quantity']} required handlerOnChange={handlerOnChange} />
          </section>
        </form>
        <section className={styles.buttonsSection}>
          <Button onClickHandler={onConfirm}>{NOTIFICATIONS_YES_LABEL}</Button>
          <Button func={'secondary'} onClickHandler={() => onClose(false)}>{NOTIFICATIONS_NO_LABEL}</Button>
        </section>
      </section>
    </section>
  );

};

export default CreateBookDialog;
