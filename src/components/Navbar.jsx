import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useEffect } from "react";


const Navbar = () => {

   const [visible,setVisible] = useState(false);

   useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }
  }, [visible]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div >

<div className='w-full flex fixed items-center  py-5 font-medium text-white bg-gray-800 '>
      <h1 onClick={() => scrollToSection('home')} className='flex px-3 font-bold cursor-pointer'>MAZE</h1>
      <div className='mx-auto'>
      <ul className='hidden  justify-center items-center text-center sm:flex gap-5  '>

    
      <p onClick={() => scrollToSection('home')} className='flex flex-col items-center gap-1 cursor-pointer '>Home</p>
      

    
      <p onClick={()=> scrollToSection('products')} className='flex flex-col items-center gap-1 cursor-pointer '>Products</p>


      
      <p onClick={()=> scrollToSection('features')} className='flex flex-col items-center gap-1 cursor-pointer '>Features</p>
  

  
      <p onClick={()=> scrollToSection('contact')} className='flex flex-col items-center gap-1 cursor-pointer '>Contact</p>
  
     

     </ul>
      </div>

      
      <div className="flex justify-end items-center group relative">
      <img onClick={() => setVisible(true)} src={assets.openmenu} alt="open-menu" className="w-10 mx-4 sm:hidden"
      />
     </div>
  

      {/* sidebar */}

      <div
        className={`fixed top-0 right-0 w-full h-full bg-gray-800 bg-opacity-70 p-5 transform ${
          visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } transition-opacity  duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end items-center group relative">
      <img onClick={() => setVisible(false)} src={assets.closemenu} alt="open-menu" className="w-8 pt-1 sm:hidden"
      />
     </div>

        <ul className="flex flex-col items-center gap-5 mt-10">
          <p className="text-white text-xl" onClick={() => {setVisible(false) ; scrollToSection('home')}  }>
            Home
          </p>
          <p className="text-white text-xl" onClick={() => {setVisible(false) ; scrollToSection('products')}}>
            Products
          </p>
          <p className="text-white text-xl" onClick={() => {setVisible(false) ; scrollToSection('features')}}>
            Features
          </p>
          <p className="text-white text-xl" onClick={() => {setVisible(false) ; scrollToSection('contact')}}>
            Contact
          </p>
        </ul>
      </div>

    {/* Blur Background */}
    {visible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setVisible(false)} // Close sidebar when background is clicked
        ></div>
      )}

      </div>

      </div>

      

  )
}

export default Navbar
