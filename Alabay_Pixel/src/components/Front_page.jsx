// src/Front_page.js
import React from 'react';
import "../index.css"; // Ensure your Tailwind CSS is imported
import bg from '../assets/Alabay Assets/bg.png';
import dog from '../assets/Alabay Assets/dog1.png';

function Front_page() {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div className="fixed inset-0 h-screen w-screen z-0">
        <img src={bg} alt="" className="h-full w-full object-cover rounded-xl" />
        
        <div className="absolute inset-0 flex flex-col items-center">
          <span className="gradient-text text-8xl font-cheeseburga mt-2">
            Welcome to alabay world
          </span>

          <div className='w-full h-40 bg-[#181C27] p-6 mt-[395px]'>
            <p className='font-cheeseburga text-white text-4xl flex items-center justify-center'>
              where the <span className='custom-gradient mx-3'> legendary Central Asian Shepherd Dog </span> meets a new-age adventure.
            </p>
            <p className='font-cheeseburga text-white text-4xl flex items-center justify-center'>
              <span className='custom-gradient mx-3'>Join us</span> in celebrating the 
              <span className='custom-gradient ml-3'>strength</span>, 
              <span className='custom-gradient ml-3'>loyalty</span>, and 
              <span className='custom-gradient mx-3'>heritage</span> of the Alabay 
            </p>
            <p className='font-cheeseburga text-white text-4xl flex items-center justify-center'>breed.</p>
          </div>
        </div>
      </div>

      {/* History section positioned at the bottom */}
      <div className='absolute bottom-0 left-0 right-0 flex items-center justify-center'>
        <div className='w-[1420px] h-[700px] custom-color rounded-t-2xl flex flex-col items-center'>
          <div className='w-[180px] mt-4 h-4 bg-[#FFF6A1] rounded-xl'></div>
          
        </div>
      </div>
    </div>
  );
}

export default Front_page;
