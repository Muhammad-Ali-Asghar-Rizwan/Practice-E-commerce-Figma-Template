import Image from 'next/image';
import React from 'react'




interface ProductCardProps {
    post: { id: string; title: string; price: string; resp: string; imageUrl: string };
   
  }
  
function ExpProductCard({ post,  }:  ProductCardProps) {
  return (
    <div>
         <div className='mx-8'>
        <div className='h-[250px] flex items-center justify-center  w-[270px] bg-[#F5F5F5]'>
            <div className='flex flex-col items-center justify-center'>
               

            <Image
                src={post.imageUrl}
                alt={post.title}
                width={200} 
                height={200}
                className="w-[190px] object-cover rounded-lg"
                />

                </div>
        </div>
        <a  href={`/posts/${post.id}`} >
            <button className='w-[269px] h-9 bg-black text-white flex items-center justify-center font-semibold hover:bg-white hover:text-black hover:border-2 hover:border-black hover:rounded-md'>Add To Cart  </button>
            </a>

        <div>
            <h1 className='text-[18px] mt-4 font-bold'>{post.title}</h1>
            <h2 className='text-red-600 font-semibold'>{post.price}</h2>
            {/* <h3 className='text-2xl text-yellow-600 flex items-center '>{post.resp}</h3> */}
        </div>


         

    </div>
    </div>
  )
}

export default ExpProductCard