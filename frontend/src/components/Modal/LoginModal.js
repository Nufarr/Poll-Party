import React, { useState , useEffect} from 'react';
import './Modal.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {ReactComponent as CloseBut} from '../../assets/images/modalCloseButton.svg';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../../features/auth/authSlice'

function LoginModal({ show, onHide }) {
    const [emailM, setEmail] = useState('');
    const [passwordM, setPassword] = useState('');

    const handleClose = () => {
      onHide(); // Call the onHide function to close the modal
    };

    const [formData, setFormData] = useState({
      email: '',
      password: '',
    })
  
    const { email, password } = formData
  
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user, isError, isSuccess, message } = useSelector(
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
  
      const userData = {
        email,
        password,
      }
  
      dispatch(login(userData))
      
    }

    return (

        <Modal backdrop={true} centered className='modal' show={show} onHide={onHide}>
            <Modal.Body className='body' centered>
                  <div className='modalbutton'><CloseBut className="closebut" onClick={handleClose}/></div>
                <Modal.Title className='title text-center'>Login</Modal.Title>
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
                    <div className='center'>
                    <Button type="submit" className="loginbutton">Login</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default LoginModal;
