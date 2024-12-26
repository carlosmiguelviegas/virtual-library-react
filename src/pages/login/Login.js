import { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import Button from '../../components/buttons/button/Button';
import InputField from '../../components/inputs/input-field/InputField';
import { SIGN_IN_EMAIL_LABEL, SIGN_IN_LABEL, SIGN_IN_PASSWORD_LABEL, SIGN_IN_TITLE } from '../../utils/titles-and-labels';
import DisplayAndHidePassword from '../../components/inputs/display-and-hide-password/DisplayAndHidePassword';

const LOGIN_URL = 'http://localhost:8000/api/v1/users/login';

const Login = ({ checkLogin }) => {

  const [ loginForm, setLoginForm ] = useState({ email: '', password: '' });
  const [ showPassword, setShowPassword ] = useState(false);
  const navigate = useNavigate();

  const handlerOnChange = event => {
    setLoginForm(
      {
        ...loginForm,
        [event['target']['name']]: event['target']['value']
      }
    );
  };

  const handlerOnChangePassword = () => setShowPassword(showPassword => !showPassword);

  const handlerOnSubmit = event => {
    event.preventDefault();
    axios.post(LOGIN_URL, loginForm)
    .then((res) => {
      checkLogin(res['data']);
      // For now I'll use the local storage to keep the token
      // Later, the token will be retrieved using Redux
      localStorage.setItem('token', res['headers'].get('token'));
      navigate('/home');
    })
    .catch(err => console.log(err));
  };

  return (
    <form className={styles.form} onSubmit={handlerOnSubmit}>
      <section className={styles.titleContainer}>
        <h2>{SIGN_IN_TITLE}</h2>
      </section>
      <section className={styles.contentContainer}>
        <InputField type={'email'} label={SIGN_IN_EMAIL_LABEL} name={'email'} value={loginForm['email']} handlerOnChange={handlerOnChange} />
        <InputField type={showPassword ? 'text' : 'password'} label={SIGN_IN_PASSWORD_LABEL} name={'password'} value={loginForm['password']} handlerOnChange={handlerOnChange} />
        <section className={styles.showPasswordInput}>
          <DisplayAndHidePassword value={showPassword} handlerOnChange={handlerOnChangePassword} />
        </section>
      </section>
      <section className={styles.buttonsSection}>
        <Button type={'submit'}>{SIGN_IN_LABEL}</Button>
      </section>
    </form>
  );
};

export default Login;
