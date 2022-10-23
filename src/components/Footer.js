import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the adeventure
            </p>
            <p className="footer-subscription-text">
                You can unsuscribe at any time.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder='Your Email' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Suscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="-link-items">
                    <Link to='/about'>
                        <h2>About Me</h2>
                    </Link>
                </div>
                <div className="-link-items">
                    <Link to='/about'>
                        <h2>Work</h2>
                    </Link>
                </div>
                <div className="-link-items">
                    
                    <Link to='/about'>
                        <h2>Contact Me</h2>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;