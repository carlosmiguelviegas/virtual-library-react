import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import InputField from '../../components/inputs/input-field/InputField';
import styles from './Register.module.css';
import { ERROR_MESSAGE_TITLE, SIGN_UP_BUTTON_CANCEL_LABEL, SIGN_UP_BUTTON_LABEL, SIGN_UP_CONFIRM_PASSWORD_LABEL, SIGN_UP_EMAIL_LABEL, SIGN_UP_NAME_LABEL, SIGN_UP_PASSWORD_LABEL, SIGN_UP_TITLE } from '../../utils/titles-and-labels';
import Button from '../../components/buttons/button/Button';
import axios from 'axios';
import DisplayAndHidePassword from '../../components/inputs/display-and-hide-password/DisplayAndHidePassword';
import GeneralDialog from '../../components/dialogs/general-dialog/GeneralDialog';
import { setCurrentUser, setToken } from '../../store/users/users.action';

const initialRegisterFormState = { name: '', email: '', password: '', passwordConfirm: '' };
const initialModalsState = { showNotification: false, error: '' };

const SIGN_UP_URL = 'http://localhost:8000/api/v1/users/signup';

const Register = () => {

  const [ registerForm, setRegisterForm ] = useState(initialRegisterFormState);
  const [ showPassword, setShowPassword ] = useState(false);
  const [ modalsState, setModalsState ] = useState(initialModalsState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerOnChange = event => {
    const { name, value } = event['target'];
    setRegisterForm(
      {
        ...registerForm,
        [name]: value
      }
    );
  };

  const handlerOnChangePassword = () => setShowPassword(showPassword => !showPassword);

  const onRegisterNewUser = event => {
    event.preventDefault();
    axios.post(SIGN_UP_URL, registerForm)
    .then((res) => {
      dispatch(setCurrentUser(res['data']));
      dispatch(setToken(res['headers'].get('token')));
      navigate('/home');
    })
    .catch(err => setModalsState({ showNotification: true, error: err['response']['data']['errors'][0]['message'] }));
  };

  const onReset = () => setRegisterForm(initialRegisterFormState);

  return (
    <form className={styles.form} onSubmit={onRegisterNewUser}>
      <section className={styles.titleContainer}>
        <h2>{SIGN_UP_TITLE}</h2>
      </section>
      <section className={styles.contentContainer}>
        <InputField type={'text'} label={SIGN_UP_NAME_LABEL} name={'name'} value={registerForm['name']} required minLength={3} handlerOnChange={handlerOnChange} width={260} />
        <InputField type={'email'} label={SIGN_UP_EMAIL_LABEL} name={'email'} value={registerForm['email']} required email handlerOnChange={handlerOnChange} width={260} />
        <section className={styles.row}>
          <InputField type={showPassword ? 'text' : 'password'} label={SIGN_UP_PASSWORD_LABEL} name={'password'} value={registerForm['password']} required minLength={3} handlerOnChange={handlerOnChange} />
          <InputField type={showPassword ? 'text' : 'password'} label={SIGN_UP_CONFIRM_PASSWORD_LABEL} name={'passwordConfirm'} value={registerForm['passwordConfirm']} required minLength={3} handlerOnChange={handlerOnChange} />
        </section>
        <section className={styles.showPasswordInput}>
          <DisplayAndHidePassword value={showPassword} handlerOnChange={handlerOnChangePassword} />
        </section>
      </section>
      <section className={styles.buttonsSection}>
        <Button type={'submit'}>{SIGN_UP_BUTTON_LABEL}</Button>
        <Button func={'secondary'} onClickHandler={onReset}>{SIGN_UP_BUTTON_CANCEL_LABEL}</Button>
      </section>
      <GeneralDialog showModal={modalsState['showNotification']} title={ERROR_MESSAGE_TITLE} message={modalsState['error']} onClose={() => setModalsState({ ...modalsState, showNotification: false })} />
    </form>
  );

};

export default Register;
        