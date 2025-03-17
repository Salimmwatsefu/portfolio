import React from 'react'
import { GiWorld } from "react-icons/gi";

import { FaGithub } from "react-icons/fa";

function MoodlyDetails() {
  return (
    <div className='ml-3 pb-20'>
        <div className='mt-5'>
            <h1 className='text-lg font-bold'>Moodly</h1>
            <p className='mt-3 text-sm text-gray-700'>A student mood tracking application for USIU-Africa</p>
        </div>

        <div className=' mt-10 flex justify-center'>
            <img src='/moodly3.png' alt='' className=' rounded-lg' />
        </div>

        <div className=' mt-6'>
            <h3 className='font-semibold'>About</h3>

            <p className='mt-5 text-sm text-gray-700'>
            Moodly is a free and easy to use daily mood tracker for USIU students. Lectures track the moods of their students and then using AI the applications suggest activities that mat lift the mood or maintain it 
    
            </p>
        </div>

        <div className=' mt-6'>
            <h4 className='font-semibold'>Technologies </h4>
            <div class="flex gap-2 mt-4 text-black text-xs font-bold ">
    <span className='bg-[#efe9e4] backdrop-blur-md  py-2 px-4 rounded-md  shadow-sm'>ReactJS</span>
    <span className='bg-[#efe9e4] backdrop-blur-md  py-2 px-4 rounded-md  shadow-sm'>Javascript</span>
    <span className='bg-[#efe9e4] backdrop-blur-md  py-2 px-4 rounded-md  shadow-sm'>Flask</span>
    <span className='bg-[#efe9e4] backdrop-blur-md  py-2 px-4 rounded-md  shadow-sm'>Postgresql</span>

</div>
        </div>

        <div className=' flex gap-20'>

        <div className=' mt-10'>
            <h4 className=' flex gap-2 font-semibold'>
                <span><GiWorld className='mt-1' /></span>
                <span>Website</span>
            </h4>
            <p className=' text-sm font-semibold mt-2 underline  text-gray-500 hover:text-gray-800 italic syne-font'>
                <a href='https://usiu-mood-tracker.netlify.app/'>
                Moodly link
                </a>
            </p>
        </div>

        <div className=' mt-10'>
            <h4 className=' flex gap-2 font-semibold'>
                <span><FaGithub className='mt-1' /></span>
                <span>Github</span>
            </h4>
            <p className=' text-sm font-semibold mt-2 underline  text-gray-500 hover:text-gray-800 italic syne-font'>
                <a href='https://github.com/Salimmwatsefu/mood-tracker'>
                Front-End Link
                </a>
            </p>

            <p className=' text-sm font-semibold mt-2 underline  text-gray-500 hover:text-gray-800 italic syne-font'>
                <a href='https://github.com/Salimmwatsefu/inventory-backend'>
                Back-End Link
                </a>
            </p>
        </div>

        </div>



    </div>
  )
}

export default MoodlyDetails