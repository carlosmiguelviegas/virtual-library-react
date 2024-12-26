import { SIGN_IN_SHOW_PASSWORD_LABEL } from '../../../utils/titles-and-labels';
import styles from './DisplayAndHidePassword.module.css';

const DisplayAndHidePassword = ({ value, handlerOnChange }) => {

  return (
    <section className={styles.showPasswordInput}>
      <input type={'checkbox'} value={value} onChange={handlerOnChange} />
      <p className={styles.showPasswordLabel}>{SIGN_IN_SHOW_PASSWORD_LABEL}</p>
    </section>
  );

};

export default DisplayAndHidePassword;
