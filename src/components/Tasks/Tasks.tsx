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
  const [tasks, setTasks] = useState()

  async function fetchTasks() {
    const { data } = await api.get('/tasks')

    setTasks(data.userTasks)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  function renderCompletedTasks() {
    //@ts-ignore
    const tasksMap = tasks.map((task: ITask) => {
      if (task.situation === 'Completa') {
        console.log(task)

        return (
          <>
            <Task name={task.name} description={task.description} situation={task.situation}></Task>
          </>
        )
      }
    })
    return tasksMap
  }

  function renderToDoTasks() {
    //@ts-ignore
    const tasksMap = tasks.map((task: ITask) => {
      if (task.situation === 'A fazer') {
        console.log(task)

        return (
          <>
            <Task name={task.name} description={task.description} situation={task.situation}></Task>
          </>
        )
      }
    })
    return tasksMap
  }

  function renderInProgressTasks() {
    //@ts-ignore
    const tasksMap = tasks.map((task: ITask) => {
      if (task.situation === 'Em andamento') {
        console.log(task)

        return (
          <>
            <Task name={task.name} description={task.description} situation={task.situation}></Task>
          </>
        )
      }
    })
    return tasksMap
  }

  function renderTasks() {
    if (tasks) {
      return (
        <Fragment>
          <div className='tasks-container'>
            <div className='to-do'>{renderToDoTasks()}</div>

            <div className='completed'>{renderCompletedTasks()}</div>

            <div className='in-progress'>{renderInProgressTasks()}</div>

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
          <div className='tasks'>{renderTasks()}</div>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  )
}
