import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Menu } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import Link from 'next/link';


function Navbar() {
  return (
    <div className=''>
      <header className=" max-w-7xl mx-auto body-font">
  <div className="flex  items-center justify-between h-20 mx-5">
   <h1 className='text-[24px] font-bold'>Exclusive</h1>
    <nav className=" hidden lg:flex  gap-[48px] ml-6">
      <Link href="/"  className="mr-5  hover:text-gray-900 hover:cursor-pointer hover:underline">Home</Link>
      <Link href="/Contact" className="mr-5  hover:text-gray-900 hover:cursor-pointer hover:underline">Contact</Link>
      <Link href='/About' className="mr-5  hover:text-gray-900 hover:cursor-pointer hover:underline">About</Link>
      <Link href="/sign" className="mr-5  hover:text-gray-900 hover:cursor-pointer hover:underline">Sign Up</Link>
    </nav>


   

    <div className=' flex items-center  mt-0 '>
      <input type="text" placeholder='What are you looking for?' className='hidden md:block w-[263px] h-[38px] rounded-md bg-[#F5F5F5] placeholder:pl-3'/>
      <IoSearchOutline  className='w-6 h-6  relative right-8'/>
      <div className='hidden md:flex gap-3'>
      <CiHeart className='w-8 h-8'/>
      <MdOutlineShoppingCart  className='w-8 h-8'/>
      </div>



      <Sheet>
        <SheetTrigger className='lg:hidden'>
            <Menu/>
        </SheetTrigger>

        <SheetContent>
                <SheetHeader>
                    <SheetTitle>MENU</SheetTitle>
                    <SheetDescription>Click outside to close</SheetDescription>
                </SheetHeader>
          <ul className='flex flex-col gap-5 mt-6'>
          <li>
          <Link href="/"  className="mr-5  hover:text-gray-900 hover:cursor-pointer hover:underline">Home</Link>
          </li>
     <li>
      <Link href="/Contact" className="mr-5  hover:text-gray-900 hover:cursor-pointer hover:underline">Contact</Link>
      </li> 
     <li>
      <Link href='/About' className="mr-5  hover:text-gray-900 hover:cursor-pointer hover:underline">About</Link>
      </li> 
      <li>
        <Link href="/sign" className="mr-5  hover:text-gray-900 hover:cursor-pointer hover:underline">Sign Up</Link>
        </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>





  
  </div>


  
</header>
<div className='border-b-[1.2px] '> </div>


    </div>
  )
}

export default Navbar