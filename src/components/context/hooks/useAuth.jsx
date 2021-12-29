import { useState, useEffect } from "react";
import { api } from "../../../api/apiRotes.ts";



export default function useAuth() {

    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoaging] = useState(true)

    async function handleLogin(userName, password) {
        const { data: { token } } = await api.post('/login', { userName, password })

        localStorage.setItem('token', JSON.stringify(token))

        api.defaults.headers.Authorization = `Bearer ${token}`

        setAuthenticated(true)
    }


    async function handleLogout() {

        setAuthenticated(false)
        localStorage.removeItem('token')

        api.defaults.headers.Authorization = undefined

    }
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }

        setLoaging(false)
    }, [])

    return { authenticated, loading, handleLogin, handleLogout }

};
