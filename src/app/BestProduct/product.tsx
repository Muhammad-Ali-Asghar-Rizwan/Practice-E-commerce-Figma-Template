import React from 'react';
import BlogCard from '@/app/Sales/SalesCard';
import { RiCheckboxBlankFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import ProductCard from './ProductCard';
import Link from 'next/link';


const Product = () => {
  const posts = [
    {
      id: '14',
      title: 'The north coat',
      price: '$260',
      resp: '* * * * (88)',
      imageUrl: '/images/music.png',
    },
    {
      id: '15',
      title: 'Gucci duffle bag',
      price: '$960',
      resp: '* * * * (75)',
      imageUrl: '/images/troli.png',
    },
    {
      id: '16',
      title: 'RGB liquid CPU Cooler',
      price: '$160',
      resp: '* * * * (99)',
      imageUrl: '/images/cloth.png',
    },
    {
      id: '17',
      title: 'Small BookSelf',
      price: '$360',
      resp: '* * * * (99)',
      imageUrl: '/images/pars.png',
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
        <h1 className=' flex items-center font-bold gap-2 mx-8 text-red-600 '><RiCheckboxBlankFill className='h-5 w-5'/> This Month</h1>
        <div className="flex flex-col justify-between md:flex-row items-center mt-6 mx-5">
  <div>
    <h1 className="text-3xl sm:text-4xl font-bold text-center md:text-left">
    Best Selling Products

    </h1>

  </div>
  <div className='w-[159px] bg-[#DB4444] hover:bg-[#fa4b4b] h-[56px] flex items-center justify-center text-white rounded-lg text-[17px]'>
    <Link  href="">View All</Link>
  </div>
</div>

      {/* <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the World of AI and Technology
      </h1> */}
      <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <ProductCard post={post} isDarkBackground={index % 2 === 0} />
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

export default Product;
