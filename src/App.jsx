import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Footer from './components/Footer'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='bg-gradient-to-tr from-sky-400'>
      <Navbar/>
      <Hero/>
      <Products/>
      <Features/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

