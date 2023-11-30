import React, { useState } from 'react';
import './Navbar.css';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import LoginModal from '../Modal/LoginModal';
import RegisterModal from '../Modal/RegisterModal';

const Navbar = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleLoginModalClose = () => setShowLoginModal(false);
    const handleLoginModalShow = () => setShowLoginModal(true);

    const [showRegModal, setShowRegModal] = useState(false);

    const handleRegModalClose = () => setShowRegModal(false);
    const handleRegModalShow = () => setShowRegModal(true);

    return (
        <div>
            <div className="navBarContainer">
                <nav className="navBar">
                    <a href="/">
                        <Logo />
                    </a>
                    <div className="navItems">
                        <a href="/#login" onClick={handleLoginModalShow}>
                            Login
                        </a>
                        <a href="/#register" onClick={handleRegModalShow}>Register</a>
                    </div>
                </nav>
            </div>
            <LoginModal show={showLoginModal} onHide={handleLoginModalClose} />
            <RegisterModal show={showRegModal} onHide={handleRegModalClose} />
        </div>
    );
};

export default Navbar;
