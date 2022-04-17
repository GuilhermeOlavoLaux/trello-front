import { Fragment, useState, useContext, useEffect } from 'react'
import Drawer from '../../Body/Drawer'
import Task from '../Task'
import { TasksContext } from '../../context/TasksContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddTaskModal from '../Modals/AddTaskModal'
import ToDoTasksList from '../Lists/ToDoTasksList'
import CompletedTasksList from '../Lists/CompletedTasksList'
import InProgressTasksList from '../Lists/InProgressTasksList'

interface ITask {
  _id: string
  name: string
  description: string
  situation: string
}

export default function InProgressTasksPage() {
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
            <InProgressTasksList
              setTaskSituation={setTaskSituation}
              taskSituationType='Em andamento'
              setModalShow={setModalShow}
            ></InProgressTasksList>
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
          <h1>Em andamento</h1>
          <div className='tasks'>{renderTasks()}</div>
        </div>
      </div>
    </Fragment>
  )
}
