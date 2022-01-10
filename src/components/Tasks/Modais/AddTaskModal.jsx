import { Button, Modal } from "react-bootstrap";
import { useState } from 'react'
import { api } from '../../../api/apiRotes'

import 'bootstrap/dist/css/bootstrap.min.css';

import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'


export default function AddTaskModal(props) {

    const [fields, setFields] = useState({})

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


    async function saveNewTask() {
        const { name, description } = fields

        const situation = props.situation

        try {
            const newTask = await api.put('/addTask', { name, description, situation })
            toast.success(newTask.data.message, getToastConfig())
            await props.refreshTasks()
            closeModal()
        } catch (error) {
            toast.error(error.response.data.message, getToastConfig())
        }
    }

    async function closeModal() {
        setFields({})
        props.onHide()

    }

    return (
        <>
            <ToastContainer
                position='top-right'
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer />
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='add-task-modal'>
                    <div className='add-task-container'>
                        <h1>Adicionar Tarefa: {props.situation}</h1>

                        <div className='name-input-container'>
                            <p>Nome:</p>
                            <input onChange={(event) => setFields({ ...fields, name: event.target.value })}>
                            </input>
                        </div>

                        <div className='description-input-container'>
                            <p>Descrição:</p>
                            <textarea onChange={(event) => setFields({ ...fields, description: event.target.value })}></textarea>
                        </div>



                        <div className='buttons-container'>
                            <Button onClick={closeModal}>Close</Button>
                            <Button onClick={saveNewTask}>Salvar</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}