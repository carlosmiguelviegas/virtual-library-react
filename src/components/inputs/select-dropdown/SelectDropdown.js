import { useState } from 'react';

import styles from './SelectDropdown.module.css';
import { checkIsRequiredError } from '../../../utils/validators/validators';

const SelectDropdown = ({ label, list, name, required = false, handlerOnChange }) => {

  const [ inputFieldError, setInputFieldError ] = useState(null);
  
  const optionsToDisplay = list.map(option => <option className={styles.option} value={option['code']} key={option['code']}>{option['label']}</option>);

  const onValidateInput = event => {
    const error = checkIsRequiredError(required, event['target']['value']);
    setInputFieldError(error ? error : null);
    handlerOnChange(event);
  };

  const blurHandler = event => {
    const error = checkIsRequiredError(required, event['target']['value']);
    setInputFieldError(error ? error : null);
  };

  return (
    <div className={styles.formControl}>
      <label className={styles.label}>{label}</label>
      <select className={`${styles.select} ${inputFieldError ? styles.error : ''} `} name={name} onChange={onValidateInput} onBlur={blurHandler}>
        {optionsToDisplay}
      </select>
      {inputFieldError && <div className={styles.errorClass}>{inputFieldError}</div>}
    </div>
  );
};

export default SelectDropdown;
