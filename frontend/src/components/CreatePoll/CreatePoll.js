import React, { useState , useEffect} from 'react';
import './CreatePoll.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {ReactComponent as CloseBut} from '../../assets/images/modalCloseButton.svg';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../../features/auth/authSlice'


function CreatePoll({ show, onHide }) {
    const [question, setQ] = useState('');
    const [option1, setoption1] = useState('');
    const [option2, setoption2] = useState('');
    const [option3, setoption3] = useState('');

    const handleClose = () => {
      onHide(); // Call the onHide function to close the modal
    };

    return (

        <Modal size="xl" backdrop={true} centered={true} className='modal' show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Body className='body' centered>
                  <div className='modalbutton'><CloseBut className="closebut" onClick={handleClose}/></div>
                <Modal.Title className='title text-center' id="contained-modal-title-vcenter">Create a Poll</Modal.Title>
                <Form>
                <Form.Group className="formpoll">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="textarea"
                            name='question'
                            id='question'
                            className='pollcontrol'
                            placeholder="Type your question here"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="formpoll">
                        <Form.Label>Voting Type</Form.Label>
                        <div>
                        <input type="radio" id="html" name="fav_language" value="HTML"></input>
                        <label>Single Choice</label><br/>
                        </div>
                        <div>
                        <input type="radio" id="css" name="fav_language" value="CSS"></input>
                        <label>Multiple Choice</label><br/>
                        </div>
                    </Form.Group>
                    <Form.Group className="form">
                        <Form.Label>Answers</Form.Label>
                        <Form.Control
                            type="textarea"
                            name='option1'
                            id='option1'
                            className='pollcontrol'
                            placeholder="Option1"
                            autoFocus
                        />
                        <Form.Control
                            type="textarea"
                            name='option2'
                            id='option2'
                            className='pollcontrol'
                            placeholder="Option2"
                            autoFocus
                        />
                        <Form.Control
                            type="textarea"
                            name='option3'
                            id='option3'
                            className='pollcontrol'
                            placeholder="Option3"
                            autoFocus
                        />
                    </Form.Group>
                    <div className='center'>
                    <Button type="submit" className="createPollbutton">Create Poll</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default CreatePoll;
