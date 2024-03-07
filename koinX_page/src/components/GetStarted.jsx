/* eslint-disable no-unused-vars */
import React from 'react'
import koin8 from '../assets/koin8.png'

function GetStarted() {
  return (
    <div name="about"
    className='w-full h-full md:hidden md:w-2/6 md:ml-5  bg-blue-600 rounded-lg my-5'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className=''>
            <p className='text-2xl font-bold flex justify-center text-white'>Get Started with KoinX</p>
            <p className='text-2xl font-bold flex justify-center text-white'>for Free</p>
        </div>
        <div className='mt-6'>
            <p className='text-white flex justify-center'>with our range of features that you can equip for</p>
            <p className='text-white flex justify-center'>free, KoinX allows you to be more educated and </p>
            <p className='text-white flex justify-center'>aware of your tax reports.</p>
        </div>
        <div className='flex justify-center'>
            <img src={koin8} alt="" className='rounded-xl'/>
        </div>
        <div className='flex justify-center mt-7'>
            <h1 className='text-3xl text-black font-bold bg-white rounded-lg p-6'>Get Started for FREE <i className="fa-solid fa-arrow-right pl-2"></i></h1>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
