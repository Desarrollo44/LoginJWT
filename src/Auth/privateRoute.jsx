import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const token = sessionStorage.getItem('auth');

    if(!token){
      return <Navigate to="/" />
    }
    return <Outlet/>
  }

export default PrivateRoute;