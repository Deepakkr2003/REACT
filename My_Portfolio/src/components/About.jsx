/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

function About() {
  return (
    <div 
        name="about"
        className='w-full h-full bg-gradient-to-b from-violet-500 to-orange-300 text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <h1 className='text-2xl font-semibold'>Full Stack Developer</h1>
        <p className='text-xl mt-10'>
            As a Full Stack Developer, I specialize in bridging the gap between design and functionality, bringing concepts to life with clean, efficient code. Whether it's crafting intuitive user interfaces, architecting scalable backend systems, or optimizing database performance, I approach each project with a blend of creativity and technical expertise. From concept to deployment, I'm committed to delivering high-quality solutions that exceed expectations.
        </p>
        <br/>
        <p className='text-xl'>
            I believe in the power of collaboration and continuous learning. I thrive in dynamic, cross-functional teams where diverse perspectives drive innovation. By staying abreast of emerging technologies and best practices, I ensure that my skills remain sharp and my solutions stay ahead of the curve. I'm always eager to tackle new challenges and explore innovative ways to elevate the digital landscape.
        </p>
        <br/>
        <p className='text-xl'>
            In an ever-evolving digital landscape, I see boundless opportunities to innovate and inspire. Whether it's revolutionizing e-commerce, streamlining business operations, or empowering communities through technology, I'm driven by a vision of a more connected, accessible world. As a Full Stack Developer, I'm committed to pushing the boundaries of what's possible and shaping the future of digital experiences.
        </p>
      </div>
    </div>
  )
}

export default About
