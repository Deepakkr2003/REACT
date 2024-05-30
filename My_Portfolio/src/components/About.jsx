/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

function About() {
  return (
    <div 
        name="about"
        className='w-full h-full bg-gradient-to-b from-custom-s1 to-custom-s2 text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-white text-white'>About</p>
        </div>
        <h1 className='text-2xl font-semibold text-white'>Full Stack Developer</h1>
        <p className='text-xl mt-10 text-gray-400 font-medium'>
            As a Full Stack Developer, I specialize in bridging the gap between design and functionality, bringing concepts to life with clean, efficient code. Whether it's crafting intuitive user interfaces, architecting scalable backend systems, or optimizing database performance, I approach each project with a blend of creativity and technical expertise. From concept to deployment, I'm committed to delivering high-quality solutions that exceed expectations.
        </p>
        <br/>
        <p className='text-xl text-gray-400 mb-6 font-medium'>
            I believe in the power of collaboration and continuous learning. I thrive in dynamic, cross-functional teams where diverse perspectives drive innovation. By staying abreast of emerging technologies and best practices, I ensure that my skills remain sharp and my solutions stay ahead of the curve. I'm always eager to tackle new challenges and explore innovative ways to elevate the digital landscape.
        </p>
        
      </div>
    </div>
  )
}

export default About
