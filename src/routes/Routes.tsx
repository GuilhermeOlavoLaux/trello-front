import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Register />} />
      </Routes>
    </Router>
  )
}
