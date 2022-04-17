import { Route, Routes } from 'react-router-dom'
import Register from '../components/Login/Register'
import Login from '../components/Login/Login'
import ProtectedRoutes from './ProtectedRoutes'
import EditProfile from '../components/EditProfile'
import AllTasksPage from '../components/Tasks/Pages/AllTasksPage'
import CompletedTasksPage from '../components/Tasks/Pages/CompletedTasksPage'
import InProgressTasksPage from '../components/Tasks/Pages/InProgressTaskPage'
import ToDoTasksPage from '../components/Tasks/Pages/ToDoTasksPage'

export default function AppRoutes() {


  return (

    <Routes>
      <Route index exact path='/' element={<Login />} />
      <Route exact path='/cadastro' element={<Register />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/tasks" element={<AllTasksPage />} />
        <Route path="/toDoTasks" element={<ToDoTasksPage />} />
        <Route path="/completedTasks" element={<CompletedTasksPage />} />
        <Route path="/inProgress" element={<InProgressTasksPage />} />
        <Route path="/editProfile" element={<EditProfile />} />
      </Route>
    </Routes>
  )
}
