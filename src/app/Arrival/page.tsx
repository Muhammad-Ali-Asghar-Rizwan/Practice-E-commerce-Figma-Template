import Image from 'next/image';
import React from 'react'
import { RiCheckboxBlankFill } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";
import { AiFillSafetyCertificate } from "react-icons/ai";

function Arrival() {
  return (
    <div className="mb-[10rem] mt-[10rem] max-w-[1200px] mx-auto px-4">
    
    <h1 className="flex items-center font-bold gap-2 text-red-600">
      <RiCheckboxBlankFill className="h-5 w-5" /> Featured
    </h1>
    <h1 className="text-3xl mt-6 sm:text-4xl font-bold text-center md:text-left">
    New Arrival
    </h1>
  
    
    <div className="mt-20 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[16rem] lg:auto-rows-[20rem] mb-28">
      
      <div className="bg bg-black text-white px-4 row-span-2 flex flex-col justify-end relative">
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h1 className="text-2xl mb-3 font-semibold">PlayStation 5</h1>
          <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
          <button className="mt-4 mb-5 hover:underline">Shop Now</button>
        </div>
      </div>
  
      
      <div className="bg2 bg-black text-white px-4 col-span-1 sm:col-span-2 flex flex-col justify-end relative">
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h1 className="text-2xl mb-3 font-semibold">Women’s Collections</h1>
          <p className="text-sm">Featured women collections that give you another vibe.</p>
          <button className="mt-4 mb-5 hover:underline">Shop Now</button>
        </div>
      </div>
  
   
      <div className="bg3 bg-black text-white px-4 flex flex-col justify-end relative">
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h1 className="text-2xl mb-1 font-semibold">Speakers</h1>
          <p className="text-sm">Amazon wireless speakers</p>
          <button className="mt-4 mb-5 hover:underline">Shop Now</button>
        </div>
      </div>
  
      
      <div className="bg4 bg-black text-white px-4 flex flex-col justify-end relative">
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h1 className="text-2xl mb-1 font-semibold">Perfume</h1>
          <p className="text-sm">GUCCI INTENSE OUD EDP</p>
          <button className="mt-4 mb-5 hover:underline">Shop Now</button>
        </div>
      </div>
    </div>
  
    
    <div className="flex flex-wrap justify-center gap-12">
     
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

export default Arrival