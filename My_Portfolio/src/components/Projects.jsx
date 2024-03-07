/* eslint-disable no-unused-vars */
import React from 'react'
import snake from '../assests/Project/snake.jpg'
import bmi from '../assests/Project/bmi.png'
import calc from '../assests/Project/calc.jpg'
import clock from '../assests/Project/clock.png'
import car from '../assests/Project/car.jpg'
import currency from '../assests/Project/currency.jpg'
import password from '../assests/Project/password.png'
import todo from '../assests/Project/todo.png'
import webpage from '../assests/Project/webpage.png'

function Projects() {
    const projects=[
        {
           id:1, 
           src:snake,
        } ,  
        {
           id:2, 
           src:bmi,
        } ,  
        {
           id:3, 
           src:calc,
        } ,  
        {
           id:4, 
           src:clock,
        } ,  
        {
           id:5, 
           src:car,
        } ,  
        {
           id:6, 
           src:currency,
        } ,  
        {
           id:7, 
           src:password,
        } ,  
        {
           id:8, 
           src:todo,
        } ,  
        {
           id:9, 
           src:snake,
        } ,  
        {
           id:10, 
           src:webpage,
        } ,  
    ]

  return (
    <div name='project' className='bg-gradient-to-b from-gray-600 to-amber-100 w-full text-white md:h-full '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 '>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 ' >Projects</p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>


        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 md:h-full '>
        {projects.map(({id,src})=>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img 
                    src={src} 
                    alt="" 
                    className='rounded-md duration-200 hover:scale-105'
                />
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
        ))}

        </div>
      </div>
    </div>
  )
}

export default Projects
