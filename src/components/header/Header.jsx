import React from 'react'
import './header.scss'
import CTA from './CTA'
import Gkk from '../../assets/gkk.jpg'
import Social from './Social'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>hello,I'm </h5>
        <h1> Gokulakrishnan </h1>
        <h5 className='text-light'> IT Student</h5>
        <CTA />
        <Social />
        <div className="gkk">
          <img src={Gkk} alt="my picture" style={{objectFit: "contain", width: "22rem", height: "22rem"}}/>
        </div>
        <a href='#contact' className='scroll__down'>scroll down</a>
      </div>
    </header>
  )
}

export default Header