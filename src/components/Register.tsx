import { useState, ChangeEvent, Fragment } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
interface IFields {
  name: string
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

export default function Register() {
  const [fields, setFields] = useState<IFields>({} as IFields)

  function getToastConfig(id: string): IToastConfig {
    return {
      toastId: id,
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined
    }
  }

  return (
    <Fragment>
      <div className='register-container'>
        <div className='register-left-content'>
          <p>
            Projeto desenvolvido utilizando JavaScript, React, TypeScript, SCSS, NodeJs, Express e
            MongoDB.
          </p>

          <div className='about-me'>
            <img
              src='https://media.discordapp.net/attachments/882783374060695582/923665395615924234/Guilherme.png'
              alt='Guilherme Laux'
            />

            <div className='about-me-text'>
              <h2>Guilherme Laux</h2>
              <p>Desenvolvedor FullStack</p>
            </div>
          </div>
        </div>

        <div className='form'>
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
            <h1>Cadastre-se</h1>
            <p>Nome</p>
            <input
              type='text'
              value={fields.name}
              id='nameInput'
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setFields({ ...fields, name: event.target.value })
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

            <button>Cadastrar</button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
