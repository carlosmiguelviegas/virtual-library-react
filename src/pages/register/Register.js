import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import InputField from '../../components/inputs/input-field/InputField';
import styles from './Register.module.css';

const SIGN_UP_URL = 'http://localhost:8000/api/v1/users/signup';

const Register = () => {

  const [ registerForm, setRegisterForm ] = useState({ name: '', email: '', password: '', passwordConfirm: '' });
  const [ showPassword, setShowPassword ] = useState(false);
  const navigate = useNavigate();

  const handlerOnChange = event => {
    // it was intentional
  };

  const handlerOnChangePassword = () => setShowPassword(showPassword => !showPassword);

  const onRegisterNewUser = () => {
    // it was intentional
  };

  return ;

};

export default Register;
