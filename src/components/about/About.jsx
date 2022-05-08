import React from 'react'
import './about.scss'
import ME from '../../assets/snapp.jpg'
import {BsAward} from 'react-icons/bs'
import {CgWorkAlt} from 'react-icons/cg'
import {FaRegFolderOpen} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know </h5>
      <h2>About Me </h2>
      <div className='container about__container'>
        <div className='about_me'>
          <div className='about_me_image'>
            <img src={ME} alt='about image' style={{ objectFit:"contain", width:"14rem", height:"29rem" }}/>
          </div>

        </div>
      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
            <BsAward className='about_icon'/>
            <h5>Experience</h5>
            <small>Fresher</small>
          </article>
          <article className='about_card'>
            <CgWorkAlt className='about_icon'/>
            <h5>Internships</h5>
            <small>1</small>
          </article>
          <article className='about_card'>
            <FaRegFolderOpen className='about_icon'/>
            <h5>Projects</h5>
            <small>2</small>
          </article>
        </div>
      <p>
        I am a 20 year old IT student pursuing my B.TECH in SRM Easwari Engineering College. With great enthusiasm of learning new things working with it i have quite technical and managing skills, I have a decent level of experience with some computer languages and hoping to learn more every day.
      </p>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>

    </section>
  )
}

export default About