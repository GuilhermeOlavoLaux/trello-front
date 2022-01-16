import { Fragment, useState, useContext } from 'react'
import Drawer from '../Drawer'
import Task from './Task'
import { TasksContext } from '../context/TasksContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddTaskModal from './Modals/AddTaskModal'

interface ITask {
  _id: string
  name: string
  description: string
  situation: string
}

export default function CompletedTasks() {
  const { fetchTasks, tasks } = useContext(TasksContext)

  const [modalShow, setModalShow] = useState(false)

  const [taskSituation, setTaskSituation] = useState('')

  function separateTasks(taskSituationType: string) {
    const tasksMap = tasks.map((task: ITask) => {
      if (task.situation === taskSituationType) {
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
      } else {
        return null
      }
    })
    return tasksMap
  }

  function renderTasks() {
    if (tasks) {
      return (
        <Fragment>
          <AddTaskModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            situation={taskSituation}
            refreshTasks={fetchTasks}
          />

          <div className='tasks-container'>
            <div className='completed'>
              <div className='completed-tittle'>
                <h4>Completas</h4>
                <FontAwesomeIcon
                  icon={faPlus}
                  size='lg'
                  color='black'
                  className='plus-icon'
                  onClick={() => {
                    setModalShow(true)
                    setTaskSituation('Completa')
                  }}
                ></FontAwesomeIcon>
              </div>

              <div className='completed-container'>{separateTasks('Completa')}</div>
            </div>
          </div>
        </Fragment>
      )
    } else {
      return <h1>Loading</h1>
    }
  }

  return (
    <Fragment>
      <div className='tasks-screen'>
        <Drawer></Drawer>

        <div className='tasks-screen-container'>
          <h1>Tarefas Completas</h1>
          <div className='tasks'>{renderTasks()}</div>
        </div>
      </div>
    </Fragment>
  )
}
