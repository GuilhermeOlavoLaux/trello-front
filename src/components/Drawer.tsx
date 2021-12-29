import { Fragment, useContext } from 'react'
import { Context } from './context/DrawerContext'

export default function Drawer() {
  const { drawerFlag, handleModalOpening } = useContext(Context)

  return (
    <Fragment>
      <div className={drawerFlag ? 'drawerOpen' : 'drawerClosed'}>
        <p className='logo' onClick={() => handleModalOpening()}>
          imagem
        </p>

        <h1>Trelo</h1>

        <ul>
          <li>A fazer</li>
          <li>Em andamento</li>
          <li>Concluidas</li>
        </ul>
      </div>
    </Fragment>
  )
}
