import React from 'react'

import Link from 'next/link';
import AllProductCard from './AllCard';



function AllProduct() {
    const posts = [
        {
          id: '18',
          title: 'Our Products',
          price: '$100',
          resp: '* * * * (88)',
          imageUrl: '/images/pars.png',
        },
        {
          id: '19',
          title: 'CANON EOS DSLR Camera',
          price: '$960',
          resp: '* * * * (75)',
          imageUrl: '/images/music.png',
        },
        {
          id: '20',
          title: 'ASUS FHD Gaming Laptop',
          price: '$160',
          resp: '* * * * (99)',
          imageUrl: '/images/game1.png',
        },
        {
          id: '21',
          title: 'Curology Product Set ',
          price: '$360',
          resp: '* * * * (99)',
          imageUrl: '/images/cloth1.png',
        },
        {
          id: '22',
          title: 'Kids Electric Car',
          price: '$960',
          resp: '',
          imageUrl: '/images/laptop.png',
        },
        {
          id: '23',
          title: 'Jr. Zoom Soccer Cleats',
          price: '$1160',
          resp: '',
          imageUrl: '/images/tv.png',
        },
        {
          id: '24',
          title: 'GP11 Shooter USB Gamepad',
          price: '$660',
          resp: '',
          imageUrl: '/images/game.png',
        },
        {
          id: '25',
          title: 'Quilted Satin Jacket',
          price: '$660',
          resp: '',
          imageUrl: '/images/key.png',
        },
        
        // Add more unique entries as needed
      ];
    
      return (
        <div className="my-8 mt-[10rem] max-w-[1200px] mx-auto">
            {/* <h1 className=' flex items-center font-bold gap-2 mx-8 text-red-600 '><RiCheckboxBlankFill className='h-5 w-5'/> Our Products</h1> */}
            <div className="flex flex-col justify-between md:flex-row items-center mt-6 mx-5">
      <div>
        <h1 className="text-[20px] ml-3 mb-20  text-center md:text-left">
        Wishlist (4)
    
        </h1>
    
      </div>
      <div className='w-[189px] border-2 h-[56px] flex items-center justify-center  rounded-lg text-[17px]'>
        <Link  href="/">Move All to Bag</Link>
      </div>
    </div>
    
          {/* <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
            Exploring the World of AI and Technology
          </h1> */}
          <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {posts.map((post) => (
              <div className="fade-in" key={post.id}>

                <AllProductCard post={post} />
              </div>
            ))}
          </div>
          <div className='flex items-center justify-center mt-16'>
                <button className='w-[234px] text-[18px] rounded-lg text-white h-[56px] bg-[#DB4444] hover:bg-[#ff4949]'>View All Products</button>
            </div>
    
    
            <div className='border-b-[1.5px] mt-12'> </div>
        </div>
      )
}

export default AllProduct