import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye, faSave } from '@fortawesome/free-solid-svg-icons'

interface ITask {
  name: string
  description: string
  situation: string
}

export default function Task(props: ITask) {
  return (
    <Fragment>
      <div className='task'>
        <div className='task-container'>
          <h3>{props.name}</h3>
        </div>

        <div className='task-controllers'>
          <FontAwesomeIcon icon={faEye} size='lg' className='icon'></FontAwesomeIcon>

          <FontAwesomeIcon icon={faEdit} size='lg' className='icon'></FontAwesomeIcon>

          <FontAwesomeIcon icon={faSave} size='lg' className='icon'></FontAwesomeIcon>
        </div>
      </div>
    </Fragment>
  )
}
