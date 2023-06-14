import React from 'react'
import "./header.css"
import ME from "../../assets/pic 3.jpeg"
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'am</h5>
        <h1>Deepjyoti</h1>
        <h5 className='.text-light'>FullStack Developer</h5>

        <CTA/>
        <HeaderSocial/>

        <div >
          <img className="me" src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
