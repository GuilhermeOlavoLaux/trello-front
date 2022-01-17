import { Fragment, useState } from 'react'
import Drawer from './Drawer'
import { api } from '../api/apiRotes'

export default function EditProfile() {
  //@ts-ignore
  const userName = JSON.parse(localStorage.getItem('userName'))

  const [password, setPassword] = useState('')
  const [secondPassword, setSecondPassword] = useState('')

  async function handlePasswordUpdate() {
    if (password !== '' && secondPassword !== '' && password === secondPassword) {
      try {
        const a = await api.put('/updatePassword', { password })

        console.log(a)
        window.alert('senha alterada parsero')
      } catch (error) {}
    }
  }

  return (
    <Fragment>
      <div className='edit-profile-screen'>
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
