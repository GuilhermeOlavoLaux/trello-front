import { Fragment, useEffect, useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { api } from '../../api/apiRotes'
import Drawer from '../Drawer'
import Task from './Task'

interface ITask {
  name: string
  description: string
  situation: string
}

export default function Tasks() {
  const [tasks, setTasks] = useState([])

  async function fetchTasks() {
    const { data } = await api.get('/tasks')

    setTasks(data.userTasks)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  function separateTasks(taskSituationType: string) {
    const tasksMap = tasks.map((task: ITask) => {
      if (task.situation === taskSituationType) {
        return (
          <>
            <Task name={task.name} description={task.description} situation={task.situation}></Task>
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
          <div className='tasks-container'>
            <div className='to-do'>
              <h2>A fazer</h2>
              <div className='to-do-container'>{separateTasks('Em andamento')}</div>
            </div>

            <div className='in-progress'>
              <h2>Em andamento</h2>

              <div className='in-progress-container'>{separateTasks('A fazer')}</div>
            </div>

            <div className='completed'>
              <h2>Completas</h2>

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
      <Header></Header>
      <div className='tasks-screen'>
        <Drawer></Drawer>

        <div className='tasks-screen-container'>
          <div className='tasks'>
            <h1>Suas tarefas</h1>

            {renderTasks()}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  )
}
