import React from 'react';
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className = 'mx-auto w-[500px] my-4' src={Laptop} alt='animated laptop with analytics on the display' />
          <div className = 'flex flex-col justify-center p-4'>
            <p className=' text-[#00df9a] font-bold '>
                DATA ANALYTICS DASHBOARD
            </p>
            <h1 className='md:text-4xl sm:text-3xl  text-[#000300] font-bold text-3xl pt-4 pb-4'>
                Manage Data Analytics Centrally 
            </h1>
            <p className = 'text-[#000300] space-y-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            </p>
            <button className='mt-8 mx-auto max-w-l md:w-[200px] font-medium text-[#00df9a]  bg-[#000300] border-spacing-2 p-3 rounded-md' > 
               Get Started
            </button>
          </div>
 
       </div> 
      

    </div>
  )
}

export default Analytics