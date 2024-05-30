import img1 from '../src/assets/img1.png'
import img2 from '../src/assets/img2.png'
import img3 from '../src/assets/img3.png'
import img4 from '../src/assets/img4.png'
import img5 from '../src/assets/img5.png'
import img6 from '../src/assets/img6.png'
import insta from '../src/assets/insta.png'
import { MdOutlineCircleNotifications } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { GiCube } from "react-icons/gi";
import { VscCompass } from "react-icons/vsc";
import { BiLaptop } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiDiscussion } from "react-icons/gi";
import { MdOutlineMessage } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { PiMonitorPlayFill } from "react-icons/pi";


function App() {
  

  return (
    <div className='bg-violet-200 w-full h-screen'>
      <div className='bg-white w-full h-16 flex justify-between border border-gray-400 '>
        <div className='flex'>
          <img src={img3} alt="" className='pt-2 pl-4 w-12 h-12'/>
          <span className='text-violet-400 text-4xl font-bold ml-2 mt-1'>wi<span>Z</span></span>
          <span className='text-4xl font-bold mt-1'>e</span>

        </div>
        <div className='flex mr-6 p-2'>
          <MdOutlineCircleNotifications className='text-violet-400 ' size={40}/>
          <div className='flex border-2 border-gray-400 rounded-3xl w-36 h-10 ml-4 justify-end'>
            <h1 className='font-semibold mr-2 mt-1'>Account</h1>
            <IoIosContact className='text-violet-400 pb-3 pl-1' size={50}/>
          </div>
          <div className='flex border-2 border-gray-400 rounded-3xl w-36 h-10 ml-4 justify-end'>
            <h1 className='font-semibold mr-4 mt-1'>Menu</h1>
            <img src={img4} alt="" className='w-6 h-6 mr-2 mt-2'/>
          </div>
        </div>
      </div>


      <div className='flex'>
        <div className=' w-56  border border-gray-400 bg-white'>
          <div className='flex mx-6 mt-4'>
            <GiCube size={30} className='text-gray-400'/>
            <h1 className='font-bold text-gray-400 ml-4'>Home</h1>
          </div>
          <div className='flex mx-6 mt-4'>
            <VscCompass size={30} className='text-gray-400'/>
            <h1 className='font-bold text-gray-400 ml-4'>Explore</h1>
          </div>
          <div className='flex mx-6 mt-4'>
            <BiLaptop size={30} className='text-gray-400'/>
            <h1 className='font-bold text-gray-400 ml-4'>Learn</h1>
          </div>
          <div className='flex mx-6 mt-4'>
            <FaGraduationCap size={30} className='text-gray-400'/>
            <h1 className='font-bold text-gray-400 ml-4'>Achieve</h1>
          </div>
          <div className='flex mx-6 mt-4'>
            <FaBookReader size={30} className='text-gray-400'/>
            <h1 className='font-bold text-gray-400 ml-4'>Practice</h1>
          </div>
          <div className='flex mx-6 mt-4'>
            <BsPersonWorkspace size={30} className='text-gray-400'/>
            <h1 className='font-bold text-gray-400 ml-4'>Projects</h1>
          </div>
          <div className='flex mx-6 mt-4'>
            <BsGraphUpArrow size={30} className='text-gray-400'/>
            <h1 className='font-bold text-gray-400 ml-4'>Career</h1>
          </div>
          <div className='flex mx-6 mt-4'>
            <GiDiscussion size={30} className='text-violet-600'/>
            <h1 className='font-bold text-violet-600 ml-4'>Mentorship</h1>
          </div>
          <div className='flex mx-6 mt-4'>
            <MdOutlineMessage size={30} className='text-gray-400'/>
            <h1 className='font-bold text-gray-400 ml-4'>Blogs</h1>
          </div>
          <div className='flex mx-6 mt-4'>
            <HiOutlineUserGroup size={30} className='text-gray-400'/>
            <h1 className='font-bold text-gray-400 ml-4'>Community</h1>
          </div>
          
          
          <div className='w-5/6 h-24 bg-violet-500 px-3 rounded-lg ml-3 mt-6 '></div>
          <div className='h-12 w-12 bg-violet-500 border-4 border-gray-300 rounded-full ml-20 -mt-28 '></div>

          <div className='w-auto h-16 bg-violet-200 ml-3 mt-20 rounded-xl mr-2 mb-4'>
            <h1 className='font-bold text-center pt-1'>Connect with us</h1>
            <div className='flex mt-1 px-1'>
              <div>
              <FaWhatsappSquare size={30} className='text-green-500'/>
              </div>
              <div>
              <FaLinkedin size={30} className='text-blue-700'/>
              </div>
              <div>
              <img src={insta} alt="" className='w-10 h-10 -mt-1'/>
              </div>
              <div>
              <BsDiscord size={30} className='text-blue-500'/>
              </div>
              <div>
              <FaYoutube size={30} className='text-red-500'/>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='flex w-full bg-white rounded-lg mt-4 ml-4'>
              <div className='p-4 '>
                <img src={img1} alt="" className='h-80 w-full mr-6 rounded-lg'/>
              </div>
              <div className='ml-4 mt-4'>
                <div className='bg-violet-200 rounded-2xl w-36 h-8 text-center font-bold text-blue-700'>My Mentor</div>
                <h1 className='text-xl font-bold mt-4'>Mr. Ankit Awasthi</h1>
                <div className='flex mt-6 ml-5'>
                  <PiMonitorPlayFill size={30} className='text-violet-500'/>
                  <h1 className='text-gray-400 font-bold ml-3'>Highlights:</h1>
                  <h1 className='text-gray-400 font-bold ml-6'>IIT Delhi Graduate | Bain & Company</h1>
                </div>
                <div className='flex mt-4 ml-5'>
                    <img src={img5} alt="" className='h-6 w-6'/>
                    <h1 className='text-gray-400 font-bold ml-4'>About:</h1>
                    <div className='ml-16'>
                        <h1 className='text-gray-400 font-bold '>Ankit is an IIt Delhi graduate and</h1>
                        <h1 className='text-gray-400 font-bold '>current Bain & Company consultant,</h1>
                        <h1 className='text-gray-400 font-bold '>specializing in strategic consulting and</h1>
                        <h1 className='text-gray-400 font-bold '>business optimization</h1>
                    </div>
                </div>
                <div className='bg-violet-500 w-full h-12  rounded-lg mt-7 text-white font-semibold text-xl flex justify-center items-center '>Connect Me</div>
              </div>
          </div>
          <div className='flex '>
            <div className='flex bg-white   mr-4 rounded-lg mt-4 ml-4'>
              <div className='flex'>
                <div className='mt-8 ml-6'>
                  <h1 className='font-bold text-2xl'>Session Booking</h1>
                  <h1 className='text-gray-400 mt-6 font-normal'>Book a session for guidance in</h1>
                  <h1 className='text-gray-400  font-normal'>any specific area like projects,</h1>
                  <h1 className='text-gray-400  font-normal'>interviews,etc.</h1>
                  <h1 className='text-violet-500 font-bold text-xl border-2 border-violet-500 rounded-lg mt-16 text-center py-2 mr-2  '>Book a session </h1>
                </div>
                <div className='ml-16 mt-7 mb-1 '><img src={img2} alt="" className='h-64' /></div>
              </div>
              
            </div>
            <div className=' bg-white   mr-4 rounded-lg mt-4 ml-4 pr-20'>
                <h1 className='font-bold text-2xl mt-8 ml-6'>Manage Sessions</h1>
                <div className='flex mt-4 ml-6'>
                  <div className='mt-6'>
                    <h1 className='text-gray-400 font-bold'>Upcoming Sessions:  2</h1>
                    <h1 className='text-gray-400 font-bold mt-4'>Credits Left:       5</h1>
                  </div>
                  <div className='ml-12 mt-4'>
                      <img src={img6} alt="" className='h-24 w-24' />
                  </div>
                </div>
                <h1 className='text-violet-500 font-bold text-xl border-2 border-violet-500 rounded-lg mt-8 text-center py-2 mr-2 w-full ml-4 '>Manage Bookings</h1>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default App