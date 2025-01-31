/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import koin from '../assets/koinx.png'


function Navbar() {

    const [nav,setNav] = useState(false)

    
    const links=[
        {
            id: 1,
            link: 'crpto taxes'
        },
        {
            id: 2,
            link: 'free tools'
        },
        {
            id: 3,
            link: 'resourse center'
        }, 
    ]
    const [actionbutton,setacttionbutton]=useState({
        title:"Get Started",
        link: '/'
    })

  return (
    <div className='flex  items-center  w-[100%] h-20 text-white  bg-white px-4 rounded-b-lg'>
        <img src={koin} alt="koin" className='w-20'/>

    <div className='flex justify-end items-center  w-[100%] h-20 text-white  bg-white px-4 rounded-b-md'>
       
        <ul className='hidden  md:flex'>

            {links.map(({id,link})=>(
                <li 
                key={id}
                className='px-4 cursor-pointer capitalize font-medium text-deepBlue hover:scale-105 duration-200 '>
                    {link}
                </li>
            ))}
        </ul>
        <div>
            <a href={ actionbutton.link } className='px-10 mx-2 py-2 shadow text-white font-bold  text-sm bg-blue-600 rounded-s hidden md:block'>
                    { actionbutton.title }
                </a>
        </div>
        
        <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>         
        
        {nav &&(
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {links.map(({id,link})=>(
                <li 
                key={id}
                className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                    {link}
                </li>
                
            ))}
            </ul> 
        )}

        </div >
    </div>
  )
}

export default Navbar

