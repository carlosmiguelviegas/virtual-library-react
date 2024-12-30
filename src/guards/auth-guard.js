import { Navigate, Route } from "react-router-dom";

const AuthGuard = ({ element, currentUser, ...rest }) => {

  return (
    <Route {...rest} element={currentUser['role'] ? element : <Navigate to={'/login'} /> } />
  );

};

export default AuthGuard;
