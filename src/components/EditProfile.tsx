import { Fragment, useState } from 'react'
import Drawer from './Body/Drawer'
import { api } from '../api/apiRotes'

import { toast, ToastContainer } from 'react-toastify'
import { ToastOptions } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export default function EditProfile() {
  //@ts-ignore
  const userName = JSON.parse(localStorage.getItem('userName'))

  const [password, setPassword] = useState('')
  const [secondPassword, setSecondPassword] = useState('')

  function getToastConfig(): ToastOptions {
    return {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    }
  }

  const settings = getToastConfig()

  async function handlePasswordUpdate() {
    if (password !== '' && secondPassword !== '' && password === secondPassword) {
      try {
        const passwordUpdateRequest = await api.put('/updatePassword', { password })
        toast.success(passwordUpdateRequest.data.message, settings)
      } catch (error: any) {
        toast.success(error.data.message, settings)
      }
    } else {
      toast.error('Por favor, preencha os dois campos com a mesma senha', settings)
    }
  }

  return (
    <Fragment>
      <div className='edit-profile-screen'>
        <ToastContainer />
        <Drawer></Drawer>

        <div className='edit-profile-container'>
          <div className='edit-profile-background'>
            <div className='edit-profile-fields'>
              <h1>Olá, {userName}</h1>
              <p>Digite sua nova senha:</p>
              <input type='password' onChange={(e) => setPassword(e.target.value)} />
              <p>Digite novamente sua nova senha: </p>
              <input type='password' onChange={(e) => setSecondPassword(e.target.value)} />
              <button className='default-button' onClick={handlePasswordUpdate}>
                Alterar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
