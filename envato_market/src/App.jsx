/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import img1 from '../src/assets/motionarteffect-img1.png'
import img2 from '../src/assets/motionarteffect-img2.png'
import img3 from '../src/assets/motionarteffect-img3.png'
import img4 from '../src/assets/motionarteffect-img4.png'
import img5 from '../src/assets/motionarteffect-img5.png'
import img6 from '../src/assets/motionarteffect-img6.png'
import img7 from '../src/assets/motionarteffect-img7.png'
import img8 from '../src/assets/motionarteffect-img8.png'
import img9 from '../src/assets/motionarteffect-img9.png'
import img10 from '../src/assets/motionarteffect-img10.png'
import img11 from '../src/assets/motionarteffect-img11.png'
import img12 from '../src/assets/MotionArtEffect-logo.png'
import img13 from '../src/assets/motionarteffect-13.png'
import { GoArrowRight } from "react-icons/go";
import React, { useEffect , useRef } from 'react';



const colors = [
  'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
  'bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500',
  'bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500'
];



function App() {
  const lastMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: currentX, clientY: currentY } = e;
      const { x: lastX, y: lastY } = lastMousePosition.current;
      const deltaX = currentX - lastX;
      const deltaY = currentY - lastY;

      lastMousePosition.current = { x: currentX, y: currentY };

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      const colorClass = colors[Math.floor(Math.random() * colors.length)];

      const blast = document.createElement('div');
      blast.className = `color-blast ${colorClass}`;
      blast.style.width = '100px';
      blast.style.height = '100px';
      blast.style.left = `${currentX}px`;
      blast.style.top = `${currentY + window.scrollY}px`; // Adjust for scrolling
      blast.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      document.body.appendChild(blast);

      blast.addEventListener('animationend', () => {
        blast.remove();
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  

  return (
<>
    

    <div className=" h-full w-full bg-custom-bg">
      <div className='fixed w-screen top-0'>
          <div className=' bg-custom-dark  py-2 flex justify-between lg:px-4'>
            <div className='flex ml-4 cursor-pointer'>
              <img src={img2} alt="" className='w-4 h-6 mt-2'/>
              <h1 className='text-2xl font-bold text-white '>envato </h1>
              <h1 className='text-green-500 text-2xl font-thin'>market</h1>
            </div>
            <div className='bg-parrot-green w-24 h-10 rounded-lg flex justify-center items-center mr-4 cursor-pointer '>
              <h1 className='text-white'>Buy now</h1>
            </div>
          </div>
      </div>



      <div className='flex justify-between lg:mx-36 mt-12'>
        <div className='mt-12 cursor-pointer'><img src={img12} alt="" /></div>
        <div className='hidden lg:block bg-white w-48 h-12 rounded-lg pt-2 pl-8 text-xl mt-12 cursor-pointer'>Purchase Now</div>
      </div>


      <div className='grid grid-cols-1 lg:grid-cols-2  mx-6 lg:mx-36 mt-24'>
        <div>
          <h1 className='gradient-text text-xl font-semibold text-center lg:text-left'>Transform</h1>
          <h1 className='gradient-text text-xl font-semibold text-center lg:text-left'>Your Website</h1>
          <h1 className='text-white mt-4 font-normal text-xl text-center lg:text-left'>With Motion Art<span className='lg:hidden'> Effect</span></h1>
          <h1 className='text-white font-normal text-xl hidden lg:block'>Effect</h1>
        </div>

        <div className='mt-8 lg:mt-0 lg:-ml-56 '>
          <h1 className='text-3xl text-center lg:text-left lg:text-7xl text-white font-medium'>Attract Your</h1>
          <h1 className='text-3xl text-center lg:text-left lg:text-7xl text-white font-medium my-6'>Visitors Attention</h1>
          <h1 className='text-3xl text-center lg:text-left lg:text-7xl text-white font-medium'>With Colorful</h1>
          <h1 className='text-3xl text-center lg:text-left lg:text-7xl gradient-text mt-6 font-medium '>Motion Art Effect</h1>

          <p className='text-gray-400 font-semibold mt-8 text-center lg:text-left'>Unleash the power of creativity with Motion Art for Elementor - your <span className='lg:hidden'>ultimate solution for seamlessly integrating captivating animations into your website.</span></p>
          <p className='text-gray-400 font-semibold my-2 text-center lg:text-left hidden lg:block'>ultimate solution for seamlessly integrating captivating animations into</p>
          <p className='text-gray-400 font-semibold text-center lg:text-left hidden lg:block'>your website. </p>
        </div>
      </div>


      <p className='flex
        justify-center items-center text-white text-xl mt-16'>Trusted by thousands of users around <span className='hidden lg:block'>the world</span></p>
        <p className='lg:hidden text-white text-xl text-center'>the world</p>


    <div className=' mx-8 lg:mx-36 mt-20 justify-between grid lg:grid-cols-3 grid-cols-1'>
      <div className='flex justify-center lg:justify-start text-center lg:text-left'>
        <img src={img13} alt="" />
        <div className='ml-4 mt-4'>
          <img src={img4} alt="" className='h-6'/>
          <h1 className='text-gray-500 mt-4 font-semibold'><span className='font-bold'>4.5</span> Score, 9 Reviews</h1>
        </div>
      </div>

      <div className='flex justify-center lg:justify-start text-center lg:text-left mt-8 lg:mt-0'>
        <img src={img1} alt="" />
        <div className='ml-4 mt-4'>
          <img src={img4} alt="" className='h-6'/>
          <h1 className='text-gray-500 mt-4 font-semibold'><span className='font-bold'>4.5</span> Score, 9 Reviews</h1>
        </div>
      </div>
      <div className='flex justify-center lg:justify-start text-center lg:text-left mt-8 lg:mt-0'>
        <img src={img3} alt="" />
        <div className='ml-4 mt-4'>
          <img src={img4} alt="" className='h-6'/>
          <h1 className='text-gray-500 mt-4 font-semibold'><span className='font-bold'>4.5</span> Score, 9 Reviews</h1>
        </div>
      </div>
    </div>


    <div className='flex flex-col lg:flex-row mx-4 lg:mx-36 mt-32 justify-between'>
      <div className="">
        <p className='text-white text-5xl font-medium hidden lg:block'>Turn Your Cursor Into A Colorful</p>
        <p className='text-white text-3xl text-center font-medium lg:hidden'>Turn Your Cursor Into A </p>

        <p className='text-white text-5xl font-medium mt-4 hidden lg:block'>Magic Wand & Charm Your Visitors</p>
        <p className='text-white text-3xl text-center font-medium mt-4 lg:hidden'>Colorful Magic Wand & </p>
        <p className='text-white text-3xl text-center font-medium mt-4 lg:hidden'>Charm Your Visitors</p>

        <p className='text-gray-400 font-medium mt-6 hidden lg:block'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse</p>
        <p className='text-gray-400 font-medium mt-6 lg:hidden text-center'>Motion Art for Elementor is a groundbreaking</p>
        <p className='text-gray-400 font-medium mt-2 hidden lg:block'>your website with visually stunning motion art elements.</p>
        <p className='text-gray-400 font-medium mt-2 lg:hidden text-center'>plugin that empowers you to effortlessly infuse your</p>
        <p className='text-gray-400 font-medium mt-2 lg:hidden text-center'>website with visually stunning motion art elements.</p>
        <div className='flex bg-custom-gradient h-16 w-72 mt-8 rounded-2xl justify-between items-center px-6 cursor-pointer mx-auto lg:mx-0 '>
          <p className='text-white text-xl'>Purchase From Envato</p>
          <div className='text-white'><GoArrowRight size={30}/></div>
        </div>
      </div>
      
      <div className=" lg:mt-4 mt-8 mx-auto lg:mx-0">
        <img src={img5} alt="" />
      </div>
    </div>



      <div className='mx-auto lg:mx-36 mt-32 '>
        <p className='text-5xl font-medium text-white text-center hidden lg:block
        '>Apply On Any Section Or Enable</p>
        <p className='text-3xl font-medium text-white flex justify-center items-center lg:hidden
        '>Apply On Any Section Or </p>
        <p className='text-3xl font-medium text-white flex justify-center items-center lg:hidden mt-6
        '>Enable For Whole Page</p>
        <p className='text-5xl font-medium text-white mt-4 text-center hidden lg:block'>For Whole Page</p>
      </div>


      <div className='lg:mx-32 grid grid-cols-1 lg:grid-cols-2 gap-8 mx-6  mt-16'>
        <div className='bg-gradient-to-b from-custom-s1 to-custom-s2 px-4 rounded-2xl border border-violet-400'>
          <h1 className='ml-4 text-4xl text-white mt-8'>Apply On Section</h1>
          <h1 className='ml-4 font-medium text-gray-400 mt-6'>Apply on section is a game-changer, offering an unparalleled way to</h1>
          <h1 className='ml-4 font-medium text-gray-400 mt-2'>manage applications directly from your website.</h1>
          <img src={img11} alt="" className='mt-12 ml-4 mb-6 pr-6'/>
        </div>
        <div className='bg-gradient-to-b from-custom-s1 to-custom-s2 px-4 rounded-2xl border border-violet-400'>
          <h1 className='ml-4 text-4xl text-white mt-8'>Apply On Page</h1>
          <h1 className='ml-4 font-medium text-gray-400 mt-6'>Take your website to new heights with Motion Art for Elementor.</h1>
          <h1 className='ml-4 font-medium text-gray-400 mt-2'>Embrace the power of motion and animation.</h1>
          <img src={img10} alt="" className='mt-12 ml-4 mb-6 pr-6'/>
        </div>
      </div>




      <div className='mx-6 lg:mx-36 mt-32 bg-gradient-to-b from-custom-s1 to-custom-s2  h-84 rounded-2xl border border-violet-400'>
          <h1 className='text-3xl text-white font-medium text-center pt-12'>Supported by All Popular Browsers</h1>
          <h1 className='text-center text-gray-400 font-semibold mt-6 hidden lg:block'>Rest assured, Motion Art is designed to be compatible</h1>
          <h1 className='text-center text-gray-400 font-semibold mt-2 lg:hidden'>Rest assured, Motion Art is </h1>
          <h1 className='text-center text-gray-400 font-semibold mt-2 lg:hidden'>designed to be compatible with all</h1>
          <h1 className='text-center text-gray-400 font-semibold mt-2 lg:hidden'>major web browsers. </h1>
          <h1 className='text-center text-gray-400 font-semibold mt-2 hidden lg:block'>with all major web browsers.</h1>

         <div className='flex justify-center items-center mt-8 mb-8 px-2'><img src={img8} alt="" /></div>
      </div>


      <div className= ' mx-36 mt-24 hidden lg:block'>
        <p className='text-white text-center text-5xl font-semibold'>An All-Round Plugin With</p>
        <p className='text-white text-center text-5xl font-semibold mt-4'>Powerful Features</p>
        <p className='text-gray-400 font-semibold text-center mt-6'>Whether you're a seasoned web designer or just starting out, Motion Art for</p>
        <p className='text-gray-400 font-semibold text-center my-2'>Elementor seamlessly integrates with the Elementor platform, providing you</p>
        <p className='text-gray-400 font-semibold text-center'>with a seamless and intuitive experience.</p>
      </div>
      <div className='mx-4 mt-24  lg:hidden'>
        <p className='text-white text-center text-3xl font-semibold'>An All-Round Plugin With</p>
        <p className='text-white text-center text-3xl font-semibold mt-4'>Powerful Features</p>
        <p className='text-gray-400 font-semibold text-center mt-6'>Whether you're a seasoned web designer or just </p>
        <p className='text-gray-400 font-semibold text-center my-2'>starting out, Motion Art for Elementor seamlessly</p>
        <p className='text-gray-400 font-semibold text-center'>integrates with the Elementor platform, providing</p>
        <p className='text-gray-400 font-semibold text-center'>you with a seamless and intuitive experience.</p>
      </div>



      <div className='mx-4 lg:mx-32 mt-6  grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='bg-gradient-to-b from-custom-s1 to-custom-s2 rounded-xl border border-violet-400'>
          <img src={img9} alt="" className='mt-4'/>
          <h1 className='text-2xl mt-8 ml-6 text-white font-semibold'>Light Weight</h1>
          <h1 className='font-semibold mt-4 ml-6 text-gray-400'>Motion Art for Elementor is designed to be </h1>
          <h1 className='font-semibold ml-6 mt-2 text-gray-400 mb-2'>lightweight.</h1>
        </div>
        <div className='bg-gradient-to-b from-custom-s1 to-custom-s2 rounded-xl border border-violet-400'>
          <img src={img6} alt="" className='mt-4'/>
          <h1 className='text-2xl mt-8 ml-6 text-white font-semibold'>100% Responsive</h1>
          <h1 className='font-semibold mt-4 ml-6 text-gray-400'>Create a consistent visual experience</h1>
          <h1 className='font-semibold ml-6 mt-2 text-gray-400 mb-2'>across all devices.</h1>
        </div>
        <div className='bg-gradient-to-b from-custom-s1 to-custom-s2 rounded-xl border border-violet-400'>
          <img src={img7} alt="" className='mt-4'/>
          <h1 className='text-2xl mt-8 ml-6 text-white font-semibold'>User Friendly Interface</h1>
          <h1 className='font-semibold mt-4 ml-6 text-gray-400'>Ensure a smooth experience for both</h1>
          <h1 className='font-semibold ml-6 mt-2 text-gray-400 mb-2'>applicants and administrators.</h1>
        </div>
      </div>



      <div className='hidden lg:block'>
      <div className='w-full bg-custom-gradient flex justify-between mt-32 py-4'>
        <div>
          <h1 className='text-gray-300 ml-32 text-xs font-semibold'>© 2023 Copywrite. All rights reserved by QodeMatrix</h1>
        </div>
        <div className='flex mr-32'>
          <div className='text-gray-300 mr-16 text-xs font-medium cursor-pointer'>Documentation</div>
          <div className='text-gray-300 text-xs font-medium cursor-pointer'>Support</div>
        </div>
      </div>
      </div>

      <div className='lg:hidden'>
      <div className='w-full bg-custom-gradient  justify-between mt-4 py-4'>
        
        <div className='flex  justify-center items-center'>
          <div className='text-gray-300 mr-16 text-xs font-medium cursor-pointer'>Documentation</div>
          <div className='text-gray-300 text-xs font-medium cursor-pointer'>Support</div>
        </div>
        <div>
          <h1 className='text-gray-300 mt-4 text-xs font-semibold text-center'>© 2023 Copywrite. All rights reserved by QodeMatrix</h1>
        </div>
      </div>
      </div>
    </div>
    
    </>
  )
}

export default App
