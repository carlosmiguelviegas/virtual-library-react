import { Navigate, Outlet } from "react-router-dom";

const AdminGuard = ({ currentUser, restrictTo }) => restrictTo === currentUser['role'] ? <Outlet /> : <Navigate to={'/'} />

export default AdminGuard;
