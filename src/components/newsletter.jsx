import React from 'react'

const Newsletter = () => {
  return (
    <div className='text-white bg-[#000300] w-full py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 px-4'>
          <h1 className='text-2xl sm:text-3xl py-2 md:text-4xl justify-between  font-bold '>
            Want tips & tricks to optimize your flow?
          </h1> 
            <p className='text-md md:text-xl  pt-2'>
              Sign up to our newsletter and stay up to date.
            </p>
        </div>
          <div className='my-4'>
            <div className='px-4 '>
                <input type="email" placeholder='Enter email' className='flex w-full p-3  rounded-md'></input>
                <button className='mt-8 mx-auto max-w-l md:w-[200px] font-medium text-[#00030]  bg-[#00df9a] border-spacing-2 p-3 rounded-md' > 
                 Notify me
                </button>
                <p className='pt-4'>We care bout the privacy protection of your data. Read our <button className='text-[#00df9a] underline underline-offset-auto'>Privacy Policy</button></p>
            </div>
          </div>
    </div>
    </div>
  )
}

export default Newsletter