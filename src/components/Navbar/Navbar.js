import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  const [click, setClick] = useState(false); /* hamburger  */
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click); /* hamburger and x toggle */
  const closeMobileMenu = () => setClick(false);
  
  
  /* when window size decreases the button will disappear */
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //logout button does not move in the middle
  useEffect(() => { 
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
     <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            StrayBalloon 
            {/* No need for icon <i class='fab fa-typo3' /> */} 
        </Link>

        <div className='menu-icon' onClick={handleClick}> 
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> {/* responsive: hamburger menu appears when screen is smaller. */}
        </div>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>  {/* when you click it, nav menu disappear  */}
            
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}> 
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/games' className='nav-links' onClick={closeMobileMenu}>
                Games
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/account' className='nav-links' onClick={closeMobileMenu}>
                Account
              </Link>
            </li>

            <li>
              <Link to='/logout' className='nav-links-mobile' onClick={closeMobileMenu}>
                Logout
              </Link>
            </li>

          </ul>
          {button && <Button buttonStyle='btn--outline'>Logout</Button>}

     </div>
    </nav>
    </>
  );
}

export default Navbar;

