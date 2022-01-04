import { useState, useEffect } from "react";
import { api } from "../../../api/apiRotes.ts";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



export default function useAuth() {

    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoaging] = useState(true)

    function getToastConfig() {
        return {
            toastId: 'id',
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined
        }
    }

    async function handleLogin(userName, password) {

        try {
            const { data: { token } } = await api.post('/login', { userName, password })

            localStorage.setItem('token', JSON.stringify(token))

            api.defaults.headers.Authorization = `Bearer ${token}`

            setAuthenticated(true)

        } catch (error) {
            toast.error(error.response.data.error, getToastConfig())
        }


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
