import React from 'react';
import logo from './logo.png'; 
import xyz from './xyz.png'
import pqr from './pqr.png'
import prize from './prize.png'
import './App.css';
import { FaFacebook } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";


import { TbWorld } from "react-icons/tb";

function App() {
  return (
    <div className='bg-gradient-to-t from-yellow-200 ...'>
      <div className='flex justify-center items-center '>
        <img src={logo} alt="Logo" className=' w-64 h-30 sm:w-80 h-auto'/> 
      </div>
      <div className='flex flex-col justify-between  lg:flex-row items-center'>
        <div>
          <img src={prize} alt='prize' className='h-full w-3/4'/>
        </div>
        <div className='mr-8 mt-4 md:ml-5'>
          <h3 className='font-bold'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
            <li className='pl-5'>
            C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
            </li>
            <li className='pl-5'>
            C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
            </li>
            <img src={xyz} alt='xyz' className='w-full h-full '/>
          <p >
          Government of India has awarded the <span className='font-bold'>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <h2 className='flex justify-center items-center mt-10 font-semibold'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </h2>
      <div className='flex justify-center items-center'>
        <img src={pqr} alt='pqr' className='w-full md:w-3/4 h-auto   '/>
      </div>
      <h4 className='flex justify-center items-center mt-2 font-medium'>
      Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
      </h4>
      <h3 className='flex justify-center items-center border-t-2 border-red-600 font-bold mt-3'>
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </h3>
      <div className='text-center'>
        <h1 className='mt-4 font-medium xl:flex xl:justify-center xl:items-center'>
        CHEMICALS & PROCESS <span className='text-red-600'>|</span> POWER WATER & WASTE WATER <span className='text-red-600'>|</span> OILS & GAS <span className='text-red-600'>|</span> PHARMA SUGARS & DISTILLERIES <span className='text-red-600'>|</span> PAPER & PULP <span className='text-red-600'>|</span> MARINE & DEFENCE <span className='text-red-600'>|</span> METAL & MINING <span className='text-red-600'>|</span> FOOD & BEVERAGE <span className='text-red-600'>|</span></h1>
        <h1 className='font-medium lg:flex lg:justify-center lg:items-center'> PETROCHEMICAL & REFINERIES <span className='text-red-600'>|</span> SOLAR <span className='text-red-600'>|</span> BUILDING <span className='text-red-600'>|</span> HVAC FIRE FIGHTING <span className='text-red-600'>|</span> AGRICULTURE & RESIDENTIAL
        </h1>
      </div>
      <footer className='bg-red-500 flex flex-col md:flex-row justify-between m-5 p-5'>
        <div>
          <p className='text-white mt-5 md:mt-0'>
          <BsTelephoneFill />
            Toll Free 1800 200 1234
          </p>
        </div>
        <div>
       
          <span className='text-white mt-5 md:mt-0'>
            <FaFacebook/>www.faceboo.com/cripumps
          </span>
        </div>
        <div>
          <p className='text-white  md:mt-0'>
            <TbWorld/>
            www.crigroups.com
          </p>
        </div>
      </footer>
      
    </div>
  );
}

export default App;