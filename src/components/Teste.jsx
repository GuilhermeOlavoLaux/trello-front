import { useEffect, useState } from 'react'
import { api } from '../api/apiRotes'

export default function Teste() {


    const [testeAuth, setTesteAuth] = useState()
    async function getTeste() {
        const ab = await api.get('/testeAutenticacao')
        setTesteAuth(ab.data)
    }

    useEffect(() => {
        getTeste()
    }, [])


    return (
        <>
            <h1>Revisar se a api pede middleware de autenticação</h1>
            <p style={{ color: 'white' }} > {testeAuth}</p>

        </>
    )

};
