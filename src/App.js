import { Fragment, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './pages/users/Users';
import Books from './pages/books/Books';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import NavigationBar from './components/layout/navigation-bar/NavigationBar';
import { BOOKS_LINK, HOME_LINK, USERS_LINK } from './utils/titles-and-labels';

const App = () => {

  const [ currentUser, setCurrentUser ] = useState({ role: '' });
  let linksList = [ HOME_LINK, BOOKS_LINK, USERS_LINK ];

  const checkLogin = user => {
    setCurrentUser(user);
    if ('admin' === currentUser?.role) {
      linksList = linksList;
    } else {
      linksList = linksList.slice(0, 2);
    }
  };

  const onLogout = () => setCurrentUser({ role: '' });

  return (
    <Fragment>
      <BrowserRouter>
      <NavigationBar currentUser={currentUser} linksList={linksList} onLogout={onLogout} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='users' element={<Users />}></Route>
          <Route path='books' element={<Books />}></Route>
          <Route path='login' element={<Login checkLogin={checkLogin} />}></Route>
          <Route path='*' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );

};

export default App;
