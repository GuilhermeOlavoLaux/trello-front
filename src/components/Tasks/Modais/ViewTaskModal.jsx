import { Modal } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';



export default function ViewTaskModal(props) {


    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='view-task-modal'>
                    <h1>Tarefa</h1>

                    <h4>Título: </h4>
                    <p>{props.title}</p>


                    <h4>Descrição: </h4>
                    <p>{props.description}</p>


                    <h4>Situação:</h4>
                    <p>{props.situation}</p>

                </Modal.Body>
            </Modal>
        </>
    );
}