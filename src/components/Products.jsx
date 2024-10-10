import React from 'react'
import img1 from '../assets/p_img1.jpg'
import img2 from '../assets/p_img2.jpg'
import img3 from '../assets/p_img3.jpg'
import img4 from '../assets/p_img4.jpg'
import img5 from '../assets/p_img5.jpg'
import img6 from '../assets/p_img6.jpg'
import img7 from '../assets/p_img7.jpg'
import img8 from '../assets/p_img8.jpg'

const images =[img1,img2,img3,img4,img5,img6,img7,img8];


const Products = () => {
  return (
    <div id='products' className='my-10 px-4'>
      
      <div className='text-center py-8 '>
        <h1 className='text-3xl md:text-7xl sm:text-5xl '>Products Gallary</h1>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-black'>
        Best of this winter.These items are newly added to our website.
        </p>
      </div>


      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
      
      {
        images.map((images,index)=>
           <div className='overflow-hidden'>
              <img src={images} key={index} className='hover:scale-110 transition ease-in-out ' alt="" />
           </div>
        )
      }
    </div>
    </div>
  )
}

export default Products
