/* eslint-disable no-unused-vars */
import React from 'react'
import css from '../assests/css.png'
import github from '../assests/github.png'
import graphql from '../assests/graphql.png'
import html from '../assests/html.png'
import js from '../assests/javascript.png'
import react from '../assests/react.png'
import nextjs from '../assests/nextjs.png'
import node from '../assests/node.png'
import tailwind from '../assests/tailwind.png'


function Skills() {

  const tech=[
    {
       id:1,
       src:html,
       title:'HTML',
       style:'shadow-orange-500'
    },
    {
       id:2,
       src:css,
       title:'CSS',
       style:'shadow-blue-500'
    },
    {
       id:3,
       src:js,
       title:'Javascript',
       style:'shadow-yellow-500'
    },
    {
       id:4,
       src:react,
       title:'React',
       style:'shadow-blue-500'
    },
    {
       id:5,
       src:tailwind,
       title:'Tailwind',
       style:'shadow-sky-400'
    },
    {
       id:6,
       src:nextjs,
       title:'Next JS',
       style:'shadow-white'
    },
    {
       id:7,
       src:graphql,
       title:'Graphql',
       style:'shadow-pink-400'
    },
    {
       id:8,
       src:github,
       title:'Github',
       style:'shadow-gray-500'
    },
    {
       id:9,
       src:node,
       title:'Node',
       style:'shadow-green-300'
    },
    
  ]

  return (
    <div name='skills' className='bg-gradient-to-b
    from-gray-800 to-black w-hull h-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-white p-2 inline'>My Skills</p>
          <p className='py-6 text-2xl font-semibold'>I love these Technologies</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>


          {
            tech.map(({id,src,title,style})=>(
              <div 
              key={id} 
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
            <img src={src} alt="" className='w-20 mx-auto'/>
            <p className='mt-4 text-gray-400 font-bold'>{title}</p>
          </div>
            ))
          }

          
        </div>

      </div>
    </div>
  )
}

export default Skills

