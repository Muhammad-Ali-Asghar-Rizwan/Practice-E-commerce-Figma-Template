import Image from 'next/image'
import React from 'react'

function Music() {
  return (
<div className="max-w-[1200px] mx-auto bg-black">
  <div className="w-full h-auto px-6 py-8 text-white flex flex-col lg:flex-row items-center lg:justify-around">
    {/* Left Section */}
    <div className="mb-8 lg:mb-0">
      <h1 className="text-green-400 font-semibold text-lg">Categories</h1>
      <h1 className="text-[32px] md:text-[48px] font-semibold leading-tight max-w-[443px]">
        Enhance Your Music Experience
      </h1>
      <div className="flex gap-6 mt-6 flex-wrap">
        {/* Countdown Timer */}
        <div className="h-16 w-16 font-semibold text-[12px] text-black bg-white rounded-full flex flex-col items-center justify-center">
          <p>23</p>
          <p>Hours</p>
        </div>
        <div className="h-16 w-16 font-semibold text-[12px] text-black bg-white rounded-full flex flex-col items-center justify-center">
          <p>5</p>
          <p>Days</p>
        </div>
        <div className="h-16 w-16 font-semibold text-[12px] text-black bg-white rounded-full flex flex-col items-center justify-center">
          <p>59</p>
          <p>Minutes</p>
        </div>
        <div className="h-16 w-16 font-semibold text-[12px] text-black bg-white rounded-full flex flex-col items-center justify-center">
          <p>35</p>
          <p>Seconds</p>
        </div>
      </div>
      <div className="w-full lg:w-[171px] h-[56px] bg-[#00FF66] rounded-lg flex items-center justify-center mt-6">
        <button className="font-semibold text-black">Buy Now!</button>
      </div>
    </div>
    {/* Right Section */}
    <div className="flex items-center justify-center">
      <Image
        src="/images/radio.png"
        alt="Radio"
        width={400}
        height={400}
        className="w-full max-w-[400px] lg:max-w-[600px]"
      />
    </div>
  </div>
</div>

  )
}

export default Music