import { Fragment, useState, useContext, useEffect } from 'react'
import Drawer from '../../../Body/Drawer'
import Task from '../../Task'
import { TasksContext } from '../../../context/TasksContext'
import AddTaskModal from '../../Modals/AddTaskModal'
import NewToDoTasks from '../Tasks/NewToDoTasks'
import NewInProgressTasks from '../Tasks/NewInProgressTasks'

interface ITask {
  _id: string
  name: string
  description: string
  situation: string
}

export default function AllTasksPage() {
  const [modalShow, setModalShow] = useState(false)

  const [taskSituation, setTaskSituation] = useState('')

  const { tasks, setTasks, fetchTasks } = useContext(TasksContext)

  useEffect(() => {
    setTasks([{}])
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
            <NewToDoTasks taskSituationType='A fazer' setModalShow={setModalShow}></NewToDoTasks>

            <NewInProgressTasks
              taskSituationType='Em andamento'
              setModalShow={setModalShow}
            ></NewInProgressTasks>

            <NewInProgressTasks
              taskSituationType='Completa'
              setModalShow={setModalShow}
            ></NewInProgressTasks>
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
          <h1>Suas tarefas</h1>
          <div className='tasks'>{renderTasks()}</div>
        </div>
      </div>
    </Fragment>
  )
}
