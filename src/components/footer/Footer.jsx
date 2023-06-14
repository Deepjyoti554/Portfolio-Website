import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Deepjyoti</a>

      <ul className="footer__parmalink">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/deepsds.nath" target='_blank'><FaFacebookF/></a>
        <a href="https://www.instagram.com/deeps.nath/" target='_blank'><BsInstagram/></a>
        <a href="https://twitter.com/DeepjyotiDebn14" target='_blank'><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Deepjyoti Website. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
