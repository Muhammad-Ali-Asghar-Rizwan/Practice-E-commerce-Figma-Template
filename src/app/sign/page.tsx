import Link from 'next/link'
import React from 'react'

function Sign() {
  return (
    <div className=' max-w-[1200px] mx-auto' id='sign'>
        <div className='flex items-center justify-around py-9'>
            <div className="hidden md:flex">
                <img src='/images/account.png' className='w-[805px] h-[781px]'/>
            </div> 
            <div>
              <h1 className='text-4xl font-semibold'>Create an account</h1>
              <p className='mt-3'>Enter your details below</p>

              <input type="text"  placeholder='Name' className='mt-9 border-white hover:border-white'/>
              <div className='border-b-[1.5px] border-stone-400 mt-2'> </div>

              <input type="text"  placeholder='Email or Phone Number' className='mt-9'/>
              <div className='border-b-[1.5px] border-stone-400 mt-2'> </div>

              <input type="text"  placeholder='Password' className='border-none mt-9'/>
              <div className='border-b-[1.5px] border-stone-400 mt-2'> </div>

              <div className='w-[250px] sm:w-[371px] h-[56px] bg-[#DB4444] hover:bg-[#f43d3d] mt-12 rounded-lg text-white flex items-center justify-center'>
                <button>Create Account</button>
              </div>
              <div className='w-[250px] sm:w-[371px] h-[56px] border-2 border-stone-400 mt-3 rounded-lg flex items-center justify-center'>
                <button>Sign up with Google</button>
              </div>

              <div className='flex items-center justify-center gap-2 mt-10'>
              <p>
              Already have account?
              </p>
              <Link href="/Login" className='underline'>Log in</Link>
              </div>
 
            </div>

        </div>
    </div>
  )
}

export default Sign