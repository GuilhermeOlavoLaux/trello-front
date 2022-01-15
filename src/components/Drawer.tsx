import { Fragment, useState, useContext } from 'react'
import { Context } from './context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function Drawer() {
  const [drawerFlag, setDrawerFlag] = useState(true)

  const navigate = useNavigate()

  function handleModalOpening() {
    setDrawerFlag(!drawerFlag)
  }

  let { handleLogout } = useContext(Context)

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
          <li onClick={() => navigate(`/inProgress`)}>Em andamento</li>
          <li onClick={() => navigate(`/completedTasks`)}>Completas</li>
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
