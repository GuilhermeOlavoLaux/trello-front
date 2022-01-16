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

export default function InProgressTasks() {
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
            <div className='in-progress'>
              <div className='in-progress-tittle'>
                <h4>Em Progresso</h4>
                <FontAwesomeIcon
                  icon={faPlus}
                  size='lg'
                  color='black'
                  className='plus-icon'
                  onClick={() => {
                    setModalShow(true)
                    setTaskSituation('Em andamento')
                  }}
                ></FontAwesomeIcon>
              </div>

              <div className='in-progress-container'>{separateTasks('Em andamento')}</div>
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
          <h1>Tarefas Em Progresso</h1>
          <div className='tasks'>{renderTasks()}</div>
        </div>
      </div>
    </Fragment>
  )
}
