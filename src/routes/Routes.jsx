import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
import Teste from '../components/Teste'

export default function AppRoutes() {
  return (

    <Router history={History}>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/cadastro' element={<Register />} />
        <Route path='/teste' element={<Teste />} />

      </Routes>
    </Router>
  )
}
