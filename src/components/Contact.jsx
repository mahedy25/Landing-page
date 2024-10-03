import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin
} from 'react-icons/fi';

const Contact = () => {
  return (
    <div id='contact' className='flex justify-between py-10 px-4 bg'>
      <div className='flex flex-col gap-3 font-semibold'>
        <h1 className='text-xl sm:text-2xl  md:text-3xl'>Contact Us:</h1>
        <b className='text-xs sm:text-lg'>Phone :+2451358548</b>
        <b className='text-xs sm:text-lg'>E-mail :maze413@gmail.com</b>
      </div>
      
      <div className='flex gap-3 sm:gap-5 my-auto flex-col sm:flex-row cursor-pointer'>

      {<FiFacebook />}
      {<FiInstagram/>}
      {<FiTwitter/>}
      {<FiLinkedin/>}
      
    </div>
    </div>
  )
}

export default Contact
