import styles from './InputField.module.css';

const InputField = ({ type = 'text', label, name, value, width = 189, handlerOnChange }) => {

  return (
    <section className={styles.formControl}>
      <label className={styles.label}>{ label }</label>
      <input className={styles.input} type={type} name={name} value={value} style={{width:` ${width}px`}} onChange={handlerOnChange} />
    </section>
  );

};

export default InputField;
