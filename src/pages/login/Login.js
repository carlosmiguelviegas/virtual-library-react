import { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Login.css';
import api from './../../utils/api';

const LOGIN_URL = 'http://localhost:8000/api/v1/users/login';

const Login = () => {

  const [ loginForm, setLoginForm ] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handlerOnChange = (event) => {
    setLoginForm(
      {
        ...loginForm,
        [event['target']['name']]: event['target']['value']
      }
    );
  };

  const handlerOnSubmit = (event) => {
    event.preventDefault();
    axios.post(LOGIN_URL, loginForm)
    .then((res) => {
      api['token'] = res['headers'].get('token');
      navigate('/home');
    })
    .catch(err => console.log(err));
  };

  return (
    <form className="form" onSubmit={handlerOnSubmit}>
      <section className='form-container'>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' value={loginForm['email']} onChange={handlerOnChange} />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' value={loginForm['password']} onChange={handlerOnChange} />
        <button type='submit'>Sign in</button>
      </section>
    </form>
  );
};

export default Login;
