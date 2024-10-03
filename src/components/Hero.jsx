import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div id='home' className='flex flex-col sm:flex-row border bg-teal-400'>
     { /*Hero left side*/}
      <div className='mt-10   sm:w-1/2 flex items-center justify-center  py-10  sm:py-0 '>


      <div className='items-center justify-center flex flex-col'>
      <h1 className=' text-3xl sm:text-4xl lg:text-5xl py-3 leading-relaxed flex text-center items-center justify-center'>Best Hoodies In The Town!</h1>
      <b className='font-sans'>15 % Off On The First Order</b>
      <button className='px-8 py-3 shadow-md hover:shadow-lg  border-black border-2 bg-green-500  rounded-full font-sans font-semibold mt-4 hover:bg-green-400 active:bg-green-300'>Get Started</button>
      </div>
      </div>
      
      {/*Hero right side*/}

      <img src={assets.hero_img} alt="" className='w-full sm:w-1/2' />
    </div>
  )
}

export default Hero

