import React from 'react'
import CV from '../../assets/myresume.pdf'
import './header.scss'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>download CV</a>
        <a href='#contact' className='btn btn-primary'> lets talk </a>
    </div>
  )
}

export default CTA