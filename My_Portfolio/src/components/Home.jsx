/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import MyImage from '../assests/my_pic.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'

function Home() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-pink-400    to-green-200'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white sm:mt-20'>I'm a Full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>
                I have 1 year of experience building and desgning software.
                Currently, I love to work on web application using technologies like React, Tailwind, Next JS and Javascript.
            </p>

            <div>
                <Link to="project" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Projects
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={25} className='ml-1'/>
                    </span>
                </Link>
            </div>
        </div>
        <div>
            <img 
            src={MyImage} 
            alt="my profile" 
            className='rounded-2xl mx-auto w-2/3 md:w-full sm:h-80 sm:w-60'
            />
        </div>
      </div>
    </div>
  )
}

export default Home
