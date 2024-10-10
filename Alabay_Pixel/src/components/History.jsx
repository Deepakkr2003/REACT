// src/History.js
import React from 'react';
import dog from '../assets/Alabay Assets/dog1.png';

function History() {
  return (
    <div className=' flex items-center justify-center'> {/* Ensure there's enough margin */}
        <div className='w-[1420px] h-[600px] custom-color rounded-t-2xl flex flex-col items-center'>
            <div className='w-[180px] mt-4 h-4 bg-[#FFF6A1] rounded-xl'></div>
            <img src={dog} alt="" className='w-[400px] h-[400px]' />
        </div>
    </div>
  );
}

export default History;
