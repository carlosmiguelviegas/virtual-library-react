import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { selectCurrentUser } from "../store/users/users.selector";

const AuthGuard = () => {

  const currentUser = useSelector(selectCurrentUser);

  return (currentUser['role'] ? <Outlet /> : <Navigate to={'/login'} />);

}

export default AuthGuard;
