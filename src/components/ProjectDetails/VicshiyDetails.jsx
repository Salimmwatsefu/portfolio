import React from 'react'
import { GiWorld } from "react-icons/gi";

import { FaGithub } from "react-icons/fa";

function VicshiyDetails() {
  return (
    <div className='ml-3 pb-20'>
        <div className='mt-5'>
            <h1 className='text-lg font-bold'>Vicshiy Tours and Travels</h1>
            <p className='mt-3 text-sm text-gray-700'>This is Vicshiy Tours and Travel official website</p>
        </div>

        <div className=' mt-10 flex justify-center'>
            <img src='/vicshiy.png' alt='vicshiy' className=' rounded-lg' />
        </div>

        <div className=' mt-6'>
            <h3 className='font-semibold'>About</h3>

            <p className='mt-5 text-sm text-gray-700'>
            Vicshiy tours and travel is the leading provider of bespoke travel experiences, specializing in crafting unforgettable journeys throughout East Africa
Our mission at Vicshiy tours and travel is to create extraordinary travel experiences that exceed our clients expectations
            </p>
        </div>

        <div className=' mt-6'>
            <h4 className='font-semibold'>Technologies </h4>
            <div class="flex gap-2 mt-4 text-black text-xs font-bold ">
    <span className='bg-[#efe9e4] backdrop-blur-md  py-2 px-4 rounded-md  shadow-sm'>React</span>
    <span className='bg-[#efe9e4] backdrop-blur-md  py-2 px-4 rounded-md  shadow-sm'>Javascript</span>
    <span className='bg-[#efe9e4] backdrop-blur-md  py-2 px-4 rounded-md  shadow-sm'>Framer Motion</span>
    <span className='bg-[#efe9e4] backdrop-blur-md  py-2 px-4 rounded-md  shadow-sm'>Emailjs</span>

</div>
        </div>

        <div className=' flex gap-20'>

        <div className=' mt-10'>
            <h4 className=' flex gap-2 font-semibold'>
                <span><GiWorld className='mt-1' /></span>
                <span>Website</span>
            </h4>
            <p className=' text-sm font-semibold mt-2 underline  text-gray-500 hover:text-gray-800 italic syne-font'>
                <a href='https://vicshiy.vercel.app/'>
                Live link
                </a>
            </p>
        </div>

        <div className=' mt-10'>
            <h4 className=' flex gap-2 font-semibold'>
                <span><FaGithub className='mt-1' /></span>
                <span>Github</span>
            </h4>
            <p className=' text-sm font-semibold mt-2 underline  text-gray-500 hover:text-gray-800 italic syne-font'>
                <a href='https://github.com/Salimmwatsefu/Vicshiy'>
                Front-End Link
                </a>
            </p>

           
        </div>

        </div>



    </div>
  )
}

export default VicshiyDetails