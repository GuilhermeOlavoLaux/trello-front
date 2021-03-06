import { Button, Modal } from "react-bootstrap";
import { useState, useContext } from 'react'
import { api } from '../../../api/apiRotes'
import { TasksContext } from '../../context/TasksContext'


import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'



export default function EditTaskModal(props) {

    const [id, setId] = useState(props._id)
    const [name, setName] = useState(props.title)
    const [description, setDescription] = useState(props.description)
    const [situation, setSituation] = useState(props.situation)

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

    async function updateTask() {
        try {
            const newTask = await api.put('/updateTask', { id, name, description, situation })

            toast.success(newTask.data.message, getToastConfig())
            fetchTasks()
            props.onHide()
        } catch (error) {
            toast.error(error.response.data.message, getToastConfig())
        }
    }




    function renderSituationOptions() {
        const allSituations = ['A fazer', 'Em andamento', 'Completa']

        const options = allSituations.map(situation => {
            if (situation !== props.situation) {
                return (
                    <option value={situation}>{situation}</option>
                )
            }
        });
        return options
    }

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Header closeButton className='edit-task-header'>

                    <h1>{props.title}</h1>
                </Modal.Header>

                <Modal.Body className='edit-task-modal'>

                    <div className='edit-task-container'>
                        <h4>Nome: </h4>

                        <input value={name} onChange={(e) => setName(e.target.value)}></input>


                        <h4>Descri????o: </h4>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>


                        <h4>Situa????o:</h4>n

                        <select name="situations" value={situation} onChange={(e) => setSituation(e.target.value)}>
                            <option value={props.situation}>{props.situation}</option>
                            {renderSituationOptions()}
                        </select>

                    </div>


                </Modal.Body>

                <Modal.Footer className='edit-task-footer'>
                    <Button className='default-button' onClick={() => updateTask()}>Editar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}