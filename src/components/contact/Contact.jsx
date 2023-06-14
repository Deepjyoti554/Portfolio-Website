import React from 'react'
import "./contact.css"
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_a13eq0d', 'template_t97fa2n', form.current, 'B6a2ZJQ8yM6gDW6cn');
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
            <article className='contact__option'>
              <MdOutlineMailOutline className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>deepjyotidebnath369@gmail.com</h5>
              <a href="mailto:deepjyotidebnath369@gmail.com" target='_blank'>Send me message</a>
            </article>
            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>deeps.nath</h5>
              <a href="https://m.me/deepsds.nath" target='_blank'>Send me message</a>
            </article>
            <article className='contact__option'>
              <MdOutlineMailOutline className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+91 9612112242</h5>
              <a href="https://api.Whatsapp.com/send?+919612112242" target='_blank'>Send me message</a>
            </article>
        </div>
        {/* === End of Contact Option === */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
