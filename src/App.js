import { Fragment, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/layout/navigation-bar/NavigationBar';
import Home from './pages/home/Home';
import Users from './pages/users/Users';
import Books from './pages/books/Books';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import AuthGuard from './guards/auth-guard';
import AdminGuard from './guards/admin-guard';

const App = () => {

  const [ currentUser, setCurrentUser ] = useState({ role: '' });

  const checkLogin = user => setCurrentUser(user);

  const onLogout = () => setCurrentUser({ role: '' });

  return (
    <Fragment>
      <BrowserRouter>
      <NavigationBar currentUser={currentUser} onLogout={onLogout} />
        <Routes>
          <Route element={<AuthGuard currentUser={currentUser} />}>
            <Route path='/' element={<Home currentUser={currentUser} />}></Route>
            <Route element={<AdminGuard currentUser={currentUser} restrictTo={'admin'} />}>
              <Route path='users' element={<Users />}></Route>
            </Route>
            <Route path='books' element={<Books currentUser={currentUser} />}></Route>
            <Route path='*' element={<Home currentUser={currentUser} />}></Route>
          </Route>
          <Route path='login' element={<Login checkLogin={checkLogin} />}></Route>
          <Route path='signup' element={<Register checkLogin={checkLogin} />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );

};

export default App;
