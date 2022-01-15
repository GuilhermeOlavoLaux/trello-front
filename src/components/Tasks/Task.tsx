import { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons'

import ViewTaskModal from './Modals/ViewTaskModal'

import EditTaskModal from './Modals/EditTaskModal'

interface ITask {
  _id: string
  name: string
  description: string
  situation: string
}

export default function Task(props: ITask) {
  const [modalShow, setModalShow] = useState(false)

  const [modalShow2, setModalShow2] = useState(false)

  return (
    <Fragment>
      <ViewTaskModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={props.name}
        description={props.description}
        situation={props.situation}
      />

      <EditTaskModal
        show={modalShow2}
        onHide={() => setModalShow2(false)}
        _id={props._id}
        title={props.name}
        description={props.description}
        situation={props.situation}
      />

      <div className='task'>
        <div className='task-container'>
          <h3 onClick={() => setModalShow(true)}>{props.name}</h3>
        </div>

        <div className='task-controllers'>
          <FontAwesomeIcon
            icon={faEdit}
            size='lg'
            className='icon'
            onClick={() => setModalShow2(true)}
          ></FontAwesomeIcon>
        </div>
      </div>
    </Fragment>
  )
}
