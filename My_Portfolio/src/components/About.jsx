/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

function About() {
  return (
    <div 
      name="about"
      className='w-full h-full bg-gradient-to-b from-gray-900 to-slate-800 text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-white text-white'>About</p>
        </div>
        <h1 className='text-2xl font-semibold text-white'>MERN Stack Developer</h1>
        <p className='text-xl mt-10 text-gray-400 font-medium'>
          As a MERN Stack Developer, I specialize in bridging the gap between design and functionality, transforming ideas into responsive, user-friendly, and high-performance applications. Whether it’s crafting intuitive front-end interfaces with React and Tailwind CSS, building scalable backend systems with Node.js and Express.js, or ensuring efficient database management with MongoDB, I approach every project with precision and creativity.
        </p>
        <br/>
        <p className='text-xl text-gray-400 mb-6 font-medium'>
          From concept to deployment, I’m dedicated to delivering clean, maintainable code and impactful digital experiences. I value collaboration, thrive in cross-functional teams, and constantly explore emerging technologies to keep my skills sharp and my solutions innovative. Always ready for new challenges, I aim to create applications that not only meet expectations but exceed them.
        </p>

        {/* New section for contact information */}
        <div className='mt-8 text-white'>
          <h2 className='text-2xl font-semibold mb-4'>Contact Information</h2>
          <div className='text-lg font-medium text-gray-400'>
            <p className='mb-2'>
              <span className='font-bold text-white'>Email:</span> dk1407610@gmail.com
            </p>
            <p className='mb-2'>
              <span className='font-bold text-white'>Phone:</span> +919693365801
            </p>
            <p>
              <span className='font-bold text-white'>Location:</span> Lakhisarai, Bihar
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About
