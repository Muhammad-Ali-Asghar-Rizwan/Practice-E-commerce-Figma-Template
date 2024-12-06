import React from 'react';
import BlogCard from '@/app/Sales/SalesCard';
import { RiCheckboxBlankFill } from "react-icons/ri";
import Link from 'next/link';


const Sales = () => {
  const posts = [
    {
      id: '1',
      title: 'HAVIT HV-G92 Gamepad',
      price: '$120 ',
      resp: '* * * * (88)',
      imageUrl: '/images/game.png',
    },
    {
      id: '2',
      title: 'AK-900 Wired Keyboard',
      price: '$960',
      resp: '* * * * (75)',
      imageUrl: '/images/key.png',
    },
    {
      id: '3',
      title: 'IPS LCD Gaming Monitor',
      price: '370',
      resp: '* * * * (99)',
      imageUrl: '/images/tv.png',
    },
    {
      id: '4',
      title: 'S-Series Comfort Chair ',
      price: '$375',
      resp: '* * * * (99)',
      imageUrl: '/images/kursi.png',
    },
    // {
    //   id: '5',
    //   title: 'Next.Js 15',
    //   price: 'Leveraging Middleware in Next.js 15 for Smarter Applications',
    //   resp: '',
    //   imageUrl: '/images/next.jpg',
    // },
    // {
    //   id: '6',
    //   title: 'Next.Js 15',
    //   price: '10 Proven Tips to Optimize Your Next.js 15 Applications for Performance',
    //   resp: '',
    //   imageUrl: '/images/next.jpg',
    // },
    // Add more unique entries as needed
  ];

  return (
    <div className="my-8 mt-[10rem] max-w-[1200px] mx-auto">
        <h1 className=' flex items-center font-bold gap-2 mx-8 text-red-600 '><RiCheckboxBlankFill className='h-5 w-5'/>        Today</h1>
        <div className="flex flex-col md:flex-row items-center mt-6 mx-5">
  <div>
    <h1 className="text-3xl sm:text-4xl font-bold text-center md:text-left">
      Flash Sales
    </h1>
  </div>
  <div className="md:ml-20 mt-4 md:mt-0">
    <div className="flex gap-4 sm:gap-6 justify-center md:justify-start">
      <p className="font-semibold">Days</p>
      <p className="font-semibold">Hours</p>
      <p className="font-semibold">Minutes</p>
      <p className="font-semibold">Seconds</p>
    </div>
    <div className="flex gap-4 sm:gap-6 justify-center md:justify-start mt-2">
      <p className="text-xl sm:text-2xl font-bold">03</p>
      <p className="text-xl sm:text-2xl font-bold text-red-500">:</p>
      <p className="text-xl sm:text-2xl font-bold">23</p>
      <p className="text-xl sm:text-2xl font-bold text-red-500">:</p>
      <p className="text-xl sm:text-2xl font-bold">19</p>
      <p className="text-xl sm:text-2xl font-bold text-red-500">:</p>
      <p className="text-xl sm:text-2xl font-bold">56</p>
    </div>
  </div>
</div>

      {/* <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the World of AI and Technology
      </h1> */}
      <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <BlogCard post={post} isDarkBackground={index % 2 === 0} />
          </div>
        ))}
      </div>
        <Link href="/AllProduct">
      <div className='flex items-center justify-center mt-16'>
            <button className='w-[234px] text-[18px] rounded-lg text-white h-[56px] bg-[#DB4444] hover:bg-[#ff4949]'>View All Products</button>
        </div>
        </Link>


        <div className='border-b-[1.5px] mt-12'> </div>
    </div>
  );
};

export default Sales;
