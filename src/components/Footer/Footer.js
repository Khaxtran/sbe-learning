import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Board Members</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>
    <div class='website-rights'>© Stray Balloon 2022</div>
    
 {/*      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <i class='fab fa-typo3' /> 
            </Link>
          </div>
          
          <div class='social-icons'>
            <Link class='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'>
              <i class='fab fa-youtube' />
            </Link>

            <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='LinkedIn'>
              <i class='fab fa-linkedin' /> 
            </Link>
          </div>
        </div>
      </section>*/}

      
    </div>
  );
}

export default Footer;