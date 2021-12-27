import { useEffect, useState, useContext } from 'react'
import { api } from '../api/apiRotes'
import { useNavigate } from "react-router-dom";
import { Context } from './context/AuthContext'

export default function Teste() {

    const navigate = useNavigate()

    const [testeAuth, setTesteAuth] = useState()
    async function getTeste() {
        const ab = await api.get('/testeAutenticacao')
        setTesteAuth(ab.data)
    }
    let { setAuthenticated } = useContext(Context)


    useEffect(() => {
        getTeste()
    }, [])


    return (
        <>
            <h1>Revisar se a api pede middleware de autenticação</h1>
            <p style={{ color: 'white' }} > {testeAuth}</p>

            <button onClick={() => {
                setAuthenticated(false)
                navigate('/')
            }}>AAA</button>

        </>
    )

};
