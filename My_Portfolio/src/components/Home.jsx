/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import MyImage from '../assests/my_pic.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function Home() {

  const el=useRef(null);

  useEffect(()=>{
    const typed = new Typed(el.current,{
      strings:["Fronted Developer" , "Backend Developer" , "Competitive Programmer"],
      startDelay:100,
      typeSpeed:100,
      backSpeed:10,
      backDelay:100,
      loop:true,
    })
    return()=>{
      typed.destroy();
    }
  },[]);

  return (
    <div name="home" className='h-full w-full bg-gradient-to-b from-purple-300    to-green-100 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row pb-4'>
        <div className='flex flex-col justify-center h-full'>
            <div>
            <h2 className='text-2xl mt-24 sm:text-4xl font-semibold text-gray-600 sm:mt-20'>Hi, I am</h2>
            <h2 className='text-4xl  sm:text-6xl font-semibold text-gray-600 sm:mt-4'>Deepak Kumar</h2>
            <h2 className='text-2xl sm:text-4xl font-semibold text-gray-600 sm:mt-4'>I'm  <span className='font-bold underline' ref={el}></span></h2>
            </div>
            <p className='text-gray-500 pt-8 max-w-md text-xl'>
            Welcome to my profile! I'm Deepak Kumar, a passionate Full Stack Developer with a knack for crafting seamless digital experiences. With over 1year of hands-on experience in the realm of web development, I thrive on the dynamic challenges that come with building robust, scalable, and user-friendly applications.
            </p>
            <br />
            <p className='text-gray-500 pb-4 max-w-md text-xl'>My journey into the world of programming began with a deep curiosity and a love for problem-solving. From my earliest encounters with HTML and CSS, I was fascinated by the power of coding to transform ideas into tangible, interactive solutions. Over the years, I've honed my skills across the entire stack, from front-end technologies like JavaScript, React, and Angular, to back-end frameworks such as Node.js, Express.</p>


            <div className='flex text-4xl space-x-5 my-4 text-white lg:hidden'>
              <div className='bg-gray-500 rounded-full p-2 cursor-pointer '><a href="https://www.linkedin.com/in/deepak-kumar-544152247/" target="_blank" rel='noreferrer'><FaLinkedin/></a> </div>
              <div className='bg-gray-500 rounded-full p-2 cursor-pointer '><a href="https://github.com/Deepakkr2003" target="_blank" rel='noreferrer'><FaGithub/></a> </div>
              <div className='bg-gray-500 rounded-full p-2 cursor-pointer '><a href="mailto:foo@gmail.com" target="_blank" rel='noreferrer'><HiOutlineMail/></a> </div>
              <div className='bg-gray-500 rounded-full p-2 cursor-pointer '><a href="/my_resume.pdf" target="_blank" rel='noreferrer' download={true}><BsFillPersonLinesFill/></a> </div>
            </div>

            <div>
                <Link to="project" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Projects
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={25} className='ml-1'/>
                    </span>
                </Link>
            </div>

            
        </div>
        <div className=''>
            <img 
            src={MyImage} 
            alt="my profile" 
            className='rounded-full mx-auto w-2/3 md:w-full sm:h-80 sm:w-60 '
            />
        </div>

      </div>
    </div>
  )
}

export default Home
