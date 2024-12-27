import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import InputField from '../../components/inputs/input-field/InputField';
import styles from './Register.module.css';
import { SIGN_UP_BUTTON_CANCEL_LABEL, SIGN_UP_BUTTON_LABEL, SIGN_UP_CONFIRM_PASSWORD_LABEL, SIGN_UP_EMAIL_LABEL, SIGN_UP_NAME_LABEL, SIGN_UP_PASSWORD_LABEL, SIGN_UP_TITLE } from '../../utils/titles-and-labels';
import Button from '../../components/buttons/button/Button';
import axios from 'axios';
import DisplayAndHidePassword from '../../components/inputs/display-and-hide-password/DisplayAndHidePassword';

const SIGN_UP_URL = 'http://localhost:8000/api/v1/users/signup';

const Register = ({ checkLogin }) => {

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

  const onRegisterNewUser = event => {
    event.preventDefault();
    axios.post(SIGN_UP_URL, registerForm)
    .then((res) => {
      checkLogin(res['data']);
      localStorage.setItem('token', res['headers'].get('token'));
      navigate('/home');
    })
    .catch(err => console.log(err));
  };

  const onReset = () => setRegisterForm({ name: '', email: '', password: '', passwordConfirm: '' });

  return (
    <form className={styles.form} onSubmit={onRegisterNewUser}>
      <section className={styles.titleContainer}>
        <h2>{SIGN_UP_TITLE}</h2>
      </section>
      <section className={styles.contentContainer}>
        <InputField type={'text'} label={SIGN_UP_NAME_LABEL} name={'name'} value={registerForm['name']} handlerOnChange={handlerOnChange} width={260} />
        <InputField type={'email'} label={SIGN_UP_EMAIL_LABEL} name={'email'} value={registerForm['email']} handlerOnChange={handlerOnChange} width={260} />
        <section className={styles.row}>
          <InputField type={showPassword ? 'text' : 'password'} label={SIGN_UP_PASSWORD_LABEL} name={'password'} value={registerForm['password']} handlerOnChange={handlerOnChange} />
          <InputField type={showPassword ? 'text' : 'password'} label={SIGN_UP_CONFIRM_PASSWORD_LABEL} name={'passwordConfirm'} value={registerForm['passwordConfirm']} handlerOnChange={handlerOnChange} />
        </section>
        <section className={styles.showPasswordInput}>
          <DisplayAndHidePassword value={showPassword} handlerOnChange={handlerOnChangePassword} />
        </section>
      </section>
      <section className={styles.buttonsSection}>
        <Button type={'submit'}>{SIGN_UP_BUTTON_LABEL}</Button>
        <Button func={'secondary'} onClickHandler={onReset}>{SIGN_UP_BUTTON_CANCEL_LABEL}</Button>
      </section>
    </form>
  );

};

export default Register;
        