import { Fragment, lazy, Suspense } from 'react';

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

  /* const [ currentUser, setCurrentUser ] = useState({ role: '' });

  const checkLogin = user => setCurrentUser(user);

  const onLogout = () => setCurrentUser({ role: '' }); */

  const onLogout = () => ({ role: '' });

  return (
    <Fragment>
      <BrowserRouter>
      <NavigationBar onLogout={onLogout} />
        <Routes>
          <Route element={<AuthGuard />}>
            <Route path='/' element={<Home />}></Route>
            <Route element={<AdminGuard restrictTo={'admin'} />}>
              <Route path='users' element={<Suspense fallback={<Loading />}><Users /></Suspense>}></Route>
            </Route>
            <Route path='books' element={<Suspense fallback={<Loading />}><Books /></Suspense>}></Route>
            <Route path='*' element={<Home />}></Route>
          </Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='signup' element={<Suspense fallback={<Loading />}><Register /></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );

};

export default App;
