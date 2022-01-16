import { createContext } from "react";
import useAuth from "./hooks/useAuth";

const AuthContext = createContext();

function AuthProvider({ children }) {

    const { authenticated, setAuthenticated, handleLogin, handleLogout, loading } = useAuth()

    if (loading) {
        return <h1>Loading</h1>
    }
    else {

        return (
            <AuthContext.Provider value={{ authenticated, setAuthenticated, handleLogin, handleLogout }}>
                {children}
            </AuthContext.Provider>
        )
    }
}



export { AuthContext, AuthProvider }