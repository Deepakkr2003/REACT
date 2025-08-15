/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import MyImage from '../assests/my_pic.jpeg'
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const colors = [
  'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
  'bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500',
  'bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500'
];

function Home() {

  const el=useRef(null);

  useEffect(()=>{
    const typed = new Typed(el.current,{
      strings:["Frontend Developer" , "Backend Developer" ],
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

  const lastMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: currentX, clientY: currentY } = e;
      const { x: lastX, y: lastY } = lastMousePosition.current;
      const deltaX = currentX - lastX;
      const deltaY = currentY - lastY;

      lastMousePosition.current = { x: currentX, y: currentY };

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      const colorClass = colors[Math.floor(Math.random() * colors.length)];

      const blast = document.createElement('div');
      blast.className = `color-blast ${colorClass}`;
      blast.style.width = '100px';
      blast.style.height = '100px';
      blast.style.left = `${currentX}px`;
      blast.style.top = `${currentY + window.scrollY}px`; // Adjust for scrolling
      blast.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      document.body.appendChild(blast);

      blast.addEventListener('animationend', () => {
        blast.remove();
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);




  return (
    <div name="home" className='h-full w-full bg-gradient-to-b from-slate-900 via-slate-800   to-slate-700 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row pb-4'>
        <div className='flex flex-col justify-center h-full'>
            <div>
            <h2 className='text-2xl mt-24 sm:text-4xl font-semibold text-white sm:mt-20'>Hi, I am</h2>
            <h2 className='text-4xl  sm:text-6xl font-semibold text-white sm:mt-4'>Deepak Kumar</h2>
            <h2 className='text-2xl sm:text-4xl font-semibold text-white sm:mt-4'>I'm  <span className='font-bold underline' ref={el}></span></h2>
            </div>
            <p className='text-gray-400 font-medium pt-8 max-w-md text-xl mb-4'>
                Welcome to my profile! I’m Deepak Kumar, a passionate MERN Stack Developer specializing in clean code, pixel-perfect designs, and interactive web animations. Skilled in HTML, CSS, JavaScript, React.js, Redux, Node.js, Express.js, and Tailwind CSS.            
            </p>
           


            <div className='flex text-4xl space-x-5 my-4 text-white lg:hidden'>
              <div className='bg-gray-500 rounded-full p-2 cursor-pointer '><a href="https://www.linkedin.com/in/deepak-kumar-544152247/" target="_blank" rel='noreferrer'><FaLinkedin/></a> </div>
              <div className='bg-gray-500 rounded-full p-2 cursor-pointer '><a href="https://github.com/Deepakkr2003" target="_blank" rel='noreferrer'><FaGithub/></a> </div>
              <div className='bg-gray-500 rounded-full p-2 cursor-pointer '><a href="mailto:foo@gmail.com" target="_blank" rel='noreferrer'><HiOutlineMail/></a> </div>
              <div className='bg-gray-500 rounded-full p-2 cursor-pointer '><a href="/Deepak_Kumar.pdf" target="_blank" rel='noreferrer' download={true}><BsFillPersonLinesFill/></a> </div>
            </div>

            <div>
                <Link to="project" smooth duration={500} className='group text-white font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
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
