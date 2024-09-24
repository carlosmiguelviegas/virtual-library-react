import { useState } from 'react';

import './Login.css';

const Login = () => {

  const [ loginForm, setLoginForm ] = useState({ email: '', password: '' });

  const handlerOnChange = (input, value) => {
    setLoginForm(
      {
        ...loginForm,
        [input]: value
      }
    );
  };

  const handlerOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={handlerOnSubmit}>
      <section className='form-container'>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' value={loginForm['email']} onChange={(event) => handlerOnChange('email', event['target']['value'])} />
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' value={loginForm['password']} onChange={(event) => handlerOnChange('password', event['target']['value'])} />
        <button type='submit'>Sign in</button>
      </section>
    </form>
  );
};

export default Login;
