import { Fragment, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/layout/navigation-bar/NavigationBar';
import Home from './pages/home/Home';
import Users from './pages/users/Users';
import Books from './pages/books/Books';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const App = () => {

  const [ currentUser, setCurrentUser ] = useState({ role: '' });

  const checkLogin = user => setCurrentUser(user);

  const onLogout = () => setCurrentUser({ role: '' });

  return (
    <Fragment>
      <BrowserRouter>
      <NavigationBar currentUser={currentUser} onLogout={onLogout} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='users' element={<Users />}></Route>
          <Route path='books' element={<Books />}></Route>
          <Route path='login' element={<Login checkLogin={checkLogin} />}></Route>
          <Route path='signup' element={<Register checkLogin={checkLogin} />}></Route>
          <Route path='*' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );

};

export default App;
