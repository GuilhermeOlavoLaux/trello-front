import AppRoutes from './routes/Routes'
import { AuthProvider } from './components/context/AuthContext'

function App() {
  return (
    <>
      <AuthProvider>
        <AppRoutes></AppRoutes>
      </AuthProvider>
    </>
  )
}

export default App
