import { Fragment, useEffect, useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { api } from '../../api/apiRotes'
import Drawer from '../Drawer'
import Task from './Task'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddTaskModal from './AddTaskModal'

interface ITask {
  name: string
  description: string
  situation: string
}

export default function Tasks() {
  const [tasks, setTasks] = useState([])
  const [modalShow, setModalShow] = useState(false)
  //TODO FAZER A MODAL PEGAR A SITUAÇÃO DA TAREFA DEPENDENDO DE QUAL O USUÁRIO SELECIONAR
  const [taskSituation, setTaskSituation] = useState([''])

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
          <AddTaskModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            situation={taskSituation}
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
                    setTaskSituation(['to-do', 'A fazer'])
                  }}
                ></FontAwesomeIcon>
              </div>

              <div className='to-do-container'>{separateTasks('in-progress')}</div>
            </div>

            <div className='in-progress'>
              <div className='in-progress-tittle'>
                <h4>Em andamento</h4>
                <FontAwesomeIcon
                  icon={faPlus}
                  size='lg'
                  color='black'
                  className='plus-icon'
                  onClick={() => {
                    setModalShow(true)
                    setTaskSituation(['in-progress', 'Em andamento'])
                  }}
                ></FontAwesomeIcon>
              </div>

              <div className='in-progress-container'>{separateTasks('to-do')}</div>
            </div>

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
                    setTaskSituation(['completed', 'Completas'])
                  }}
                ></FontAwesomeIcon>
              </div>

              <div className='completed-container'>{separateTasks('completed')}</div>
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
