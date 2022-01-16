import { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import ViewTaskModal from './Modals/ViewTaskModal'

import EditTaskModal from './Modals/EditTaskModal'
import DeleteTaskModal from './Modals/DeleteTaskModal'

interface ITask {
  _id: string
  name: string
  description: string
  situation: string
}

export default function Task(props: ITask) {
  const [viewModalShow, setViewModalShow] = useState(false)

  const [editModalShow, setEditModalShow] = useState(false)

  const [deleteModalShow, setDeleteModalShow] = useState(false)

  return (
    <Fragment>
      <ViewTaskModal
        show={viewModalShow}
        onHide={() => setViewModalShow(false)}
        title={props.name}
        description={props.description}
        situation={props.situation}
      />

      <EditTaskModal
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        _id={props._id}
        title={props.name}
        description={props.description}
        situation={props.situation}
      />

      <DeleteTaskModal
        show={deleteModalShow}
        onHide={() => setDeleteModalShow(false)}
        _id={props._id}
      />

      <div className='task'>
        <div className='task-container'>
          <h3 onClick={() => setViewModalShow(true)}>{props.name}</h3>
        </div>

        <div className='task-controllers'>
          <FontAwesomeIcon
            icon={faEdit}
            size='lg'
            className='icon'
            onClick={() => setEditModalShow(true)}
          ></FontAwesomeIcon>

          <FontAwesomeIcon
            icon={faTrash}
            size='lg'
            className='icon'
            onClick={() => setDeleteModalShow(true)}
          ></FontAwesomeIcon>
        </div>
      </div>
    </Fragment>
  )
}
