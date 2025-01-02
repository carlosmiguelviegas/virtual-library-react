import { useState } from 'react';

import styles from './InputField.module.css';
import { checkIsEmailValid, checkIsRequiredError, checkMaxError, checkMaxLengthError, checkMinError, checkMinLengthError } from '../../../utils/validators/validators';

const InputField = ({ type = 'text', label, name, value, required = false, email = false, minLength, maxLength, min, max, width = 189, handlerOnChange }) => {

  const [ inputFieldError, setInputFieldError ] = useState(null);

  const onValidateInput = event => {
    const error = checkValidationErrors(event['target']['value']);
    setInputFieldError(error ? error : null);
    handlerOnChange(event);
  };

  const checkValidationErrors = value => {
    let error = checkIsRequiredError(required, value);
    if (!error) error = checkIsEmailValid(email, value);
    if (!error) error = checkMaxLengthError(maxLength, value);
    if (!error) error = checkMinLengthError(minLength, value);
    if (!error) error = checkMaxError(max, value);
    if (!error) error = checkMinError(min, value);
    return error || null;
  };

  const blurHandler = event => {
    const error = checkIsRequiredError(required, event['target']['value']);
    setInputFieldError(error ? error : null);
  };

  return (
    <section className={styles.formControl}>
      <label className={styles.label}>{ label }</label>
      <input className={`${styles.input} ${inputFieldError ? styles.error : ''} `} type={type} name={name} value={value} style={{width:` ${width}px`}} onChange={onValidateInput} onBlur={blurHandler} />
      {inputFieldError && <div className={styles.errorClass}>{inputFieldError}</div>}
    </section>
  );

};

export default InputField;
