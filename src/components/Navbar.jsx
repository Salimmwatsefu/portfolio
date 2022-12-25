import React from 'react'
import { GoProject } from "react-icons/go";
import { FaUserTie } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";

function Navbar() {
  return (
    <div className='text-gray-600 flex'>
        <div className='w-48  ml-7 absolute -mt-8 '>
        <img src='sjmwatzz.png' alt='Logo' className='w-full '/>
        </div>

        <div>
            <p className=' ml-[400px] absolute font-bold hover:bg-teal-800 hover:text-white p-1 mt-10'>
                <a href='' className='flex'>
                    <TfiEmail className='text-xl'/>
                    <span className='ml-1 text-sm'>sjmwatsefu@gmail.com</span>
                </a>
            </p>
        </div>
        <div className='flex ml-[830px] pt-8'>
            <ul className='flex justify-end gap-6 font-normal'>
                <li className='hover:bg-teal-800 hover:text-white p-1'>
                    <a href='' className='flex '>
                    <GoProject className='text-xl'/>
                    <p className='ml-1 '>Projects</p>
                    </a>
                </li>
                <li className='flex'>
                <a href='' className='flex hover:bg-teal-800 hover:text-white p-1'>
                    <FaUserTie className='text-xl'/>
                    <p >Resume</p>
                </a>
                </li>
                <li className='flex'>
                <a href='' className='flex hover:bg-teal-800 hover:text-white p-1'>
                    <RiArticleFill className='text-xl'/>
                    <p>Shelf</p>
                </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar