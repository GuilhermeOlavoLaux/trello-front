import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
import Teste from '../components/Teste'
import { useContext } from 'react'
import { Context } from '../components/context/AuthContext'

export default function AppRoutes() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/teste' element={<Teste />} />
        <Route exact path='/cadastro' element={<Register />} />

      </Routes>
    </BrowserRouter>
  )
}
