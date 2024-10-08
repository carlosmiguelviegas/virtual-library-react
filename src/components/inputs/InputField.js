import styles from './InputField.module.css';

const InputField = ({ type = 'text', label, name, value, handlerOnChange }) => {

  return (
    <section className={styles.formGroup}>
      <label>{ label }</label>
      <input className={styles.input} type={type} name={name} value={value} onChange={handlerOnChange} />
    </section>
  );

};

export default InputField;
