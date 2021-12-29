import { Fragment, useContext } from 'react'
import { Context } from './context/DrawerContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Drawer() {
  const { drawerFlag, handleModalOpening } = useContext(Context)

  return (
    <Fragment>
      <div className={drawerFlag ? 'drawerOpen' : 'drawerClosed'}>
        <FontAwesomeIcon
          icon={faBars}
          size='lg'
          className='burguer-icon'
          onClick={() => handleModalOpening()}
        ></FontAwesomeIcon>

        <h1>Trello</h1>

        <ul>
          <li>A fazer</li>
          <li>Em andamento</li>
          <li>Concluidas</li>
        </ul>
      </div>
    </Fragment>
  )
}
