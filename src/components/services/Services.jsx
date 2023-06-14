import React from 'react'
import "./services.css"
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
        <h5>Services</h5>
        <h2>What I Give</h2>
      <div className="container service__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheckLg/></li>
            <p>Has experience in both UI/UX design and development</p>
          </ul>
          <ul className='service__list'>
            <li><BsCheckLg/></li>
            <p>Has a strong understanding HCI principles</p>
          </ul>
          <ul className='service__list'>
            <li><BsCheckLg/></li>
            <p>Has experience with a variety of web development tools and technologies, such as version control systems, build tools and frameworks</p>
          </ul>
          <ul className='service__list'>
            <li><BsCheckLg/></li>
            <p>Proficient in using development software, such as React, HTML, CSS, and JavaScript</p>
          </ul>
          <ul className='service__list'>
            <li><BsCheckLg/></li>
            <p>Able to work independently and as part of a team</p>
          </ul>
          <ul className='service__list'>
            <li><BsCheckLg/></li>
            <p>Able to meet deadlines and work under pressure</p>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Web Developer</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheckLg/></li>
            <p>Has experience in developing web applications using a variety of programming languages and frameworks</p>
          </ul>
          <ul className='service__list'>
            <li><BsCheckLg/></li>
            <p>Has experience with a variety of web development tools and technologies, such as build tools, and testing frameworks</p>
          </ul>
          <ul className='service__list'>
            <li><BsCheckLg/></li>
            <p>Able to work independently and as part of a team</p>
          </ul>
          <ul className='service__list'>
            <li><BsCheckLg/></li>
            <p>Able to meet deadlines and work under pressure</p>
          </ul>
          <ul className='service__list'>
            <li><BsCheckLg/></li>
            <p>Is passionate about web development and is always looking for new ways to learn and improve</p>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Video Editing</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheckLg/></li>
            <p>Has experience in editing video footage using a variety of software applications</p>
          </ul>
          <ul className='service__list'>
            <li><BsCheckLg/></li>
            <p>Understands the principles of video editing and is able to create videos that are both visually appealing and engaging</p>
          </ul>
          <ul className='service__list'>
            <li><BsCheckLg/></li>
            <p>Has experience with a variety of video editing tools and technologies, such as color correction, sound mixing, and motion graphics</p>
          </ul>
          <ul className='service__list'>
            <li><BsCheckLg/></li>
            <p>Able to work independently and as part of a team</p>
          </ul>
          <ul className='service__list'>
            <li><BsCheckLg/></li>
            <p>Able to meet deadlines and work under pressure</p>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
