import { useState } from 'react';

import styles from './InputField.module.css';

const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const InputField = ({ type = 'text', label, name, value, required = false, email = false, minLength, maxLength, width = 189, handlerOnChange }) => {

  const [ inputFieldError, setInputFieldError ] = useState(null);

  const onValidateInput = event => {
    const error = getValidationErrors(event['target']['value']);
    setInputFieldError(error ? error : null);
    handlerOnChange(event);
  };

  const getValidationErrors = value => {
    if (required && !value) {
      return 'The field is mandatory.';
    } else if (email && !value.match(isValidEmail)) {
      return 'Please provide a valid email address.';
    } else if (maxLength && value.length > maxLength) {
      return 'max';
    } else if (minLength && value.length < minLength) {
      return 'min';
    } else {
      return null;
    }
  };

  return (
    <section className={styles.formControl}>
      <label className={styles.label}>{ label }</label>
      <input className={`${styles.input} ${inputFieldError ? styles.error : ''} `} type={type} name={name} value={value} style={{width:` ${width}px`}} onChange={onValidateInput} />
      {inputFieldError && <div className={styles.errorClass}>{inputFieldError}</div>}
    </section>
  );

};

export default InputField;
