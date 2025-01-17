import { useState } from 'react';
import { useDispatch } from 'react-redux';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import Button from '../../components/buttons/button/Button';
import InputField from '../../components/inputs/input-field/InputField';
import { ERROR_MESSAGE_TITLE, SIGN_IN_EMAIL_LABEL, SIGN_IN_LABEL, SIGN_IN_PASSWORD_LABEL, SIGN_IN_TITLE } from '../../utils/titles-and-labels';
import DisplayAndHidePassword from '../../components/inputs/display-and-hide-password/DisplayAndHidePassword';
import GeneralDialog from '../../components/dialogs/general-dialog/GeneralDialog';
import { setCurrentUser, setToken } from './../../store/users/users.action';

const initialLoginFormState = { email: '', password: '' };
const initialModalsState = { showNotification: false, error: '' };

const LOGIN_URL = 'http://localhost:8000/api/v1/users/login';

const Login = () => {

  const [ loginForm, setLoginForm ] = useState(initialLoginFormState);
  const [ showPassword, setShowPassword ] = useState(false);
  const [ modalsState, setModalsState ] = useState(initialModalsState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerOnChange = event => {
    const { name, value } = event['target'];
    setLoginForm(
      {
        ...loginForm,
        [name]: value
      }
    );
  };

  const handlerOnChangePassword = () => setShowPassword(showPassword => !showPassword);

  const handlerOnSubmit = event => {
    event.preventDefault();
    axios.post(LOGIN_URL, loginForm)
    .then((res) => {
      dispatch(setCurrentUser(res['data']));
      dispatch(setToken(res['headers'].get('token')));
      navigate('/home');
    })
    .catch(err => setModalsState({ showNotification: true, error: err['response']['data']['errors'][0]['message']}));
  };

  return (
    <form className={styles.form} onSubmit={handlerOnSubmit}>
      <section className={styles.titleContainer}>
        <h2>{SIGN_IN_TITLE}</h2>
      </section>
      <section className={styles.contentContainer}>
        <InputField type={'email'} label={SIGN_IN_EMAIL_LABEL} name={'email'} value={loginForm['email']} required email handlerOnChange={handlerOnChange} />
        <InputField type={showPassword ? 'text' : 'password'} label={SIGN_IN_PASSWORD_LABEL} name={'password'} value={loginForm['password']} required minLength={3} handlerOnChange={handlerOnChange} />
        <section className={styles.showPasswordInput}>
          <DisplayAndHidePassword value={showPassword} handlerOnChange={handlerOnChangePassword} />
        </section>
      </section>
      <section className={styles.buttonsSection}>
        <Button type={'submit'}>{SIGN_IN_LABEL}</Button>
      </section>
      <GeneralDialog showModal={modalsState['showNotification']} title={ERROR_MESSAGE_TITLE} message={modalsState['error']} onClose={() => setModalsState({ ...modalsState, showNotification: false })} />
    </form>
  );
};

export default Login;
