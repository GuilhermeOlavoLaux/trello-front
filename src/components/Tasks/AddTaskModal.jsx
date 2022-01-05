import { Button, Modal } from "react-bootstrap";
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddTaskModal(props) {
    const [name, setName] = useState()
    const [description, setDescription] = useState()

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='add-task-modal'>
                <div className='add-task-container'>
                    <h1>Adicionar Tarefa</h1>

                    <div className='name-input-container'>
                        <p>Nome:</p>
                        <input onChange={(e) => setName(e.target.value)}></input>
                    </div>

                    <div className='description-input-container'>
                        <p>Descrição:</p>
                        <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>

                    <div className='buttons-container'>
                        <Button onClick={handleClose}>Fechar</Button>
                        <Button onClick={saveNewTask}>Salvar</Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}