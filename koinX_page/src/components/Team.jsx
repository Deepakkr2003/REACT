/* eslint-disable no-unused-vars */
import React from 'react'
import koin4 from '../assets/koin4.png'
import koin5 from '../assets/koin5.png'
import koin6 from '../assets/koin6.png'

function Team() {
  return (
    <div className='w-full h-full md:w-4/6 md:ml-5 bg-white rounded-lg my-5'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <h2 className='font-bold text-3xl pl-5'>Team</h2>
        <p className='px-5 pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis aspernatur sint nihil mollitia! Praesentium nemo nobis autem dolore illo aperiam magnam quibusdam fugit fuga dolorem, incidunt neque magni? Consequuntur, cupiditate?</p>
      </div>
      <div className='bg-sky-100  md:flex md:justify-start rounded-xl mt-4 max-w-screen-lg p-4 mx-auto   w-full h-full flex flex-col justify-center items-center md:flex-row'>
        <div className='md:w-4/5 py-4 px-1 w-2/6 flex flex-col justify-center items-center'>
          <img src={koin4} alt="koin4" className='rounded-xl '/>
          <h1 className='font-bold'>John Smith</h1>
          <p>Designation here</p>
        </div>
        <div className='pl-6 flex justify-center items-center'>
          <p>
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit fermentum ut libero ut libero hendreit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis loareet nec neque sed pellentesque viverra. Consectetur proin amet ut id faciisi quis consectetur. Tellus gravida ulticies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>
        
      </div>
      <div className='bg-sky-100  md:flex md:justify-start rounded-xl mt-4 max-w-screen-lg p-4 mx-auto   w-full h-full flex flex-col justify-center items-center md:flex-row'>
        <div className='md:w-4/5 py-4 px-1 w-2/6 flex flex-col justify-center items-center'>
          <img src={koin5} alt="koin5" className='rounded-xl'/>
          <h1 className='font-bold'>John Smith</h1>
          <p>Designation here</p>
        </div>
        <div className='pl-6 flex justify-center items-center'>
          <p>
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit fermentum ut libero ut libero hendreit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis loareet nec neque sed pellentesque viverra. Consectetur proin amet ut id faciisi quis consectetur. Tellus gravida ulticies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>
        
      </div>
      <div className='bg-sky-100  md:flex md:justify-start rounded-xl mt-4 max-w-screen-lg p-4 mx-auto   w-full h-full flex flex-col justify-center items-center md:flex-row'>
        <div className='md:w-4/5 py-4 px-1 w-2/6 flex flex-col justify-center items-center'>
          <img src={koin6} alt="koin6" className='rounded-xl'/>
          <h1 className='font-bold'>John Smith</h1>
          <p>Designation here</p>
        </div>
        <div className='pl-6 flex justify-center items-center'>
          <p>
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit fermentum ut libero ut libero hendreit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis loareet nec neque sed pellentesque viverra. Consectetur proin amet ut id faciisi quis consectetur. Tellus gravida ulticies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default Team
