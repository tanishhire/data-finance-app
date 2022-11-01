import React from 'react';
import Typed from 'react-typed';


const Hero = () => {
  return (
    <div className='text-white'>
    <div className='p-4 max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
    <p className=' text-[#00df9a] font-bold px-20'>GROWING WITH ANALYTICS</p>
    <h1 className='md:text-7xl sml:text-6xl text-4xl font-bold py-4'>
      Grow with data.
    </h1>
    <div className='flex justify-center items-center'>
      <p className=' text-4xl font-bold md:text-5xl sm:text-3xl'>
        Fast, flexible, financing for 
        <Typed className='pl-2'
          strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
            />
      </p>
    </div>
    <p className='md:text-2xl text-xl font-bold text-gray-500 py-4 px-2'>
      Monitor your data analysis to increase revenue for BTB, BTC & SASS platforms
    </p>
    <button className='mx-auto max-w-l md:w-[200px] font-medium text-[#000300]  bg-[#00df9a] border-spacing-2 p-3 rounded-md' > 
    Get Started
    </button>

    </div>
    </div>
  

  )
}

export default Hero