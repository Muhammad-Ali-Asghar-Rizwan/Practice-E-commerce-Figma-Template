import React from 'react';

import { CiHeart } from "react-icons/ci";


interface BlogCardProps {
  post: { id: string; title: string; price: string; resp: string; imageUrl: string };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <div className='mx-8 '>
        <div className='h-[220px]  w-[230px] bg-[#F5F5F5]'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center justify-between gap-32 mt-2'>
                    {/* left */}
                    <div className='rounded-lg h-7 w-16 text-white flex items-center justify-center bg-red-500'>
                        <h1> -40 </h1>
                    </div>
                    {/* right */}
                    <div  className='h-8 w-8 bg-white rounded-[50%] flex items-center justify-center text-black font-bold'>
                    <CiHeart className='text-2xl'/>
                    </div>

                </div>

            <img
                src={post.imageUrl}
                alt={post.title}
                className="w-[190px] object-cover rounded-lg"
                />

                </div>
        </div>
        <a  href={`/posts/${post.id}`} >
            <button className='w-[229px] h-9 bg-black text-white flex items-center justify-center font-semibold hover:bg-white hover:text-black hover:border-2 hover:border-black hover:rounded-md'>Add To Cart  </button>
            </a>

        <div>
            <h1 className='text-[18px] mt-4 font-bold'>{post.title}</h1>
            <h2 className='text-red-600 font-semibold'>{post.price}</h2>
            {/* <h3 className='text-2xl text-yellow-600 flex items-center '>{post.resp}</h3> */}
        </div>

         

    </div>
    
  );
}
