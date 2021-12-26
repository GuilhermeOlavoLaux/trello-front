import { createContext, useState } from "react";
import { api } from "../../api/apiRotes";
import history from '../../History'

const Context = createContext();

 
function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false)


    async function handleLogin(userName, password) {
        const { data: { token } } = await api.post('/login', { userName, password })

        localStorage.setItem('token', JSON.stringify(token))

        api.defaults.headers.Authorization = `Bearer ${token}`


        history.push('/teste')

        setAuthenticated(true)
    }
    //aaaaa

    return (
        <Context.Provider value={{ authenticated, handleLogin }}>
            {children}
        </Context.Provider>
    )
} 



export { Context, AuthProvider }