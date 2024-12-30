import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = ({ currentUser }) => currentUser['role'] ? <Outlet /> : <Navigate to={'/login'} />

export default AuthGuard;
