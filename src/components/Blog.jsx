

import React from 'react'
import { NavLink } from 'react-router-dom'; // Use for active link styling if using react-router
import BlogCard from './UI/BlogCard';
import Breadcrumb1 from './UI/BreadCrumb1';

function Blog() {
  return (
    <div className='py-8 '>
      <Breadcrumb1 currentPath='/blog' currentLabel='Blog' />

      <div className='sm:ml-16'>
        <h1 className='font-bold text-4xl text-gray-700 dark:text-gray-300 text-center '>MY BLOG</h1>
        <h2 className='font-bold text-5xl text-teal-600 -mt-7 text-center'>_</h2>
        <p className='mt-3 text-lg text-gray-700 dark:text-gray-400 text-center'>
          Here you will find some of the personal and clients projects that I created
        </p>
      </div>

      <div className='mt-14 mx-auto w-[90%] flex justify-center items-center h-[1px] bg-gray-200'></div>

      <div className=' mt-10 flex  '>
        <BlogCard />
      </div>
    </div>
  );
}

export default Blog;
