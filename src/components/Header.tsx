import { Fragment } from 'react'

export default function Header() {
  return (
    <Fragment>
      <div className='header'>
        <div className='header-container'>
          <img
            src='https://media.discordapp.net/attachments/882783374060695582/923692029282746368/trello-logo-blue.png'
            alt='logo-trello'
          />

          <ul>
            <li>Inicio</li>
            <li>Cadastro</li>
            <li>Sobre</li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}
