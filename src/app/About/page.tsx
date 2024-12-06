import { RiCheckboxBlankFill } from "react-icons/ri";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";
import { FaCarSide } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { CiDollar } from "react-icons/ci";
import { FaGift } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";


import React from 'react'

function About() {
  return (
    <div className='max-w-[1200px] mx-auto'>


      {/* section 1 */}
      <div className='mt-9 md:ml-0 flex flex-col gap-10  lg:gap-0  lg:flex lg:flex-row items-center justify-between'>
        <div className='ml-5 md:mx-4 '>
          <h1 className='text-[54px] font-semibold'>Our Story</h1>
          <p className='w-[270px] sm:w-[525px] mt-5'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <br />
          <p className='w-[270px] sm:w-[505px] '>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div className=' lg:ml-5 mt-48  mb-28 md:mt-0'>
          <img src='/images/about.png' />
        </div>
      </div>





      {/* section 2 */}
      {/* <div className=' flex items-center justify-a'> */}
      <div className="flex flex-col lg:flex lg:flex-row  items-center justify-between  lg:gap-10 md:gap-0">

        <div className="w-[170px]  h-[145px] border-2 flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white">
          <div className="bg-gray-400 w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
              <SiHomeassistantcommunitystore  className="text-white text-3xl" />
            </div>
          </div>
          <h1 className="text-[20px] font-bold">10.5k </h1>
          <p className="text-[13px]">Sallers active our site</p>
        </div>
        <div className="w-[170px]  h-[145px] border-2 flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white">
          <div className="bg-gray-400 w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
              <CiDollar className="text-white text-3xl" />
            </div>
          </div>
          <h1 className="text-[20px] font-bold">33k </h1>
          <p className="text-[13px]">Mopnthly Produduct Sale</p>
        </div>


        <div className="w-[170px]  h-[145px] border-2 flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white">

          <div className="bg-gray-400 w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
              <FaGift className="text-white text-3xl" />
            </div>
          </div>
          <h1 className="text-[20px] font-bold">45.5k</h1>
          <p className="text-[13px]">Customer active in our site</p>
        </div>
        <div className="w-[170px]  h-[145px] border-2 flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white">
          <div className="bg-gray-400 w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
              <FaSackDollar className="text-white text-3xl" />
            </div>
          </div>
          <h1 className="text-[20px] font-bold">25k</h1>
          <p className="text-[13px]">Anual gross sale in our site</p>
        </div>

      </div>



      {/* section 3 */}
      <div className="flex flex-col lg:flex lg:flex-row items-center justify-between mt-28  mb-28">

        <div className="w-[370px]">

        <div className="w-[370px] h-[420px] flex  items-center justify-center bg-[#F5F5F5] rounded-md ">
          <img src="/images/bhai1.png" className="mt-7"/>  
        </div>
          <h1 className="text-[32px] mt-2 font-semibold ">Tom Cruise</h1>        
          <p className=" mb-2">Founder & Chairman</p>
          <div className="flex items-center gap-5 mt-5">
          <CiTwitter/>
          <CiInstagram />
          <FaLinkedinIn/>
          
          </div>
        
        </div>
        <div className="w-[370px]">

        <div className="w-[370px] h-[420px] flex  items-center justify-center bg-[#F5F5F5] rounded-md ">
          <img src="/images/sis2.png" className="mt-7"/>  
        </div>
          <h1 className="text-[32px] mt-2 font-semibold ">Emma Watson</h1>        
          <p className=" mb-2">Managing Director</p>
          <div className="flex items-center gap-5 mt-5">
          <CiTwitter/>
          <CiInstagram />
          <FaLinkedinIn/>
          </div>
        
        </div>
        <div className="w-[370px]">

        <div className="w-[370px] h-[420px] flex  items-center justify-center bg-[#F5F5F5] rounded-md ">
          <img src="/images/bhai3.png" className="mt-7"/>  
        </div>
          <h1 className="text-[32px] mt-2 font-semibold ">Will Smith</h1>        
          <p className=" mb-2">Product Designer</p>
          <div className="flex items-center gap-5 mt-5">
          <CiTwitter/>
          <CiInstagram />
          <FaLinkedinIn/>
          </div>
        
        </div>

      </div>


      {/* section 4 */}
      <div className="flex flex-wrap justify-center gap-12  mt-44  mb-36">
     
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
          <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
            <FaCarSide className="text-white text-3xl" />
          </div>
        </div>
        <h1 className="text-lg font-semibold mb-1">FREE AND FAST DELIVERY</h1>
        <p className="text-sm">Free delivery for all orders over $140</p>
      </div>
  
      
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
          <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
            <CiHeadphones className="text-white text-3xl" />
          </div>
        </div>
        <h1 className="text-lg font-semibold mb-1">24/7 CUSTOMER SERVICE</h1>
        <p className="text-sm">Friendly 24/7 customer support</p>
      </div>
  
     
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
          <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
            <AiFillSafetyCertificate className="text-white text-3xl" />
          </div>
        </div>
        <h1 className="text-lg font-semibold mb-1">MONEY BACK GUARANTEE</h1>
        <p className="text-sm">We return money within 30 days</p>
      </div>
    </div>


    </div>
  )
}

export default About