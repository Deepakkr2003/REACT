/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import koin1 from '../assets/koin1.png'
import koin2 from '../assets/koin2.png'



function About() {
  return (
    <div 
        name="about"
        className='w-full h-full md:w-4/6 md:ml-5 pt-20 bg-white rounded-lg my-5'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-4'>
            <h1 className=' font-semibold  text-black text-2xl'>About Bitcoin</h1>
        </div>

        <div >
            <h4 className='font-bold text-black pb-2'>What is Bitcoin ?</h4>
            <p className=''>
            Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B.BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
            </p>
        </div>
        <br/>
        <div className=' border-t-2 border-gray-300'>
            <h4 className='mt-4 font-bold text-black pb-2'>Lorem ipsum dolor sit amet</h4>
            <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium magna non nulla consectetur, vitae commodo magna malesuada. Ut in velit consectetur, aliquam sapien sit amet, suscipit nisi. Phasellus id magna elit. Quisque quis eleifend metus, nec consequat purus. Nullam in semper dui. Integer dapibus felis vel sem efficitur, quis varius metus placerat. Vivamus eu convallis lacus. Sed non augue nulla.
            </p>
            <br />
            <p>
                Daim praesent massa dapibus magna aliquam a dictumst volutpat. Egeatas vitae pellentesque auctor amet.Nunc sagrittis libero adipiscing cursur lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatum vel explicabo, nostrum temporibus cupiditate saepe provident consequuntur velit ad. Inventore officiis quisquam maiores vitae dolores corrupti illum nemo consectetur.
            </p>
            <br />
            <p>
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, accusantium odio veritatis, laboriosam a facilis cumque nihil nemo ea maxime tempora voluptatum sint dicta quo ex fuga excepturi! Officiis, architecto. Ullamcorper dui
            </p>
        </div>
        <div className='mt-5 border-t-2 border-gray-300'>
            <h1 className='mt-5 text-2xl font-bold'>Already Holding Bitcoin?</h1>
            <div className='  grid grid-cols-1 md:grid-cols-2'>
                <div className='bg-gradient-to-b from-violet-500 to-orange-300 flex justify-start rounded-xl my-4 md:mx-4'>
                  
                      <img src={koin1} alt="koin1" className='mx-2 my-2 w-1/6  rounded-xl'/>
                   
                   <div className='ml-8'>
                      <h1 className='text-3xl text-white'>Calculate your <br/> Profits </h1>
                      
                      <div className=' bg-white my-4 rounded-lg mr-12 hover:cursor-pointer'>
                          <h1 className=' my-1 ml-1 text-xl font-bold '>Check  Now <i class="fa-solid fa-arrow-right"></i></h1>
                      </div>
                      
                   </div>
                </div>
                <div className='bg-gradient-to-b from-yellow-500 to-red-300 flex justify-start  rounded-xl my-4'>
                  
                      <img src={koin2} alt="koin2" className='mx-2 my-2 w-1/6 rounded-xl'/>
            
                   <div className='ml-8'>
                      <h1 className='text-3xl text-white'>Calculate your tax </h1>
                      <h1 className='text-3xl text-white'>liability</h1>
                      <div className='w-2/3 bg-white my-4 rounded-lg hover:cursor-pointer'>
                          <h1 className=' my-1 ml-1 text-xl font-bold '>Check  Now <i class="fa-solid fa-arrow-right"></i></h1>
                      </div>
                   </div>
                   
                </div>

            </div>
            <div className='mt-5 border-t-2 border-gray-300'>
                <p className='my-5 '> 
                  Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvianr nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
