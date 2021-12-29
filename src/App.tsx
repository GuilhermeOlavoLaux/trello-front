import AppRoutes from './routes/Routes'
import { AuthProvider } from './components/context/AuthContext'
import { DrawerProvider } from './components/context/DrawerContext'

function App() {
  return (
    <>
      <AuthProvider>
        <DrawerProvider>
          <AppRoutes></AppRoutes>
        </DrawerProvider>
      </AuthProvider>
    </>
  )
}

export default App
