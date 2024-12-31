import { Fragment, lazy, Suspense, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/layout/navigation-bar/NavigationBar';
import Login from './pages/login/Login';
import AuthGuard from './guards/auth-guard';
import AdminGuard from './guards/admin-guard';
import Loading from './components/spinner/loading/Loading';

const Home = lazy(() => import('./pages/home/Home'));
const Users = lazy(() => import('./pages/users/Users'));
const Books = lazy(() => import('./pages/books/Books'));
const Register = lazy(() => import('./pages/register/Register'));

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
          <Route path='signup' element={<Suspense fallback={<Loading />}><Register checkLogin={checkLogin} /></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );

};

export default App;
