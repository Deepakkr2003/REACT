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
        <p className='text-xl mt-10'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis odio reiciendis voluptates, libero, accusamus aliquam cumque error corrupti, quas voluptatum atque incidunt deserunt eum? Non accusantium minima nam, ut asperiores laudantium doloribus aliquam molestias facere esse. Magnam numquam laudantium, quasi rem ullam, velit culpa recusandae delectus soluta deleniti ipsa optio.
        </p>
        <br/>
        <p className='text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero expedita doloribus labore aut quod soluta reprehenderit, cum quasi minima veniam enim, molestias corrupti consequuntur, saepe fuga dolorum id porro.
        </p>
        <br/>
        <p className='text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero expedita doloribus labore aut quod soluta reprehenderit, cum quasi minima veniam enim, molestias corrupti consequuntur, saepe fuga dolorum id porro.
        </p>
      </div>
    </div>
  )
}

export default About
