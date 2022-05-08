import React from 'react'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Contacts />
      <Footer />
    </>
  )
}

export default App