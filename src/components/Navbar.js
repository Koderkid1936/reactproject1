import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
//import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link activeClass="active" to='Home' spy={true} smooth={true} offset={-70} duration={500} className='navbar-logo' onClick={closeMobileMenu}>
            Brian
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link activeClass="active" to='home' spy={true} smooth={true} offset={-70} duration={500} to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link activeClass="active" to='services' spy={true} smooth={true} offset={-70} duration={500} 
                to='/services'
                className='nav-links'
                onClick= {closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link activeClass="active" to='products' spy={true} smooth={true} offset={-70} duration={500} 
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>


          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
