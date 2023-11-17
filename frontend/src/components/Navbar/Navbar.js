import React, { useState } from 'react';
import './Navbar.css';
import hamburgerMenu from '../icons/Hamburger_menu.svg';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import Modal from 'react-bootstrap/Modal';
import LoginModal from '../Modal/LoginModal';

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
    <div className="navBarContainer">
      <nav className="navBar">
        <a href="/">
          <Logo />
        </a>
        <div className="navItems">
          <a href="/#login" onClick={handleShow}>
            Login
          </a>
          <a href="/#register">Register</a>
        </div>
      </nav>
    </div>
    <LoginModal show={show} onHide={handleClose}/>
    </div>
  );
};

export default Navbar;
