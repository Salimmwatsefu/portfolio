import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";




function BlogCard() {
  return (
    <article className=" has-thumbnail bg-white ml-14 rounded-lg shadow-2xl dark:shadow-md shadow-stone-600 dark:shadow-slate-500 overflow-hidden h-[338px] w-[900px] dark:bg-gray-800/50  ">
        <div className=' flex  '>
      <div className=' w-[338px] h-[338px] flex-shrink-0'>
        <img src="https://images.unsplash.com/photo-1510070009289-b5bc34383727?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" alt="" 
        
        className=' object-cover  w-full h-full '
        />
      </div>
      <div className=' mt-5 ml-7'>
        

        <h2 className=' mt-5 font-semibold  text-3xl overflow-hidden text-ellipsis dark:text-gray-100 '
        style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        > Knowing CSS is Mastery to Frontend Development and an Important Skill
        for Building Beautiful and Responsive Interfaces</h2>
        <p className=' mt-5 text-gray-500 pr-2 overflow-hidden text-ellipsis '
         style={{
            display: '-webkit-box',
            WebkitLineClamp: 5,
            WebkitBoxOrient: 'vertical',
          }}
        >We can anchor one element to another. We can also attach one element to multiple anchors. In this experiment, Ryan riffs on those ideas and comes up with a new way to transition between two anchors and the result is a practical use case that would normally require JavaScript.</p>

        <div className=' mt-10'>
            <div className='flex space-x-2 text-sm text-teal-900 dark:text-teal-500 syne-font'>
                <p>11 November, 2024</p>
                <span>.</span>
                <p>3 min read</p>
                <p><CiMenuKebab className='ml-[15px] text-xl' /></p>
                

                <p className=''><FaArrowRight className='ml-[235px] text-lg' /></p>
            </div>
        </div>
      </div>
      </div>


    </article>
  );
}

export default BlogCard;
