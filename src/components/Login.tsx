import { useState, ChangeEvent, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../api/apiRotes'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Apresentation from './Apresentation'
import Footer from './Footer'
import Header from './Header'
interface IFields {
  userName: string
  password: string
}

interface IToastConfig {
  toastId: string
  position: any
  autoClose: number
  hideProgressBar: boolean
  closeOnClick: boolean
  pauseOnHover: boolean
  draggable: boolean
  progress: any
}


export default function Login() {
  const [fields, setFields] = useState<IFields>({} as IFields)

  const navigate = useNavigate()

  function getToastConfig(): IToastConfig {
    return {
      toastId: 'id',
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined
    }
  }

  async function login() {
    const userName = fields.userName
    const password = fields.password

    try {
      const login = await api.post('/login', { userName, password })
      console.log(login)
    } catch (error: any) {
      console.log(error.response.data.error)
      toast.error(`${error.response.data.error}`, getToastConfig())
    }
  }

  return (
    <Fragment>
      <div className='header-login-footer'>
        <Header></Header>
        <div className='login'>
          <div className='login-container'>
            <Apresentation></Apresentation>

            <div className='login-right-content'>
              <ToastContainer
                position='top-right'
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <ToastContainer />

              <div className='form-container'>
                <h1>Login</h1>
                <p>Nome</p>
                <input
                  type='text'
                  value={fields.userName}
                  id='nameInput'
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setFields({ ...fields, userName: event.target.value })
                  }
                />

                <p>Senha</p>
                <input
                  type='password'
                  value={fields.password}
                  id='passwordInput'
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setFields({ ...fields, password: event.target.value })
                  }
                />

                <div className='login-buttons'>
                  <button className='default-button' onClick={() => navigate(`/cadastro`)}>
                    Cadastre-se
                  </button>

                  <button className='default-button' onClick={() => login()}>
                    Entrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </Fragment>
  )
}
