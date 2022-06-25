import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoutes() {
  const authenticated = !!localStorage.getItem("@nex:token");

  if (!authenticated) {
    return <Navigate to="/signin" replace={true} />;
  }

  return <Outlet />;
}

export default PrivateRoutes;
