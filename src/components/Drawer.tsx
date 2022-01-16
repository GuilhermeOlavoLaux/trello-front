import { Fragment, useState, useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function Drawer() {
  const [drawerFlag, setDrawerFlag] = useState(true)

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

        <h1 onClick={() => navigate(`/tasks`)}>Trello</h1>

        <ul>
          <li onClick={() => navigate(`/toDoTasks`)}>A fazer</li>
          <li onClick={() => navigate(`/inProgress`)}>Em Progresso</li>
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
