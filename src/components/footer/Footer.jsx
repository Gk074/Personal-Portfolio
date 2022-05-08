import React from 'react'
import './footer.scss'
import {FiLinkedin} from 'react-icons/fi'
import {GoMarkGithub} from 'react-icons/go'
import {AiOutlineInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>GK</a>
      <ul className='permalinks'>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#contact'>Contacts</a></li>
      </ul>
      <div className='footer_socials'>
        <a href='https://www.linkedin.com/in/gokulakrishnan-r-79a72721a/'><FiLinkedin/> </a>
        <a href='https://github.com/Gk074'><GoMarkGithub/> </a>
        <a href='https://instagram.com/gokskrsna'><AiOutlineInstagram/> </a>
      </div>
      <div className='footer_copyright'>
        <small> &copy; Gk. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer