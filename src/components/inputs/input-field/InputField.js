import { useState } from 'react';

import styles from './InputField.module.css';
import { FIELD_INVALID_MAX_LENGTH, FIELD_INVALID_MIN_LENGTH, FIELD_REQUIRED, INVALID_EMAIL_ADDRESS } from './../../../utils/messages';

const validEmailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const InputField = ({ type = 'text', label, name, value, required = false, email = false, minLength, maxLength, width = 189, handlerOnChange }) => {

  const [ inputFieldError, setInputFieldError ] = useState(null);

  const onValidateInput = event => {
    const error = checkValidationErrors(event['target']['value']);
    setInputFieldError(error ? error : null);
    handlerOnChange(event);
  };

  const checkValidationErrors = value => {
    if (required && !value) {
      return FIELD_REQUIRED;
    } else if (email && !value.match(validEmailPattern)) {
      return INVALID_EMAIL_ADDRESS;
    } else if (maxLength && value.length > maxLength) {
      return FIELD_INVALID_MAX_LENGTH(maxLength);
    } else if (minLength && value.length < minLength) {
      return FIELD_INVALID_MIN_LENGTH(minLength);
    } else {
      return null;
    }
  };

  const blurHandler = event => {
    const error = checkIsRequiredError(event['target']['value']);
    setInputFieldError(error ? error : null);
  };

  const checkIsRequiredError = value => required && !value ? FIELD_REQUIRED : null;

  return (
    <section className={styles.formControl}>
      <label className={styles.label}>{ label }</label>
      <input className={`${styles.input} ${inputFieldError ? styles.error : ''} `} type={type} name={name} value={value} style={{width:` ${width}px`}} onChange={onValidateInput} onBlur={blurHandler} />
      {inputFieldError && <div className={styles.errorClass}>{inputFieldError}</div>}
    </section>
  );

};

export default InputField;
