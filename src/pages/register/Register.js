import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import InputField from '../../components/inputs/input-field/InputField';
import styles from './Register.module.css';
import { SIGN_UP_CANCEL_LABEL, SIGN_UP_CONFIRM_PASSWORD_LABEL, SIGN_UP_EMAIL_LABEL, SIGN_UP_LABEL, SIGN_UP_NAME_LABEL, SIGN_UP_PASSWORD_LABEL, SIGN_UP_TITLE } from '../../utils/titles-and-labels';
import Button from '../../components/buttons/button/Button';

const SIGN_UP_URL = 'http://localhost:8000/api/v1/users/signup';

const Register = () => {

  const [ registerForm, setRegisterForm ] = useState({ name: '', email: '', password: '', passwordConfirm: '' });
  const [ showPassword, setShowPassword ] = useState(false);
  const navigate = useNavigate();

  const handlerOnChange = event => {
    setRegisterForm(
      {
        ...registerForm,
        [event['target']['name']]: event['target']['value']
      }
    );
  };

  const handlerOnChangePassword = () => setShowPassword(showPassword => !showPassword);

  const onRegisterNewUser = () => {
    // it was intentional
  };

  const onReset = () => setRegisterForm({ name: '', email: '', password: '', passwordConfirm: '' });

  return (
    <form className={styles.form} onSubmit={onRegisterNewUser}>
      <section className={styles.titleContainer}>
        <h2>{SIGN_UP_TITLE}</h2>
      </section>
      <section className={styles.contentContainer}>
        <InputField type={'text'} label={SIGN_UP_NAME_LABEL} name={'name'} value={registerForm['name']} handlerOnChange={handlerOnChange} />
        <InputField type={'email'} label={SIGN_UP_EMAIL_LABEL} name={'email'} value={registerForm['email']} handlerOnChange={handlerOnChange} />
        <section class="row">
          <InputField type={showPassword ? 'text' : 'password'} label={SIGN_UP_PASSWORD_LABEL} name={'password'} value={registerForm['password']} handlerOnChange={handlerOnChange} />
          <InputField type={showPassword ? 'text' : 'password'} label={SIGN_UP_CONFIRM_PASSWORD_LABEL} name={'passwordConfirm'} value={registerForm['passwordConfirm']} handlerOnChange={handlerOnChange} />
        </section>
      </section>
      <section className={styles.buttonsSection}>
        <Button type={'submit'} label={SIGN_UP_LABEL} />
        <Button label={SIGN_UP_CANCEL_LABEL} func="secondary" onClickHandler={onReset} />
      </section>
    </form>
  );

};

export default Register;
        