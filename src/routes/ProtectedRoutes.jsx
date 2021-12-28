import { useContext } from 'react'
import { Context } from '../components/context/AuthContext'
import { Navigate, Outlet } from "react-router-dom";



const ProtectedRoutes = () => {
    const {authenticated} = useContext(Context)

    return authenticated ? <Outlet />: <Navigate to="/cadastro" /> 
};

export default ProtectedRoutes;

