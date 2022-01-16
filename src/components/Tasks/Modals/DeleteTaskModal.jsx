import { Modal } from "react-bootstrap";
import { useContext } from 'react'
import { api } from '../../../api/apiRotes'

import { toast } from 'react-toastify'
import { TasksContext } from '../../context/TasksContext'

import 'react-toastify/dist/ReactToastify.css'



export default function DeleteTaskModal(props) {

    const { fetchTasks } = useContext(TasksContext)

    function getToastConfig() {
        return {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined
        }
    }

    async function deleteTask() {
        try {

            const deletedTask = await api.put(`deleteTask/${props._id}`, {})

            toast.success(deletedTask.data.message, getToastConfig())
            fetchTasks()
            props.onHide()
        } catch (error) {
            toast.error(error.response.data.message, getToastConfig())
        }
    }


    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Header closeButton className='delete-task-header'>

                    <h1>{props.title}</h1>
                </Modal.Header>

                <Modal.Body className='delete-task-modal'>

                    <div className='delete-task-container'>
                        <h4>Realmente deseja excluir esta tarefa? </h4>


                        <div className="buttons-container">
                            <button className="default-button" onClick={() => props.onHide()}>Voltar</button>
                            <button className="default-button" onClick={() => deleteTask()}>Excluir</button>
                        </div>

                    </div>


                </Modal.Body>

                <Modal.Footer className='delete-task-footer'>
                </Modal.Footer>
            </Modal>
        </>
    );
}