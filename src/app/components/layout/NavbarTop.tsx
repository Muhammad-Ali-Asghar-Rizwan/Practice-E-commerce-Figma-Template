

import Link from 'next/link';
import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

function NavbarTop() {
  return (
    <div className='bg-black h-[48px]'>


    <div className="max-w-7xl mx-auto h-[48px] text-white bg-black flex items-center justify-between px-4 relative">
      {/* Centered Text with ShopNow */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-sm md:text-base">
        <p className="hidden sm:block truncate">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link href="/" className="font-bold underline">ShopNow</Link>
      </div>

      {/* Right Section */}
      <div className="ml-auto flex items-center text-sm md:text-base">
        <h1 className="flex items-center gap-2">
          English <IoIosArrowDown />
        </h1>
      </div>
    </div>
    </div>
  );
}

export default NavbarTop;
