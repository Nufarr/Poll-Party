import React, { useState, useEffect } from 'react';
import './Modal.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../../features/auth/authSlice';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {ReactComponent as CloseBut} from '../../assets/images/modalCloseButton.svg';
import Button from 'react-bootstrap/Button';

function RegisterModal({ show, onHide }) {
    const [emailM, setEmail] = useState('');
    const [passwordM, setPassword] = useState('');

    const handleClose = () => {
      onHide(); // Call the onHide function to close the modal
    };
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: '',
      })

      const { email, password, password2 } = formData

      const navigate = useNavigate()
      const dispatch = useDispatch()

      const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
      )

      useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess || user) {
          navigate('/')
          onHide();
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])

      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }


      const onSubmit = (e) => {
        e.preventDefault()
        if (password !== password2) {
            toast.error('Passwords do not match')
          } else {
            const userData = {
              email,
              password,
            }
      
            dispatch(register(userData))
          }
      }

    return (
        <Modal backdrop={true} centered className='modal' show={show} onHide={onHide}>
            <Modal.Body className='body' centered>
                  <div className='modalbutton'><CloseBut className="closebut" onClick={handleClose}/></div>
                <Modal.Title className='title text-center'>Register</Modal.Title>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="form">
                        <Form.Control
                            type="email"
                            name='email'
                            id='email'
                            placeholder="Email"
                            value={email}
                            onChange={onChange}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="form">
                        <Form.Control
                            type="password"
                            name='password'
                            id='password'
                            placeholder="Password"
                            value={password}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="form">
                        <Form.Control
                            type="password"
                            name="password2"
                            id='password2'
                            placeholder="Confirm password"
                            value={password2}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <div className='center'>
                    <Button type="submit" className="createbutton">Create account</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default RegisterModal;
