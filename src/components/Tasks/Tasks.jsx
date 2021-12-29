import { useEffect, useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { api } from '../../api/apiRotes'
import Drawer from '../Drawer'

export default function Tasks() {
  const [tasks, setTasks] = useState();



  async function fetchTasks() {
    const { data } = await api.get('/tasks');

    setTasks(data)
  }

  useEffect(() => {

    fetchTasks();

  }, []);

  return (
    <>
      <Header></Header>
      <div className='tasks-screen'>
        <Drawer></Drawer>

        <div className='tasks-screen-container'>
          <div className='tasks'>
            <div className='tasks-container'>
              <div className='to-do'>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </div>


              <div className='completed'>
                <ul>
                  <li>a</li>
                  <li>b</li>
                  <li>c</li>
                  <li>d</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
