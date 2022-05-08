import React from 'react'
import './navbar.scss'
import {BiHomeAlt} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react'


const Navbar = () => {
  const[activeNavbar, setActiveNavbar] = useState('#')
  return (
    <navbar>
      <a href='#'  onClick={() => setActiveNavbar('#')} className={activeNavbar === '#' ? 'active' : ''}><BiHomeAlt /></a>
      <a href='#about' onClick={() => setActiveNavbar('#about')} className={activeNavbar === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNavbar('#experience')} className={activeNavbar === '#experience' ? 'active' : ''}><BsBook /></a>
      <a href='#contact' onClick={() => setActiveNavbar('#contacts')} className={activeNavbar === '#contacts' ? 'active' : ''}><BiMessageDetail /></a>

    </navbar>
  )
}

export default Navbar