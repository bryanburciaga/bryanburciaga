import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
           <Link to='/about'><h2>About Me</h2></Link>
          </div>
          <div class='footer-link-items'>
          <Link to='/about'><h2>Portfolio</h2></Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <Link to='/about'><h2>Contact</h2></Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Bryan Burciaga
            </Link>
          </div>
          <small class='website-rights'>Bryan Burciaga © 2022</small>
          <div class='social-icons'>
            <a href='https://www.instagram.com/bryan_burciagat/'
              class='social-icon-link instagram'
              target="_blank" 
              rel="noopener noreferrer"
              aria-label='Instagram'>
              <i class='fab fa-instagram' />
            </a>
            <a href='https://www.linkedin.com/in/bryanburciaga/'
              class='social-icon-link linkedin'
              target="_blank" 
              rel="noopener noreferrer"
              aria-label='Facebook'>
              <i class='fab fa-linkedin' />
            </a>
            <a href='https://github.com/bryanburciaga'
              class='social-icon-link github'
              target="_blank" 
              rel="noopener noreferrer"
              aria-label='Github'>
              <i class='fab fa-github' />
            </a>
          </div>
        </div>
      </section>
    </div>
    
  );
}

export default Footer;