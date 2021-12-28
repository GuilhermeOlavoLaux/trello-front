import { Route, Routes } from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
import Teste from '../components/Teste'
import ProtectedRoutes from './ProtectedRoutes'

export default function AppRoutes() {

  // const authenticated = useContext(Context)

  return (

    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/cadastro' element={<Register />} />


      <Route element={<ProtectedRoutes />}>
        <Route path="/teste" element={<Teste />} />
      </Route>
    </Routes>
  )
}
