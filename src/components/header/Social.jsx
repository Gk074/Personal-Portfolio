import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {GoMarkGithub} from 'react-icons/go'

const Social = () => {
  return (
    <div className='social_media'>
        <a href='https://www.linkedin.com/in/gokulakrishnan-r-79a72721a/' target="_blank"><FiLinkedin/></a>
        <a href='https://github.com/Gk074' target="_blank"><GoMarkGithub/></a>
    </div>
  )
}

export default Social