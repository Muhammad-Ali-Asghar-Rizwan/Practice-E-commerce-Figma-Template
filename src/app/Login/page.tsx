import React from 'react'

function page() {
  return (
    <div>
            <div className=' max-w-[1200px] mx-auto' id='sign'>
        <div className='flex items-center justify-around py-9'>
            <div className='hidden md:flex'>
                <img src='/images/account.png' className='w-[805px] h-[781px]'/>
            </div> 
            <div>
              <h1 className='text-4xl font-semibold'>Log in to Exclusive</h1>
              <p className='mt-3'>Enter your details below</p>

              

              <input type="text"  placeholder='Email or Phone Number' className='mt-9'/>
              <div className='border-b-[1.5px] border-stone-400 mt-2'> </div>

              <input type="text"  placeholder='Password' className='border-none mt-9'/>
              <div className='border-b-[1.5px] border-stone-400 mt-2'> </div>

            
             <div className='flex items-center justify-between mt-10'>
                <button className='h-[56px] rounded-lg flex justify-center items-center  w-[143px] bg-[#DB4444] hover:bg-[#f84040] text-white text-[16px]'>Log In</button>
                <button className='text-[#DB4444] hover:underline'>Forget Password?</button>
             </div>

             
            </div>

        </div>
    </div>
    </div>
  )
}

export default page