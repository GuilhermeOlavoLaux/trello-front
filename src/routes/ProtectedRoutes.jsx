import { useContext } from 'react'
import { AuthContext } from '../components/context/AuthContext'
import { Navigate, Outlet } from "react-router-dom";



const ProtectedRoutes = () => {
    const { authenticated } = useContext(AuthContext)

    return authenticated ? <Outlet /> : <Navigate to="/cadastro" />
};

export default ProtectedRoutes;

