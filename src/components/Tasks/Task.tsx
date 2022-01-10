import { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons'

import ViewTaskModal from './Modais/ViewTaskModal'

interface ITask {
  name: string
  description: string
  situation: string
}

export default function Task(props: ITask) {
  const [modalShow, setModalShow] = useState(false)

  return (
    <Fragment>
      <ViewTaskModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={props.name}
        description={props.description}
        situation={props.situation}
      />

      <div className='task'>
        <div className='task-container'>
          <h3>{props.name}</h3>
        </div>

        <div className='task-controllers'>
          <FontAwesomeIcon
            icon={faEye}
            size='lg'
            className='icon'
            onClick={() => setModalShow(true)}
          ></FontAwesomeIcon>

          <FontAwesomeIcon icon={faEdit} size='lg' className='icon'></FontAwesomeIcon>
        </div>
      </div>
    </Fragment>
  )
}
