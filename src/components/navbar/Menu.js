import React, { useState } from 'react';
import './Menu.css';
import { Link } from 'react-scroll';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-bg"></div>
      <div className='menu-logo'>
        <div className='text1'>
          <h1>Website</h1>
        </div>
        <div className='orange-bg'>
          <h1 className='logo-text'> <i className='fas fa-camera'></i> Photo</h1>
        </div>
      </div>
      
      <div className={`menu-items ${isOpen ? 'open' : ''}`}>
        <ul>
          <li className="menu-item"><Link activeClass="active" to="home" spy={true} smooth={true} duration={1000} onClick={toggleMenu}><i className="fas fa-home"></i> Acasa </Link></li>
          <li className="menu-item"><Link activeClass="active" to="portofoliu" spy={true} smooth={true} duration={1000} onClick={toggleMenu}><i className="fas fa-briefcase"></i> Portofoliu </Link></li>
          <li className="menu-item"><Link activeClass="active" to="rezerva" spy={true} smooth={true} duration={1000} onClick={toggleMenu}><i className="fas fa-calendar-alt"></i> Programeaza-te </Link></li>
        </ul>
        
      </div>
      <div className={`menu-social ${isOpen ? 'open' : ''}`}>
        <ul className="menu-social-list">
          <li className='menu-social-item'><a href='https://www.facebook.com/'><i className='fab fa-facebook-f'></i></a></li>
          <li className='menu-social-item'><a href='https://www.instagram.com/'><i className='fab fa-instagram'></i></a></li>
          <li className='menu-social-item'><a href='https://www.whatsapp.com/'><i className='fab fa-whatsapp'></i></a></li>
        </ul>
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Menu;
