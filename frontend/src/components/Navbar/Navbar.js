import React, { useState } from 'react';
import './Navbar.css';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import LoginModal from '../Modal/LoginModal';
import RegisterModal from '../Modal/RegisterModal';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'

const Navbar = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleLoginModalClose = () => setShowLoginModal(false);
    const handleLoginModalShow = () => setShowLoginModal(true);

    const [showRegModal, setShowRegModal] = useState(false);

    const handleRegModalClose = () => setShowRegModal(false);
    const handleRegModalShow = () => setShowRegModal(true);

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
  
    const onLogout = () => {
      dispatch(logout())
      dispatch(reset())
      navigate('/')
    }

    return (
        
        <div>
            <div className="navBarContainer">
                <nav className="navBar">
                    <a href="/">
                        <Logo />
                    </a>
                    <div >
                    {user ? (
                        <a href="/#logout" onClick={onLogout}>
                            Logout
                        </a>
                         ) : (
                            <div className="navItems">
                            <a href="/#login" onClick={handleLoginModalShow}>
                                Login
                            </a>
                            <a href="/#register" onClick={handleRegModalShow}>Register</a>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
            <LoginModal show={showLoginModal} onHide={handleLoginModalClose} />
            <RegisterModal show={showRegModal} onHide={handleRegModalClose} />
        </div>
    );
};

export default Navbar;
