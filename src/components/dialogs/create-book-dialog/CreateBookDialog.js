import InputField from '../../inputs/input-field/InputField';
import styles from './CreateBookDialog.module.css';

const CreateBookDialog = () => {

  const submitHandler = event => {
    // it was intentional
  };

  return (
    <section className={styles.modal}>
      <section className={styles.modalContainer}>
        <h2 className={styles.title}>{title}</h2>
        <form className={styles.form} onSubmit={submitHandler}>
          <InputField label={} name={} value={} required handlerOnChange={} />
          <section className={styles.row}>
            <SelectDropdown label={} name={} value={} required handlerOnChange={} />
            <InputField type={'number'} label={} name={} value={} required handlerOnChange={} />
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
