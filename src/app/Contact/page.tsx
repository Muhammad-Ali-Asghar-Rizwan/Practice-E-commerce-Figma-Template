

import { Mail, Phone } from 'lucide-react'
import React from 'react'

function Contact() {
  return (
    <div className='max-w-[1200px] mx-auto py-14'>


        <div className='flex flex-col lg:flex lg:flex-row items-center gap-8'>
            {/* left Box */}
            <div className='w-[300] md:w-[340px] h-[487px] shadow-lg px-7 py-10'>

                <div className='flex items-center gap-6'>
                    <div className='h-[40px] w-[40px] rounded-[50%] bg-[#DB4444] text-white flex items-center justify-center' >
                        <Phone/>
                    </div>
                    <h1 className='text-[16px] font-medium' >Call To Us</h1>
                </div>

                <p className='mt-7 '>We are available 24/7, 7 days a week.</p>
                <p className='mt-4'>Phone: +8801611112222</p>

                <div className='border-b-2 mt-9'></div>


                <div className='flex items-center gap-6 mt-9'>
                    <div className='h-[40px] w-[40px] rounded-[50%] bg-[#DB4444] text-white flex items-center justify-center' >
                        <Mail/>
                                            </div>
                    <h1 className='text-[16px] font-medium' >Call To Us</h1>
                </div>

                <h1 className='w-[250px] mt-7'>Fill out our form and we will contact you within 24 hours.</h1>
                <p className='mt-6'>Emails: customer@exclusive.com</p>
                <p className='mt-6'>Emails: support@exclusive.com</p>
            </div>


            {/* Right Box */}
            <div className='w-[3md00px] md:w-[800px]  h-[487px] shadow-lg px-7 py-10'>
                <div className='flex flex-col md:flex md:flex-row  items-center justify-center gap-5 '>
                    <input type="text" placeholder='Your Name '  className='w-[235px] h-[50px] bg-[#F5F5F5] placeholder:pl-5'/>
                    <input type="text" placeholder='Your Email '  className='w-[235px] h-[50px] bg-[#F5F5F5] placeholder:pl-5'/>
                    <input type="text" placeholder='Your Phone '  className='w-[235px] h-[50px] bg-[#F5F5F5] placeholder:pl-5'/>
                </div>
                <textarea cols={99} rows={10} placeholder='Your Massage' className='hidden md:flex bg-[#F5F5F5] mt-7 text-slate-400  placeholder:pl-5 pt-4'></textarea>
                <div className='flex items-center justify-center md:justify-end'>
                    <button className='w-[215px] h-[56px] bg-[#DB4444] font-semibold text-white flex items-center justify-center mt-5  rounded-lg ' >Send Massage</button>
                </div>
            </div>

        </div>





</div>

  )
}

export default Contact