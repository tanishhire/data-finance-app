import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
    <div className='w-full bg-white py-[10rem] px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 px-4'>
        <div className='w-full shadow-xl rounded-lg flex flex-col py-4 my-4 hover:scale-105 duration-300'>
            <img src={Single} alt='/' className='w-20 mx-auto bg-white'/>
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-4xl font-bold pb-2'>$149</p>
              <div>
                <p className='text-center mt-2'>500GB storage</p>
                <p className='text-center pt-2'>1 Granted User</p>
                <p className='text-center pt-2'>Send upto 2 GB</p>
              </div>
              <button className='mt-8 mx-auto max-w-l md:w-[200px] font-medium text-[#00df9a]  bg-[#000300] border-spacing-2 p-3 rounded-md'>Start Trail</button>
        </div> 
        <div className='w-full shadow-xl rounded-lg flex flex-col py-4 my-4 hover:scale-105 duration-300'>
            <img src={Double} alt='/' className='w-20 mx-auto bg-white'/>
            <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
            <p className='text-center text-4xl font-bold pb-2'>$249</p>
              <div>
                <p className='text-center mt-2'>1TB storage</p>
                <p className='text-center pt-2'>2 Granted User</p>
                <p className='text-center pt-2'>Send upto 10 GB</p>
              </div>
              <button className='mt-8 mx-auto max-w-l md:w-[200px] font-medium text-[#00df9a]  bg-[#000300] border-spacing-2 p-3 rounded-md'>Start Trail</button>
        </div> 
        <div className='w-full shadow-xl rounded-lg flex flex-col py-4 my-4 hover:scale-105 duration-300'>
            <img src={Triple} alt='/' className='w-20 mx-auto bg-white'/>
            <h2 className='text-2xl font-bold text-center py-8'>Team</h2>
            <p className='text-center text-4xl font-bold pb-2'>$499</p>
              <div>
                <p className='text-center mt-2'>5TB storage</p>
                <p className='text-center pt-2'>Unlimited Granted User</p>
                <p className='text-center pt-2'>Send upto 100 GB</p>
              </div>
              <button className='mt-8 mx-auto max-w-l md:w-[200px] font-medium text-[#00df9a]  bg-[#000300] border-spacing-2 p-3 rounded-md'>Start Trail</button>
        </div> 
        

      </div>
    </div>
  )
}

export default Cards