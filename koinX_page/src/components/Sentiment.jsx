/* eslint-disable no-unused-vars */
import React from 'react'
import { BiSolidInfoCircle } from "react-icons/bi";

function Sentiment() {
  return (
    <div className='px-3 lg:px-0'>
        <div name="sentiment "
    className='w-full h-full lg:w-[68%] lg:ml-5 bg-white rounded-lg my-5 '>
      <div className='max-w-screen-lg  mx-auto p-4 w-full h-full '>
        <div className='pb-3'> 
        <h1 className=' font-semibold  text-black text-2xl'>Sentiment</h1>
        <h2 className='text-gray-500 font-semibold flex text-xl'>Key Events <BiSolidInfoCircle size={18} className='m-1'/></h2>
        </div>
        <div className='   grid grid-cols-1  md:grid-cols-2 '>
            <div className=' flex  mx-auto px-6 bg-blue-100 mt-2 rounded-lg md:mx-4 pb-6'>
                <i className=" mt-6 fa-solid fa-newspaper text-2xl text-white bg-blue-500 rounded-full p-2 h-12"></i>
                <div>
                    <p className='mt-4 ml-2 font-semibold'>lorem ipsum dolor sit amet consectetur.Dui vel <br />
                        quis diagnissim mattis enim ticidunt.
                    </p>
                    <p className='mt-2 ml-2'>
                        lorem ipsum dolor sit amet consectetur.Ac phasellus
                        risus est faucibus metus auis. Amet saplen quam
                        viverra adipiscing condimentum. Ac consectetur state et pretium in a bibendum in.sed vitae sit nisi viverra nataoque lacina libero enim
                    </p>
                </div>
            </div>
            <div className=' flex mx-auto px-6 bg-green-100 mt-2  rounded-lg pb-6'>
                <i className="mt-6 fa-solid fa-arrow-trend-up text-2xl text-white bg-green-500 rounded-full p-2 h-12"></i>
                <div>
                    <p className='mt-4 ml-2 font-semibold'>lorem ipsum dolor sit amet consectetur.Dui vel <br />
                        quis diagnissim mattis enim ticidunt.
                    </p>
                    <p className='mt-2 ml-2'>
                        lorem ipsum dolor sit amet consectetur.Ac phasellus
                        risus est faucibus metus auis. Amet saplen quam
                        viverra adipiscing condimentum. Ac consectetur state et pretium in a bibendum in.sed vitae sit nisi viverra nataoque in a adipisinic metus quis del
                    </p>
                </div>
            </div>
        </div>

        <div>
            <h2 className='text-gray-500 font-semibold flex pt-3 text-xl'>Analyst Estimates<BiSolidInfoCircle size={18} className='m-1'/></h2>
        </div>

        <div className='flex justify-start mt-6'>
  <div className='flex justify-center items-center'>
    <div className='text-4xl text-green-400 bg-green-100 rounded-full p-14 h-20 w-20 md:mt-4 md:w-40 md:h-40 flex justify-center items-center'>
        <div>76%</div>
    </div>
  </div>
  <div className='md:mt-10 md:ml-10 ml-2'>
    <div className='flex items-center'>
      <p className='text-gray-500 text-xl font-semibold pr-4 md:pr-10'>Buy</p>
      <div className='flex-grow h-2 bg-green-500 sm:pr-16 md:pr-28 lg:pr-48 rounded-l-xl'></div>
      <div className='flex-grow h-2 bg-green-500 w-20  md:36 rounded-r-xl '></div>
      <div className='ml-2'>76%</div>
    </div>
    <div className='flex items-center'>
      <p className='text-gray-500 text-xl font-semibold my-4 pr-2 md:pr-7'>Hold</p>
      <div className='flex h-2 bg-gray-300 w-4 md:w-8 rounded-xl'></div>
      <div className='ml-2'>8%</div>
    </div>
    <div className='flex items-center'>
      <p className='text-gray-500 text-xl font-semibold pr-5 md:pr-10'>Sell</p>
      <div className='flex h-2 bg-red-500 w-8 md:w-16 rounded-xl'></div>
      <div className='ml-2'>16%</div>
    </div>
  </div>
</div>






      </div>
    </div>
    </div>
  )
}

export default Sentiment
