import { Button, Modal } from "react-bootstrap";
import { useState } from 'react'
import { api } from '../../api/apiRotes'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddTaskModal(props) {

    const [fields, setFields] = useState({})


    async function saveNewTask() {

        const { name, description, situation } = fields

        console.log(name, description, situation)


        await api.put('/addTask', { name, description, situation })

    }

    function possiblesSituations() {
        const situations = [['to-do', 'A fazer'], ['in-progress', 'Em andamento'], ['completed', 'Completa']]

        const situationsOptions = situations.map(situation => {
            if (situation[0] !== props.situation[0]) {
                return <option value={situation[0]} >{situation[1]}</option>
            }
        });

        return situationsOptions
    }

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
                        <input onChange={(event) => setFields({ ...fields, name: event.target.value })}>
                        </input>
                    </div>

                    <div className='description-input-container'>
                        <p>Descrição:</p>
                        <textarea onChange={(event) => setFields({ ...fields, description: event.target.value })}></textarea>
                    </div>

                    <div className='situation-input-container'>
                        <p>Situação:</p>

                        <select >
                            <option value={props.situation[0]}
                                onChange={(event) => setFields({ ...fields, situation: event.target.value })}>{props.situation[1]}
                            </option>

                            {possiblesSituations()}
                        </select>
                    </div>


                    <div className='buttons-container'>
                        <Button onClick={props.onHide}>Close</Button>
                        <Button onClick={saveNewTask}>Salvar</Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}