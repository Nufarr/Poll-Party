import React from 'react';
import './Modal.css';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function LoginModal() {
    return(
        <Modal backdrop={true} centered className='modal'>
        <Modal.Body className='body' centered>
            <Modal.Title className='title text-center'>Login</Modal.Title>
          <Form>
            <Form.Group className="form" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="form"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        </Modal>
    );
}

export default LoginModal;