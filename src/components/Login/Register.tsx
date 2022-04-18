import { useState, ChangeEvent, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Apresentation from './Apresentation'
import Footer from '../Body/Footer'
import Header from '../Body/Header'

import { api } from '../../api/apiRotes'

interface IFields {
  userName: string
  password: string
  tasks: []
}

interface IToastConfig {
  position: any
  autoClose: number
  hideProgressBar: boolean
  closeOnClick: boolean
  pauseOnHover: boolean
  draggable: boolean
  progress: any
}

export default function Register() {
  const [fields, setFields] = useState<IFields>({} as IFields)

  const navigate = useNavigate()

  function getToastConfig(): IToastConfig {
    return {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined
    }
  }

  async function registerUser() {
    const { userName, password } = fields

    try {
      const postUser = await api.post('/createUser', { userName, password })
      toast.success(postUser.data.message, getToastConfig())
    } catch (error: any) {
      toast.error(error.response.data.error, getToastConfig())
    }
  }

  return (
    <Fragment>
      <Header></Header>
      <div className='register-screen'>
        <div className='register'>
          <div className='register-container'>
            <Apresentation></Apresentation>

            <div className='register-right-content'>
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
                <h1>Cadastro</h1>
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

                <div className='register-buttons'>
                  <button className='default-button' onClick={() => navigate(`/`)}>
                    Login
                  </button>

                  <button className='default-button' onClick={() => registerUser()}>
                    Cadastrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  )
}
