import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import Link from 'next/link';
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image';
function HomePage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4">

  <div className="flex flex-col lg:flex-row items-center gap-10 py-">
    
    <div className="flex  flex-col sm:flex-row gap-3 w-full lg:w-auto">
      <div className='mt-10'>
        <h1 className="mt-3 gap-14 flex items-center justify-between">
          Woman’s Fashion <MdArrowForwardIos />
        </h1>
        <h1 className="mt-3 flex items-center justify-between">
          Men’s Fashion <MdArrowForwardIos />
        </h1>
        <h1 className="mt-3">Electronics</h1>
        <h1 className="mt-3">Home & Lifestyle</h1>
        <h1 className="mt-3">Medicine</h1>
        <h1 className="mt-3">Sports & Outdoor</h1>
        <h1 className="mt-3">Baby’s & Toys</h1>
        <h1 className="mt-3">Groceries & Pets</h1>
        <h1 className="mt-3">Health & Beauty</h1>
      </div>
      <div className="border-l hidden sm:block h-96"></div>
    </div>

   
    <div className="flex flex-col mt-11 lg:flex-row items-center justify-center text-white bg-black w-full lg:w-[892px] h-auto lg:h-[344px]">
      
      <div className="text-center lg:text-left p-6">
        <p className="flex items-center justify-center lg:justify-start gap-7">
          <FaApple className="w-[40px] h-[49px]" /> iPhone 14 Series
        </p>
        <h1 className="text-[32px] lg:text-[48px] font-semibold leading-tight mt-4">
          Up to 10% off Voucher
        </h1>
        <Link href="" className="flex items-center justify-center lg:justify-start mt-9 gap-1 hover:underline">
          Shop Now <IoIosArrowRoundForward className="w-8 mt-1 h-8" />
        </Link>
      </div>
      
      <div className="mt-6 lg:mt-0">
        <Image
          src="/images/hero.png"
          alt="hero"
          width={300}
          height={300}
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[496px] lg:h-[332px]"
        />
      </div>
    </div>
  </div>
</div>

  )
}

export default HomePage