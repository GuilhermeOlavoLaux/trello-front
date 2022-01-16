import AppRoutes from './routes/Routes'
import { AuthProvider } from './components/context/AuthContext'
import { TasksProvider } from './components/context/TasksContext'

function App() {
  return (
    <>
      <AuthProvider>
        <TasksProvider>
          <AppRoutes></AppRoutes>
        </TasksProvider>
      </AuthProvider>
    </>
  )
}

export default App
