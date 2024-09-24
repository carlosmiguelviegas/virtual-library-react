import { Fragment } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './pages/users/Users';
import Books from './pages/books/Books';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

const App = () => {
  
  return (
    <Fragment>
      <h2>Library</h2>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='users' element={<Users />}></Route>
          <Route path='books' element={<Books />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='*' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );

};

export default App;
