import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { selectCurrentUser } from "../store/users/users.selector";

const AdminGuard = ({ restrictTo }) => {

  const currentUser = useSelector(selectCurrentUser);

  return restrictTo === currentUser['role'] ? <Outlet /> : <Navigate to={'/'} />

}

export default AdminGuard;
