import { Fragment, useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function Drawer() {
  const [drawerFlag, setDrawerFlag] = useState(false)

  const navigate = useNavigate()

  function handleModalOpening() {
    setDrawerFlag(!drawerFlag)
  }

  let { handleLogout } = useContext(AuthContext)

  return (
    <Fragment>
      <div className={drawerFlag ? 'drawerOpen' : 'drawerClosed'}>
        <FontAwesomeIcon
          icon={faBars}
          size='lg'
          className='burguer-icon'
          onClick={() => handleModalOpening()}
        ></FontAwesomeIcon>

        <img
          src='https://media.discordapp.net/attachments/882783374060695582/923692029282746368/trello-logo-blue.png'
          alt='logo-trello'
        />

        <ul>
          <li onClick={() => navigate(`/tasks`)}>Início</li>
          <li onClick={() => navigate(`/toDoTasks`)}>A fazer</li>
          <li onClick={() => navigate(`/inProgress`)}>Em Andamento</li>
          <li onClick={() => navigate(`/completedTasks`)}>Completas</li>
          <li onClick={() => navigate(`/editProfile`)}>Editar Perfil</li>

          <li
            onClick={() => {
              handleLogout()
              navigate(`/`)
            }}
          >
            Sair
          </li>
        </ul>
      </div>
    </Fragment>
  )
}
