

"use client";

import Sales from '@/app/Sales/page';
import { Car, CircleAlert,  Heart, } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import React from 'react';

const posts = [
  {
    id: '1',
    title: 'HAVIT HV-G92 Gamepad',
    price:"$120",
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
    date: '2024-11-28',
    image: '/images/game.png',
  },
  {
    id: '2',
    title: 'AK-900 Wired Keyboard',
    price: '$960',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
    resp: '* * * * (75)',
    image: '/images/key.png',
  },
  {
    id: '3',
    title: 'IPS LCD Gaming Monitor',
    price: '370',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '* * * * (99)',
    image: '/images/tv.png',
  },
  {
    id: '4',
    title: 'S-Series Comfort Chair ',
    price: '$375',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '* * * * (99)',
    image: '/images/kursi.png',
  },
  {
    id: '6',
    title: 'Our Products',
    price: '$100',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '* * * * (88)',
    image: '/images/choco.png',
  },
  {
    id: '7',
    title: 'CANON EOS DSLR Camera',
    price: '$960',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '* * * * (75)',
    image: '/images/camera.png',
  },
  {
    id: '8',
    title: 'ASUS FHD Gaming Laptop',
    price: '$160',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '* * * * (99)',
    image: '/images/laptop.png',
  },
  {
    id: '9',
    title: 'Curology Product Set ',
    price: '$360',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '* * * * (99)',
    image: '/images/pars.png',
  },
  {
    id: '10',
    title: 'Kids Electric Car',
    price: '$960',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '',
    image: '/images/car.png',
  },
  {
    id: '11',
    title: 'Jr. Zoom Soccer Cleats',
    price: '$1160',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '',
    image: '/images/jota.png',
  },
  {
    id: '12',
    title: 'GP11 Shooter USB Gamepad',
    price: '$660',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '',
    image: '/images/game1.png',
  },
  {
    id: '13',
    title: 'Quilted Satin Jacket',
    price: '$660',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '',
    image: '/images/cloth1.png',
  },
  {
    id: '14',
    title: 'The north coat',
    price: '$260',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '* * * * (88)',
    image: '/images/music.png',
  },
  {
    id: '15',
    title: 'Gucci duffle bag',
    price: '$960',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '* * * * (75)',
    image: '/images/troli.png',
  },
  {
    id: '16',
    title: 'RGB liquid CPU Cooler',
    price: '$160',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '* * * * (99)',
    image: '/images/cloth.png',
  },
  {
    id: '17',
    title: 'Small BookSelf',
    price: '$360',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '* * * * (99)',
    image: '/images/pars.png',
  },

  {
    id: '18',
    title: 'Our Products',
    price: '$100',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '* * * * (88)',
    image: '/images/pars.png',
  },
  {
    id: '19',
    title: 'CANON EOS DSLR Camera',
    price: '$960',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '* * * * (75)',
    image: '/images/music.png',
  },
  {
    id: '20',
    title: 'ASUS FHD Gaming Laptop',
    price: '$160',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '* * * * (99)',
    image: '/images/game1.png',
  },
  {
    id: '21',
    title: 'Curology Product Set ',
    price: '$360',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '* * * * (99)',
    image: '/images/cloth1.png',
  },
  {
    id: '22',
    title: 'Kids Electric Car',
    price: '$960',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '',
    image: '/images/laptop.png',
  },
  {
    id: '23',
    title: 'Jr. Zoom Soccer Cleats',
    price: '$1160',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '',
    image: '/images/tv.png',
  },
  {
    id: '24',
    title: 'GP11 Shooter USB Gamepad',
    price: '$660',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '',
    image: '/images/game.png',
  },
  {
    id: '25',
    title: 'Quilted Satin Jacket',
    price: '$660',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',

    resp: '',
    image: '/images/key.png',
  },

  

  
];

