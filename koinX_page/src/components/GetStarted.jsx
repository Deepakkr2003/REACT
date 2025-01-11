/* eslint-disable no-unused-vars */
import React from 'react'
import koin8 from '../assets/koin8.png'

function GetStarted() {
  return (
    <div className='px-3 lg:px-0'>
      <div name="about"
    className='w-full h-full lg:hidden lg:w-2/6 lg:ml-5  bg-blue-600 rounded-lg my-5'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        
        <div className='flex justify-center'>
            <img src={koin8} alt="" className='rounded-xl'/>
        </div>
        <div className=''>
            <p className='text-xl font-bold flex justify-center text-white'>Get Started with KoinX for Free</p>
            
        </div>
        <div className='mt-6'>
            <p className='text-white flex justify-center text-sm'>with our range of features that you can equip for</p>
            <p className='text-white flex justify-center text-sm'>free, KoinX allows you to be more educated and </p>
            <p className='text-white flex justify-center text-sm'>aware of your tax reports.</p>
        </div>
        <div className='flex justify-center mt-7'>
            <h1 className='text-xl text-black font-bold bg-white rounded-lg p-6 whitespace-nowrap'>Get Started for FREE <i className="fa-solid fa-arrow-right pl-2"></i></h1>
        </div>
      </div>
    </div>
    </div>
  )
}

export default GetStarted
