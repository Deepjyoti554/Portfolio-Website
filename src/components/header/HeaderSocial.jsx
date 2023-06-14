import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {SiGithub} from 'react-icons/si'
import {FaDribbble} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com" target='_blank'><SiGithub/></a>
      <a href="https://dribble.com" target='_blank'><FaDribbble/></a>
    </div>
  )
}

export default HeaderSocial
