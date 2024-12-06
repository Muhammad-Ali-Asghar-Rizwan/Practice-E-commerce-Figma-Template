import React from 'react'
import { RiCheckboxBlankFill } from "react-icons/ri";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";

function Category() {
  return (
    <div className='max-w-[1200px]  mx-auto'>
        <div className='mx-4'>
            <h1 className=' flex items-center font-bold gap-2  text-red-600 '><RiCheckboxBlankFill className='h-5 w-5'/>  Category</h1>

            <h1 className='text-[36px] font-semibold mt-5'>Browse By Category</h1>

        </div>
        <div>

        </div>
        <div className=' flex items-center justify-center '>
        <div className="grid gap-6 mt-[3rem] mb-14 items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
  <div className="w-[170px]  h-[145px] border-2 flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white">
    <CiMobile4  className='h-14 w-14'/> 
    <h1 className='mt-4'>Phones</h1>
  </div>
  <div className="w-[170px]  h-[145px] border-2 flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white">
    <HiOutlineComputerDesktop  className='h-14 w-14'/>
    <h1 className='mt-4'>Computers</h1>
  </div>
  <div className="w-[170px]  h-[145px] border-2 flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white">
    <BsSmartwatch  className='h-14 w-14'/> 
    <h1 className='mt-4'>SmartWatch</h1>

   </div>
  <div className="w-[170px]  h-[145px] border-2 flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white">
    <CiCamera className='h-14 w-14'/>  
    <h1 className='mt-4'>Camera</h1>
    </div>
  <div className="w-[170px]  h-[145px] border-2 flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white">
    <CiHeadphones  className='h-14 w-14'/>
    <h1 className='mt-4'>HeadPhones</h1>
   </div>
  <div className="w-[170px]  h-[145px] border-2 flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white">
    <LuGamepad  className='h-14 w-14'/> 
    <h1 className='mt-4'>Gaming</h1>
   </div>
</div>
</div>


    </div>
  )
}

export default Category