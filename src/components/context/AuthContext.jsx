import { createContext } from "react";
import useAuth from "./hooks/useAuth";

const Context = createContext();

function AuthProvider({ children }) {

    const { authenticated, setAuthenticated, handleLogin, handleLogout, loading } = useAuth()

    if (loading) {
        return <h1>a</h1>
    }
    else {

        return (
            <Context.Provider value={{ authenticated, setAuthenticated, handleLogin, handleLogout }}>
                {children}
            </Context.Provider>
        )
    }
}



export { Context, AuthProvider }