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


                    <div className="view-task-container">

                        <h1>{props.title}</h1>

                        <h4>Descrição: </h4>
                        <div className="description-container">
                            <p>{props.description}</p>
                        </div>


                        <div className="situation-container">

                            <h4>Situação:</h4>
                            <p>{props.situation}</p>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}