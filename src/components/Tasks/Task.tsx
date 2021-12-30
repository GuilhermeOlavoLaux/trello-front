import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

interface ITask{
    name: string
    description: string
    situation: string
}


export default function Task(props:ITask) {
  return (
    <Fragment>
      <div className='task'>
        <div className='task-container'>
          <h3>{props.name}</h3>

          <p>{props.description}</p>
          <p>{props.situation}</p>


        </div>

        <div className='task-controllers'>
          <FontAwesomeIcon
            icon={faEdit}
            size='lg'
          ></FontAwesomeIcon>
        </div>
      </div>
    </Fragment>
  )
}
