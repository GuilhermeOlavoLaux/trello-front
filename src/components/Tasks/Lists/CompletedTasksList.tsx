import { Fragment, useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Task from '../Task'
import { TasksContext } from '../../context/TasksContext'

interface ITask {
  _id: string
  name: string
  description: string
  situation: string
}

interface IProps {
  taskSituationType: string
  setModalShow: (value: boolean) => void;
  setTaskSituation: (value: string) => void;

}

export default function CompletedTasksList(props: IProps) {
  const { fetchTasks, tasks } = useContext(TasksContext)
  
  useEffect(() => {
    fetchTasks()
  }, [])

  function separateTasks() {
    const tasksMap = tasks.map((task: ITask) => {
      if (task.situation === props.taskSituationType) {
        return (
          <>
            <Task
              _id={task._id}
              name={task.name}
              description={task.description}
              situation={task.situation}
            ></Task>
          </>
        )
      }
    })
    return tasksMap
  }

  return (
    <Fragment>
      <div className='completed'>
        <div className='completed-tittle'>
          <h4>Completas</h4>

          <FontAwesomeIcon
            icon={faPlus}
            size='lg'
            color='black'
            className='plus-icon'
            onClick={() => {
              props.setModalShow(true)
              props.setTaskSituation(props.taskSituationType)
            }}
          ></FontAwesomeIcon>
        </div>

        <div className='completed-container'>{separateTasks()}</div>
      </div>
    </Fragment>
  )
}
