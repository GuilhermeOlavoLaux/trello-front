import { createContext } from "react";
import useAuth from "./hooks/useAuth";

const Context = createContext();

function AuthProvider({ children }) {

    const { authenticated, setAuthenticated, handleLogin, handleLogout } = useAuth()

    return (
        <Context.Provider value={{ authenticated, setAuthenticated, handleLogin, handleLogout }}>
            {children}
        </Context.Provider>
    )
}



export { Context, AuthProvider }