/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { BiSolidInfoCircle } from "react-icons/bi";

function Performance() {
  return (
    <div className="w-full px-3 lg:px-0">
    {/* Desktop Navigation */}
    <div className="hidden lg:flex justify-evenly w-full md:w-4/6 md:ml-5 border-b-2 border-gray-300">
        <div>
            <p className="text-blue-700 font-semibold border-b-4 border-solid border-blue-500">Overview</p>
        </div>
        <div>
            <p>Fundamentals</p>
        </div>
        <div>
            <p>News Insights</p>
        </div>
        <div>
            <p>Sentiments</p>
        </div>
        <div>
            <p>Team</p>
        </div>
        <div>
            <p>Technicals</p>
        </div>
        <div>
            <p>Tokenomics</p>
        </div>
    </div>

    {/* Mobile Navigation */}
    <div className="flex lg:hidden justify-evenly w-full border-b-2 border-gray-300">
        <div>
            <p className="text-blue-700 font-semibold border-b-4 border-solid border-blue-500">Overview</p>
        </div>
        <div>
            <p>News Insights</p>
        </div>
        <div>
            <p>Sentiments</p>
        </div>
    </div>


    <div name="about"
    className='w-full h-full lg:w-[68%] lg:ml-5 bg-white rounded-md my-5 '>
        <div className='max-w-screen-md p-4 lg:ml-4 flex flex-col justify-center w-full h-full'>
        <div>
    <h1 className='text-2xl font-semibold'>Performance</h1>
    <div className='mt-4 flex justify-start'>
        <div>
            <p className='text-gray-400'>Today's Low </p>
            <p>46,930.22</p>
        </div>

        <div className="flex-grow h-2 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 mx-3 mt-3 rounded-xl ">
            <div className="mt-2">
                <div className="flex justify-end pr-6 md:pr-28">
                    <i className="fa-solid fa-caret-up"></i>
                </div>
                <div className="text-right pr-6 lg:pr-20">$48,637.83</div>
            </div>    
        </div>

        <div>
            <p className='text-gray-400'>Today's High </p>
            <p>49,343.83</p>
        </div>
    </div>
    <div className='mt-6 flex justify-start'>
        <div>
            <p className='text-gray-400'>52W Low </p>
            <p>16,930.22</p>
        </div>
        
        <div className="w-full md:w-full flex items-center mx-8 mt-3">
            <div className="flex-grow h-2 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-xl"></div>
        </div>

        <div>
            <p className='text-gray-400 whitespace-nowrap'>52W High </p>
            <p>49,743.83</p>
        </div>
    </div>


                <div>
                    <h2 className='text-gray-500 font-semibold flex pt-8 text-xl'>Fundamentals<BiSolidInfoCircle size={18} className='m-2'/></h2>
                </div>    
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:flex justify-start'>
                    <div className=''>
                        <div className='flex justify-between border-b-2 border-gray-400 my-8'>
                            <div className=' mb-7 whitespace-nowrap text-gray-500'>Bitcoin Price</div>
                            <div className=' whitespace-nowrap'>$16,815.46</div>
                        </div>
                        <div className='flex justify-between border-b-2 border-gray-400 '>
                            <div className='  text-gray-500 mb-7 whitespace-nowrap'>24h Low / 24h High</div>
                            <div className='xl:ml-20 whitespace-nowrap'>$16,382.07 / $16,874.12</div>
                        </div>
                        <div className='flex justify-between mt-8 border-b-2 border-gray-400'>
                            <div className='  text-gray-500 mb-7 whitespace-nowrap'>7d Low / 7d High</div>
                            <div className=' whitespace-nowrap'>$16,382.07 / $16,874.12</div>
                        </div>
                        <div className='flex justify-between mt-8 border-b-2 border-gray-400'>
                            <div className='  text-gray-500 mb-7 whitespace-nowrap'>trading Volume</div>
                            <div className='whitespace-nowrap '>$23,249,202,782</div>
                        </div>
                        <div className='flex justify-between mt-8 border-b-2 border-gray-400'>
                            <div className='  text-gray-500 mb-7 whitespace-nowrap'>Bitcoin Price</div>
                            <div className=' whitespace-nowrap'>$16,815.46</div>
                        </div>
                    </div>
                    <div className=' lg:ml-16 '>
                        <div className='flex justify-between mt-8 border-b-2 border-gray-400'>
                            <p className='  text-gray-500 mb-7 whitespace-nowrap '>Market Cap</p>
                            <p className=' xl:ml-24 whitespace-nowrap'>$323,507,290,047</p>
                        </div>
                        <div className='flex justify-between mt-8 border-b-2 border-gray-400'>
                            <p className='  text-gray-500 mb-7 whitespace-nowrap'>Market Cap Dominance</p>
                            <p className=' whitespace-nowrap'>38.343%</p>
                        </div>
                        <div className='flex justify-between mt-8 border-b-2 border-gray-400'>
                            <p className='  text-gray-500 mb-7 whitespace-nowrap'>Volume / Market Cap</p>
                            <p className=' whitespace-nowrap'>0.0718</p>
                        </div>
                        <div className='flex justify-between mt-8 border-b-2 border-gray-400'>
                            <p className='  text-gray-500 mb-7 whitespace-nowrap'>All-Time High</p>
                            <div className='xl:ml-40'>
                                <p className='ml-3 text-2xl '>$69,044.77 <span className='text-xl font-semibold text-red-400 whitespace-nowrap'>-75.6</span></p>
                                <p className='whitespace-nowrap'>Nov 10,2021(about 1 year)</p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-8 border-b-2 border-gray-400' >
                            <p className='  text-gray-500 mb-7 whitespace-nowrap'>All-Time Low</p>
                            <div>
                                <p className=' text-2xl'>$67.81 <span className='text-xl font-semibold text-green-500 whitespace-nowrap'>24729.1%</span></p>
                                <p>Jul 06,2013(over 9 year)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Performance
