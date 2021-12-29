import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from './context/AuthContext'
import Footer from './Footer'
import Header from './Header'
import { api } from '../api/apiRotes'

export default function Tasks() {
  //   const { handleLogout } = useContext(Context)
  //   const navigate = useNavigate()

  async function getTasks() {
    const { data } = await api.get('/tasks')

    const token = localStorage.getItem('token')
    console.log(token)

    console.log(data)
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
      <Header></Header>

      <div className='tasks-screen'>
        <div className='drawer'></div>
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
