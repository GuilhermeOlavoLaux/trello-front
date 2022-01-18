import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  return (
    <Fragment>
      <div className='header'>
        <div className='header-container'>
          <img
            src='https://media.discordapp.net/attachments/882783374060695582/923692029282746368/trello-logo-blue.png'
            alt='logo-trello'
          />

          <ul>
            <li onClick={() => navigate('/')}>Login</li>
            <li onClick={() => navigate('/cadastro')}>Cadastro</li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}
