import React from 'react'
import "./about.css"
import Me from "../../assets/pic 5.jpeg"
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-img">
            <img src={Me} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icons' />
              <h5>Expeirence</h5>
              <small>3+ Year Working</small>
            </article>

            <article className='about__card'>
              <FiUser className='about__icons' />
              <h5>Clients</h5>
              <small>50+ NationWide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icons' />
              <h5>Projects</h5>
              <small>20+ Completed project</small>
            </article>

          </div>
          <p>Hi, I’m Deepjyoti👋 - a final year student @ KIIT UNIVERSITY exploring the field of Computer Science.

            I am always ready to have new experiences, meet new people and learn new technology and love to dig and explore fundamental Engineering concepts around the Web listening to conferences, podcasts 🎧 and reading articles over the Internet.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section >
  )
}

export default About
