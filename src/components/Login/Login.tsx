import { useState, ChangeEvent, Fragment, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Apresentation from './Apresentation'
import Footer from '../Body/Footer'
import Header from '../Body/Header'

import { AuthContext } from '../context/AuthContext'
import { ToastContainer } from 'react-toastify'

interface IFields {
  userName: string
  password: string
}

export default function Login() {
  const [fields, setFields] = useState<IFields>({} as IFields)

  const navigate = useNavigate()

  const { authenticated, handleLogin } = useContext(AuthContext)

  useEffect(() => {
    if (authenticated) {
      navigate('/tasks')
    }
  }, [authenticated])

  return (
    <Fragment>
      <Header></Header>
      <div className='login-screen'>
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
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setFields({ ...fields, userName: event.target.value })
                  }
                />

                <p>Senha</p>
                <input
                  type='password'
                  value={fields.password}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setFields({ ...fields, password: event.target.value })
                  }
                />

                <div className='login-buttons'>
                  <button className='default-button' onClick={() => navigate(`/cadastro`)}>
                    Cadastrar-se
                  </button>

                  <button
                    className='default-button'
                    onClick={() => handleLogin(fields.userName, fields.password)}
                  >
                    Entrar
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
