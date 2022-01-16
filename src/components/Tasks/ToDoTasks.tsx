import { Fragment, useContext, useState, useEffect } from 'react'
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

export default function ToDoTasks() {
  const { fetchTasks, tasks } = useContext(TasksContext)

  const [modalShow, setModalShow] = useState(false)

  const [taskSituation, setTaskSituation] = useState('')

  useEffect(() => {
    fetchTasks()
}, [])

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
            <div className='to-do'>
              <div className='to-do-tittle'>
                <h4>A fazer</h4>
                <FontAwesomeIcon
                  icon={faPlus}
                  size='lg'
                  color='black'
                  className='plus-icon'
                  onClick={() => {
                    setModalShow(true)
                    setTaskSituation('A fazer')
                  }}
                ></FontAwesomeIcon>
              </div>

              <div className='to-do-container'>{separateTasks('A fazer')}</div>
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
          <h1>Tarefas A Fazer</h1>
          <div className='tasks'>{renderTasks()}</div>
        </div>
      </div>
    </Fragment>
  )
}
