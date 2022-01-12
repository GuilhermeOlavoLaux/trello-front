import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { api } from '../../../api/apiRotes'

import 'bootstrap/dist/css/bootstrap.min.css';



export default function ViewTaskModal(props) {



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
                <Modal.Body className='view-task-modal'>

                    <div className='view-task-container'>

                        <h1>Tarefa</h1>

                        <h4>Título: </h4>
                        <input></input>


                        <h4>Descrição: </h4>
                        <textarea></textarea>


                        <h4>Situação:</h4>

                        <select name="situations">
                            <option value={props.situation}>{props.situation}</option>
                            {renderSituationOptions()}
                        </select>

                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}