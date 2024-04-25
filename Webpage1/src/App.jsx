/* eslint-disable react/no-unescaped-entities */
import image1 from './assets/Ellipse 727.png'
import image2 from './assets/Frame 2608514.png'
import image3 from './assets/image 160.png'
import hair from './assets/Hair 1.png'
import Immunity from './assets/Immunity 1.png'
import Skincare from './assets/Skincare 1.png'
import Women from './assets/Women 1.png'
import home from './assets/home.png'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { LuTwitter } from "react-icons/lu";





function App() {
 

  return (
    <div>

          <div className="w-screen h-20 bg-yellow-100">
            <div className="w-auto h-auto ml-10 flex justify-around">
              <div>
                <h1 className="text-4xl text-green-800 font-semibold mt-3">AMRUTAM</h1>
              </div>
              <div className="flex justify-center items-center mt-3">
                <div className="cursor-pointer transition ease-out hover:scale-105">Home</div>
                <div className="font-bold text-green-800 mx-10 cursor-pointer transition ease-out hover:scale-105">Find Doctors</div>
                <div className="cursor-pointer transition ease-out hover:scale-105">About Us</div>
              </div>
              <div className="flex justify-center items-center mt-3">
                <div className="text-green-800 mr-8 border border-green-800 inline-block w-20 h-8 rounded-xl pl-4 cursor-pointer transition ease-out hover:scale-110">Login</div>
                <div className="bg-green-800 rounded-xl w-20 h-8 pl-3 text-white cursor-pointer transition ease-out hover:scale-110">Sign-up  </div>
              </div>
            </div>
          </div>



          <div className=""><img src={image3} alt="" className="w-screen px-20 h-36 mt-16 rounded-lg" /></div>

          <div className="w-6/8 mx-20 h-48 -mt-10 rounded-b-lg bg-yellow-100 flex justify-around">
                <div className="flex">
                    <div>
                       <img src={image1} alt="" className="ml-8"/>
                    </div>
                    <div className="mt-16 ml-4">
                        <div className="flex">
                            <div className="font-semibold">Dr. Bruce Willis</div>
                            <div className="ml-1 mt-1 text-blue-900">
                                < RiVerifiedBadgeFill/>
                            </div>
                        </div>
                        <p className="text-green-800">Gynecologist</p>
                        <div className="flex">
                            <div>4.2</div>
                            <div className="flex ml-2 -mt-1">
                                <div className="flex items-center">
                                    <button className="text-xl text-yellow-500 focus:outline-none focus:ring-0">★</button>
                                    <button className="text-xl text-yellow-500 focus:outline-none focus:ring-0">★</button>
                                    <button className="text-xl text-yellow-500 focus:outline-none focus:ring-0">★</button>
                                    <button className="text-xl text-yellow-500 focus:outline-none focus:ring-0">★</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-16">
                    <div className="text-green-800">
                        Followers 
                        <p className="text-black font-bold text-xl ml-4">850</p>
                    </div>
                    <div className="mx-8 text-green-800">
                        Following
                        <p className="text-black font-bold text-xl ml-4">18k</p>
                    </div>
                    <div className="text-green-800">
                        Posts 
                        <p className="text-black font-bold text-xl">250</p>
                    </div>
                </div>
                <div className="mt-16">
                    <p className="bg-green-800 text-white text-2xl font-semibold rounded-lg p-4 cursor-pointer transition ease-out hover:scale-110">Book an Appointment</p>
                </div>
            </div>

          
    

      
<div className=''>

  <div className='flex'>

        <div className="pl-20 w-1/2">
            <div className="mt-16 w-628 bg-white border border-gray-300 inline-block rounded-xl">

              
                      <div className="bg-gradient-to-r from-gray-200 to-gray-50 h-16 flex justify-between p-3 rounded-xl">
                          <div className="text-2xl font-semibold ml-4">A Little About me</div>
                          <div className="border border-gray-400 inline-block h-8 rounded-lg px-4  cursor-pointer transition ease-out hover:scale-105">Follow <span className='text-2xl '>+</span></div>
                      </div>



                      <div className="px-24">
                          <p className="text-gray-400 mt-10">Hello, I am Dr. Bruce Willis, a Gynecologist at Sanjivni Hospital <br /> Surat. I love to work with all my hospital staff and senior doctors. <br />Completed my graduation in Gynecologist Medical from the</p>
                              <div className="flex mt-4 text-center mb-8">
                                  <div className="mt-4 ml-2 w-80 flex h-0 border border-gray-400 border-opacity-50"></div>
                                  <p className="text-xl font-semibold ml-4 underline cursor-pointer">Read More</p>
                              </div>
                      </div>


                      <div className="flex justify-start ml-24">
                          <div className="text-xl font-semibold">Languages Spoken</div>
                          <div className="bg-gray-100 rounded-2xl p-2 ml-6">English</div>
                          <div className="bg-gray-100 rounded-2xl mx-4 p-2">Hindi</div>
                          <div className="bg-gray-100 rounded-2xl p-2">Telugu</div>
                      </div>


                      <div className="flex ml-24 mt-8 mb-8">
                          <div className="bg-gray-200 rounded-full p-2 border border-gray-400 cursor-pointer transition ease-out hover:scale-105">
                            <div className='text-green-800'><FiFacebook size={20}/></div>
                          </div>
                          <div className="bg-gray-200 rounded-full p-2 border border-gray-400 cursor-pointer transition ease-out hover:scale-105 mx-2">
                              <div className='text-green-800'><FaInstagram size={20}/></div>
                          </div>
                          <div className="bg-gray-200 rounded-full p-2 border border-gray-400 cursor-pointer transition ease-out hover:scale-105 mr-2">
                              <div className='text-green-800'><PiYoutubeLogoLight size={20}/></div>
                          </div>
                          <div className="bg-gray-200 rounded-full p-2 border border-gray-400 cursor-pointer transition ease-out hover:scale-105">
                              <div className='text-green-800'><LuTwitter size={20}/></div>
                          </div>
                      </div>
          </div>


            <div className="mt-16 w-628 bg-white border border-gray-300 inline-block rounded-xl">


                      <div className="bg-gradient-to-r from-gray-200 to-gray-50 h-16 flex justify-between p-3 rounded-xl">
                          <div className="text-2xl font-semibold ml-4">I Specialize In</div>
                      </div>

                      <div className='flex mt-8 ml-4 mb-12'>
                          <div>
                            <img src={Women} alt="" className='bg-yellow-50 w-20 h-20 p-2 rounded-lg ml-8 border border-gray-200' />
                            <p className='text-sm ml-4 mt-1'>Women's Health</p>
                          </div>
                          <div>
                            <img src={Skincare} alt="" className='bg-yellow-50 w-20 h-20 p-2 rounded-lg mx-4 border border-gray-200' />
                            <p  className='text-sm ml-8 mt-1'>Skin Care</p>
                            
                          </div>
                          <div>
                            <img src={Immunity} alt="" className='bg-yellow-50 w-20 h-20 p-2 rounded-lg  mr-4 border border-gray-200' />
                            <p  className='text-sm ml-2 mt-1'>Immunity</p>
                          </div>
                          <div>
                            <img src={hair} alt="" className='bg-yellow-50 w-20 h-20 p-2 rounded-lg mr-56 border border-gray-200' />
                            <p  className='text-sm ml-4 mt-1'>Hair Care</p>
                          </div>
                          
                      </div>


                     
          </div>



            <div className="pr-28 mt-16 w-628 bg-white border border-gray-300 inline-block rounded-xl">


                <div className="bg-gradient-to-r from-gray-200 to-gray-50  h-16  p-3 rounded-xl">
                    <div className="text-2xl font-semibold ml-4">The Concerns I Treat</div>
                </div>


                <div className="flex mt-8 ">
                    <div className="text-green-800 bg-gray-300 rounded-2xl ml-4 p-2">Skin Treatment</div>
                    <div className="text-green-800 bg-gray-300 rounded-2xl p-2 mx-4">Pregnancy</div><div className="text-green-800 bg-gray-300 rounded-2xl mx-4 p-2">Period Doubts</div>
                    <div className="text-green-800 bg-gray-300 rounded-2xl p-2 mr-4"> Endometriosis</div>
                </div>

                <div className="flex mt-4 mb-8">
                    <div className="text-green-800 bg-gray-300 rounded-2xl ml-4 p-2">Pelvic Pain</div>
                    <div className="text-green-800 bg-gray-300 rounded-2xl ml-4 p-2">Ovarian Cysts</div>
                    <div className="bg-white rounded-2xl p-2 border border-gray-300 ml-4 cursor-pointer text-green-800 font-medium">+5 More</div>
                </div>
                      
                      
          </div>



          <div className="mt-16 pr-56 bg-white border border-gray-300 inline-block rounded-xl">
              <div className="bg-gradient-to-r from-gray-200 to-gray-50 h-16 flex justify-between p-3 rounded-xl">
                  <div className="text-2xl font-semibold ml-4">My Work Experience</div>
              </div>
              <div className="text-green-800 font-medium mt-8 ml-4">I HAVE BEEN IN PRACTICE FOR: 7+ YEARS</div>
              <div className="border-b-2 border-gray-300 mt-4 ml-4 mb-4"></div>
              <div className="flex">
                  <div className="flex">
                      <img src={home} alt="" className="ml-4" /> 
                      <div className="ml-2">
                          <p className="font-semibold">Midtown Medical Clinic</p>
                          <p className="text-gray-400 font-medium">Senior Doctor</p>
                      </div>
                  </div>
                  <div className="">
                      <p className="pl-20">2016-PRESENT</p>
                  </div>
              </div>
              <div className="flex mt-4 mb-4">
                  <div className="flex">
                      <img src={home} alt="" className="ml-4" />
                      <div className="ml-2">
                          <p className="font-semibold">Midtown Medical Clinic</p>
                          <p className="text-gray-400 font-medium">Senior Doctor</p>
                      </div>
                  </div>
                  <div className="">
                      <p className="pl-20">2010-2015</p>
                  </div>
              </div>
          </div>




          <div className="mt-16 mb-16 bg-white border border-gray-300 inline-block rounded-xl">
    <div className="bg-gradient-to-r from-gray-200 to-gray-50 h-16 flex justify-between p-3 rounded-xl">
        <div className="text-2xl font-semibold ml-4">Featured Reviews (102)</div>
    </div>
    <div className="m-4 bg-gray-100 rounded-lg">
        <div className="flex ml-4 pt-4">
            <div>
               <img src={image2} alt=""/>
            </div>
            <div className="ml-2">
                <p className="text-xl font-medium">Alicent Hightower</p>
                <p className="text-gray-400 font-medium">Consulted for Skin Care</p>
            </div>
            <div>
                <p className="text-gray-400 mt-4 pl-48 pr-12">20 January 2023</p>
            </div>
        </div>
        <div className="mt-2 ml-4">
            <div className="flex items-center">
                <button className="text-xl text-yellow-500 focus:outline-none focus:ring-0">★</button>
                <button className="text-xl text-yellow-500 focus:outline-none focus:ring-0">★</button>
                <button className="text-xl text-yellow-500 focus:outline-none focus:ring-0">★</button>
                <button className="text-xl text-yellow-500 focus:outline-none focus:ring-0">★</button>
                <button className="text-xl text-yellow-500 focus:outline-none focus:ring-0">★</button>
            </div>
        </div>
        <div className="ml-4">
            <p className="pb-4">Might be bit early to confirm but yes I can see noticeable difference <br /> in my hairfall will write again after using it for longer periods</p>
        </div>
    </div>
    <div className="m-4 bg-gray-100 rounded-lg">
        <div className="flex ml-4 pt-4">
            <div>
                <img src={image2} alt=""/>
            </div>
            <div className="ml-2">
                <p className="text-xl font-medium">Alicent Hightower</p>
                <p className="text-gray-400 font-medium">Consulted for Skin Care</p>
            </div>
            <div>
                <p className="text-gray-400 mt-4 pl-48 pr-12">20 January 2023</p>
            </div>
        </div>
        <div className="mt-2 ml-4">
            <div className="flex items-center">
                <button className="text-xl text-yellow-500 focus:outline-none focus:ring-0">★</button>
                <button className="text-xl text-yellow-500 focus:outline-none focus:ring-0">★</button>
                <button className="text-xl text-yellow-500 focus:outline-none focus:ring-0">★</button>
                <button className="text-xl text-yellow-500 focus:outline-none focus:ring-0">★</button>
                <button className="text-xl text-yellow-500 focus:outline-none focus:ring-0">★</button>
            </div>
        </div>
        <div className="ml-4">
            <p className="pb-4">Might be bit early to confirm but yes I can see noticeable difference <br /> in my hairfall will write again after using it for longer periods</p>
        </div>
    </div>
</div>

       
</div>

<div className="pr-20">
    <div className="mt-16 bg-white border border-gray-300 inline-block rounded-xl">
        <div className="border border-gray-300 m-4 h-16 flex justify-between p-3 rounded-xl">
            <div className="text-xl font-medium ml-4">Appointment Fee</div>
            <div className="flex">
                <div className="h-8 rounded-lg mt-1 text-green-800">
                    <FaIndianRupeeSign/>
                </div>
                <span className="text-green-800 font-semibold text-xl">699.00</span>
            </div>
        </div>
        <div className="flex ml-8 mt-10 text-center">
            <p className="text-xl font-semibold mx-2">Select your mode of Session</p>
            <div className="mt-4 ml-2 w-80 flex h-0 border border-gray-400 border-opacity-50"></div>
        </div>
        <div className="mx-14 mt-10 space-x-8 flex">
            <div className="border w-40 border-gray-300 p-2 text-center rounded-xl cursor-pointer transition ease-out hover:scale-110">
                <h1 className="text-lg font-medium">In-Clinic</h1>
                <h1 className="text-lg text-gray-500">45 Mins</h1>
            </div>
            <div className="border w-40 bg-green-100 border-gray-300 p-2 text-center rounded-xl cursor-pointer transition ease-out hover:scale-110">
                <div className="flex">
                    <h1 className="text-lg text-green-800 font-medium mr-2 ml-8">Video</h1>
                    <p className="mt-2 text-green-800">
                       <FaCircleCheck/>
                    </p>
                </div>
                <h1 className="text-lg text-gray-500">45 Mins</h1>
            </div>
            <div className="border w-40 border-gray-300 p-2 text-center rounded-xl cursor-pointer transition ease-out hover:scale-110">
                <h1 className="text-lg font-medium">Chat</h1>
                <h1 className="text-lg text-gray-500">10 Mins</h1>
            </div>
        </div>
        <div className="flex mx-10 mt-10 items-center text-center">
            <p className="text-xl font-semibold mx-2">Pick a time Slot</p>
            <div className="mt-4 mx-8 w-80 flex h-0 border border-gray-400 border-opacity-50"></div>
            <div className="border border-gray-400 rounded-full p-2 mt-2 cursor-pointer transition ease-out hover:scale-105">
                <FaRegCalendar/>
            </div>

        </div>

        <div className='ml-20 mt-10 border h-32 w-3/4 border-gray-500 rounded-2xl justify-center items-center  flex '>
                    <div className='text-gray-400 mr-2 ml-4'> <IoIosArrowDropleft size={20}/> </div>
                    <div className='border w-40 border-gray-300 p-2 text-center rounded-xl bg-green-100 cursor-pointer transition ease-out hover:scale-105'>
                        <h1 className='text-lg text-green-700 font-medium'>Mon,10 Oct</h1>
                        <h1 className='text-lg text-gray-500'>10 Slots</h1>
                    </div>
                    <div className='border w-40  border-gray-300 p-2 text-center rounded-xl mx-2 cursor-pointer transition ease-out hover:scale-105'>
                        <h1 className='text-lg text-green-800 font-medium'>Tue,10 Oct</h1>
                        <h1 className='text-lg text-gray-500'><span className='text-red-500'>02 Slots</span></h1>
                    </div>
                    <div className='border w-40 border-gray-300 p-2 text-center rounded-xl cursor-pointer transition ease-out hover:scale-105'>
                        <h1 className='text-lg font-medium'>Wed,10 Oct</h1>
                        <h1 className='text-lg text-gray-500'><span className='text-yellow-500'>05 Slots</span></h1>
                    </div>
                    <div className='text-gray-400 mr-4 ml-2'><IoIosArrowDropright size={20}/></div>
             </div>


             <h1 className='text-xl font-semibold mt-10 mx-14 '>Morning</h1>
                <div className='flex mx-10 text-center space-x-6 mt-8 items-center'>
                    <h1 className='border text-lg border-gray-400 rounded-xl items-center py-4  text-center h-16 w-32 cursor-pointer transition ease-out hover:scale-105'>09:00 AM</h1>
                    <h1 className='border text-lg border-gray-400 rounded-xl items-center py-4 text-center h-16 w-32 cursor-pointer transition ease-out hover:scale-105'>09:30 AM</h1>
                    <h1 className='border text-lg border-gray-400 rounded-xl items-center py-4 text-center h-16 w-32 cursor-pointer transition ease-out hover:scale-105'>10:00 AM</h1>
                    <h1 className='border text-lg border-gray-400 rounded-xl items-center py-4 text-center h-16 w-32 cursor-pointer transition ease-out hover:scale-105'>10:15 AM</h1>
                </div>
                <div className='flex mx-10 text-center  mt-8 space-x-6  items-center'>
                    <h1 className='border text-lg border-gray-400 rounded-xl items-center py-4 text-center h-16 w-32 cursor-pointer transition ease-out hover:scale-105'>10:45 AM</h1>
                    <h1 className='border text-lg border-gray-400 bg-green-700 rounded-xl text-white items-center py-4 text-center h-16 w-32 cursor-pointer transition ease-out hover:scale-105'>11:00 AM</h1>

                </div>


                <h1 className='text-xl font-semibold mt-10 mx-14 '>Evening</h1>
                <div className='flex mx-10 text-center space-x-6 mt-8 items-center'>
                    <h1 className='border text-lg border-gray-400 rounded-xl items-center py-4 text-center h-16 w-32 cursor-pointer transition ease-out hover:scale-105'>04:00 PM</h1>
                    <h1 className='border text-lg border-gray-400 rounded-xl items-center py-4 text-center h-16 w-32 cursor-pointer transition ease-out hover:scale-105'>04:15 PM</h1>
                    <h1 className='border text-lg border-gray-400 rounded-xl items-center py-4 text-center h-16 w-32 cursor-pointer transition ease-out hover:scale-105'>04:30 PM</h1>
                    <h1 className='border text-lg border-gray-400 rounded-xl items-center py-4 text-center h-16 w-32 cursor-pointer transition ease-out hover:scale-105'>04:45 PM</h1>
                </div>
                <div className='flex mx-10 text-center space-x-6 mt-8 items-center'>
                    <h1 className='border text-lg border-gray-400 rounded-xl items-center py-4 text-center h-16 w-32 cursor-pointer transition ease-out hover:scale-105'>05:15 PM</h1>

                </div>

        
        
       
       
        <button className="mt-12 mx-12 my-10 mr-8 bg-green-800 font-normal text-white text-2xl border rounded-xl w-3/4 h-12 p-2 cursor-pointer transition ease-out hover:scale-110">Make An Appointment</button>
    </div>
</div>
      </div>

    </div>
       

        


       

   
      
</div>
  )
}

export default App








