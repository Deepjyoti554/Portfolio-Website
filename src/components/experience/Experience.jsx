import React from 'react'
import "./experience.css"
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
        <h5>What skills I have</h5>
        <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className='article__container'>
            <article className="experience__content">
              <BsFillPatchCheckFill className='experience__content-icon'/>
              <div className="experience__details">
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__content">
              <BsFillPatchCheckFill className='experience__content-icon'/>
              <div className="experience__details">
                <h4>CSS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__content">
              <BsFillPatchCheckFill className='experience__content-icon'/>
              <div className="experience__details">
                <h4>JavaScript</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__content">
              <BsFillPatchCheckFill className='experience__content-icon'/>
              <div className="experience__details">
                <h4>Bootstrap</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__content">
              <BsFillPatchCheckFill className='experience__content-icon'/>
              <div className="experience__details">
                <h4>React</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="backend__container">
          <div className="experience__frontend">
            <h3>BackEnd Development</h3>
            <div className='article__container'>
              <article className="experience__content">
                <BsFillPatchCheckFill className='experience__content-icon'/>
                <div className="experience__details">
                  <h4>NodeJs</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="experience__content">
                <BsFillPatchCheckFill className='experience__content-icon'/>
                <div className="experience__details">
                  <h4>MongoDB</h4>
                  <small>Intermediate</small>
                </div>
              </article>
              <article className="experience__content">
                <BsFillPatchCheckFill className='experience__content-icon'/>
                <div className="experience__details">
                  <h4>Express</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="experience__content">
                <BsFillPatchCheckFill className='experience__content-icon'/>
                <div className="experience__details">
                  <h4>MySQL</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="experience__content">
                <BsFillPatchCheckFill className='experience__content-icon'/>
                <div className="experience__details">
                  <h4>Python</h4>
                  <small>Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
