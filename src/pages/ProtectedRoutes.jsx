import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = JSON.parse(localStorage.getItem("formData"))?.email;

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