export default function Post() {
  const params = useParams(); // Access dynamic route parameters
  const id = params?.id; // Ensure `id` is defined

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h1 className='text-2xl font-bold text-center mt-10'>Post Not Found</h1>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split('/n').map((para, index) => (
      <p key={index} className='mt-4 text-justify'>
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className='max-w-5xl mx-auto mt-11'>
      <div className='flex flex-col md:flex md:flex-row items-center justify-between'>

     
      {post.image && (
        <div className='w-[300px] md:w-[500px] h-[600px] flex  items-center justify-center bg-[#F5F5F5] rounded'>

        <Image src={post.image} alt={post.title} width={200} height={200} className='w-[426px] h-auto rounded-md mt-4' />
        </div>
      )}

      <div className='mt-6 text-lg text-slate-700'>
      <h1 className='md:text-2xl text-3xl font-bold text-black '>{post.title}</h1>
      <h1 className='text-[15px] mt-2 font-bold text-red-600 '>{post.price}</h1>
      <div className='w-[250px] md:w-[373px]'>
        {renderParagraphs(post.description)}
      </div>


      <div className='border-b-2 mt-10'></div>
      {/* color */}
      <div className='flex gap-4 items-center  mt-6'>
        <h1 className='text-[20px] '>Colours: </h1>
        <div className='h-5 w-5 bg-blue-400  border-black  border-2 rounded-[50%]'></div>
        <div className='h-5 w-5 bg-[#DB4444] rounded-[50%]'></div>
      </div>

      {/* size */}
      <div className='flex gap-4 items-center  mt-6'>
        <h1 className='text-[20px] '>Size:</h1>
        <div className='h-8 flex items-center text-[12px] text-black hover:bg-[#DB4444] hover:text-white hover:border-none justify-center w-8  border-black  border-2 rounded-lg'>XS</div>
        <div className='h-8 flex items-center text-[12px] text-black hover:bg-[#DB4444] hover:text-white hover:border-none justify-center w-8 border-black border-2  rounded-lg '>S</div>
        <div className='h-8 flex items-center text-[12px] text-black hover:bg-[#DB4444] hover:text-white hover:border-none justify-center w-8 border-black border-2  rounded-lg '>M</div>
        <div className='h-8 flex items-center text-[12px] text-black hover:bg-[#DB4444] hover:text-white hover:border-none justify-center w-8 border-black border-2  rounded-lg '>L</div>
        <div className='h-8 flex items-center text-[12px] text-black hover:bg-[#DB4444] hover:text-white hover:border-none justify-center w-8 border-black border-2  rounded-lg '>XL</div>
      </div>

      {/* maindiv */}
        <div className='flex flex-col md:flex md:flex-row  md:items-center justify-center mt-6 gap-7'>
      {/* incr & decr */}
      <div className='flex '>
        <div className='w-10 font-bold flex items-center justify-center  h-11  border border-stone-400 '>-</div>
        <div className='w-20 font-bold flex items-center justify-center  h-11  border border-stone-400 '>2</div>
        <div className='w-10 font-bold flex items-center justify-center bg-[#DB4444] text-white  h-11  border border-stone-400 '>+</div>
      </div>
      {/* buy */}
      <button className='h-11 w-40 bg-[#DB4444] text-white flex items-center justify-center'>Buy Now</button>
      {/* dil */}
      <div className='h-10 w-10 border-2 border-black flex items-center justify-center rounded-lg '><Heart/> </div>
      </div>

      {/* delivery */}
      <div className='mt-5'>
        <div className='flex gap-3 items-center   h-24 border-2 px-5 '>
          <Car className=''/> 
          <div>
            <h1 className='text-black  text-[16px] font-medium'>Free Delivery</h1>
            <p className='underline mt-1  text-[10px]'>Enter your postal code for Delivery Availability</p>
          </div>
        </div>
        <div className='flex gap-3 items-center w-64 md:w-96  h-24 border-2 px-5 '>
          <CircleAlert/>
          <div className=''>
            
            <h1 className='text-black  text-[16px] font-medium'>Return Delivery</h1>
            <p className='underline mt-1  text-[10px]'>Free 30 Days Delivery Returns. Details</p>
          </div>
        </div>
        
      </div>
        </div>
      </div>
      <Sales/>
    </div>
  );
}
