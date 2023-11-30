import React, { useState } from 'react';
import './Modal.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {ReactComponent as CloseBut} from '../../assets/images/modalCloseButton.svg';
import Button from 'react-bootstrap/Button';

function LoginModal({ show, onHide }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClose = () => {
      onHide(); // Call the onHide function to close the modal
    };

    return (
        <Modal backdrop={true} centered className='modal' show={show} onHide={onHide}>
            <Modal.Body className='body' centered>
                  <div className='modalbutton'><CloseBut className="closebut" onClick={handleClose}/></div>
                <Modal.Title className='title text-center'>Login</Modal.Title>
                <Form>
                    <Form.Group className="form" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="form" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <div className='center'>
                    <Button className="loginbutton">Login</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default LoginModal;
