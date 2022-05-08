import React from 'react'
import './contact.scss'
import {HiOutlineMail} from 'react-icons/hi'
import {RiSnapchatLine} from 'react-icons/ri'
import {AiOutlineInstagram} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contacts = () => {
  const form= useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cvheqvl', 'template_4ip4lbe', form.current, 'E3jPGyRyqMb0xJyL5')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5> Get In Touch </h5>
      <h2>Contact Me</h2>
      <div className='.container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            < HiOutlineMail className='icon'/>
            <h4>Email</h4>
            <h5>krishgokul818046@gmail.com</h5>
          </article>
          <article className='contact_option'>
            < AiOutlineInstagram className='icon'/>
            <h4>Instagram</h4>
            <h5>gokskrsna</h5>
          </article>
          <article className='contact_option'>
            < RiSnapchatLine className='icon'/>
            <h4>Snapchat</h4>
            <h5>gokskrsna</h5>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
            <input type='text' name='name' placeholder='Your Full Name' required/>
            <input type='email' name='email' placeholder='Your Email' required/>
            <textarea name='message' rows='5' placeholder='Type Here' required></textarea>
            <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts