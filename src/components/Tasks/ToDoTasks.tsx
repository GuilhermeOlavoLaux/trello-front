import { Fragment, useContext, useState, useEffect } from 'react'
import Drawer from '../Body/Drawer'
import Task from './Task'
import { TasksContext } from '../context/TasksContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddTaskModal from './Modals/AddTaskModal'
import NewToDoTasks from './New/Tasks/NewToDoTasks'

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
            <NewToDoTasks
              taskSituationType='A fazer'
              setModalShow={setModalShow}
            ></NewToDoTasks>
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
