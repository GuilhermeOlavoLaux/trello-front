import { Route, Routes } from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
import ProtectedRoutes from './ProtectedRoutes'
import Tasks from '../components/Tasks/Tasks.tsx'

import ToDoTasks from '../components/Tasks/ToDoTasks'
import CompletedTasks from '../components/Tasks/CompletedTasks'
import InProgressTasks from '../components/Tasks/InProgress'
import EditProfile from '../components/EditProfile'

export default function AppRoutes() {


  return (

    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/cadastro' element={<Register />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/toDoTasks" element={<ToDoTasks />} />
        <Route path="/completedTasks" element={<CompletedTasks />} />
        <Route path="/inProgress" element={<InProgressTasks />} />
        <Route path="/editProfile" element={<EditProfile />} />
      </Route>
    </Routes>
  )
}
