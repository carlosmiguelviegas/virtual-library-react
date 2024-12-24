import { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './pages/users/Users';
import Books from './pages/books/Books';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

const App = () => {

  const [ currentUser, setCurrentUser ] = useState({});

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='users' element={<Users />}></Route>
          <Route path='books' element={<Books />}></Route>
          <Route path='login' element={<Login setCurrentUser={setCurrentUser} />}></Route>
          <Route path='*' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
  );

};

export default App;
