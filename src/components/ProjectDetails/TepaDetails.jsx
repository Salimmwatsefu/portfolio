import React from 'react'
import { GiWorld } from "react-icons/gi";

import { FaGithub } from "react-icons/fa";

function TepaDetails() {
  return (
    <div className='ml-3 pb-20'>
        <div className='mt-5'>
            <h1 className='text-lg font-bold'>TePA</h1>
            <p className='mt-3 text-sm text-gray-700'>Teenage Pregnancy Awareness Project official website</p>
        </div>

        <div className=' mt-10 flex justify-center'>
            <img src='/tepass.png' alt='' className=' rounded-lg' />
        </div>

        <div className=' mt-6'>
            <h3 className='font-semibold'>About</h3>

            <p className='mt-5 text-sm text-gray-700'>
           This is the official website for the Teenage Pregnancy Awareness Project showcasing what they do and some of their works.
           The main objective of TePA is to actively reduce teenage pregnancies, foster entrepreneurship, ensure access to menstrual hygiene products, and strengthen family bonds.
    
            </p>
        </div>

        <div className=' mt-6'>
            <h4 className='font-semibold'>Technologies </h4>
            <div class="flex gap-2 mt-4 text-black text-xs font-bold ">
    <span className='bg-[#efe9e4] backdrop-blur-md  py-2 px-4 rounded-md  shadow-sm'>Reactjs</span>
    <span className='bg-[#efe9e4] backdrop-blur-md  py-2 px-4 rounded-md  shadow-sm'>JavaScript</span>
    <span className='bg-[#efe9e4] backdrop-blur-md  py-2 px-4 rounded-md  shadow-sm'>Email Js</span>
    <span className='bg-[#efe9e4] backdrop-blur-md  py-2 px-4 rounded-md  shadow-sm'>React Helmet</span>

</div>
        </div>

        <div className=' flex gap-20'>

        <div className=' mt-10'>
            <h4 className=' flex gap-2 font-semibold'>
                <span><GiWorld className='mt-1' /></span>
                <span>Website</span>
            </h4>
            <p className=' text-sm font-semibold mt-2 underline  text-gray-500 hover:text-gray-800 italic syne-font'>
                <a href='https://tepa-eight.vercel.app/'>
                TePA link
                </a>
            </p>
        </div>

        <div className=' mt-10'>
            <h4 className=' flex gap-2 font-semibold'>
                <span><FaGithub className='mt-1' /></span>
                <span>Github</span>
            </h4>
            <p className=' text-sm font-semibold mt-2 underline  text-gray-500 hover:text-gray-800 italic syne-font'>
                <a href='https://github.com/Salimmwatsefu/tepa'>
                Front-End Link
                </a>
            </p>

            
        </div>

        </div>



    </div>
  )
}

export default TepaDetails