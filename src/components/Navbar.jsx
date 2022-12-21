import React from 'react'
import { GoProject } from "react-icons/go";
import { FaUserTie } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";

function Navbar() {
  return (
    <div className='text-gray-600 flex pt-8'>
        <img src='' alt='Logo' className='ml-5'/>

        <div>
            <p className='ml-28 font-bold hover:bg-teal-500 hover:text-white p-2'>
                <a href='' className='flex'>
                    <TfiEmail className='text-xl'/>
                    <span className='ml-1 text-sm'>sjmwatsefu@gmail.com</span>
                </a>
            </p>
        </div>
        <div className='flex ml-[430px]'>
            <ul className='flex justify-end gap-6 font-normal'>
                <li className=''>
                    <a href='' className='flex'>
                    <GoProject className='text-xl'/>
                    <p className='ml-1 '>Projects</p>
                    </a>
                </li>
                <li className='flex'>
                <a href='' className='flex'>
                    <FaUserTie className='text-xl'/>
                    <p >Resume</p>
                </a>
                </li>
                <li className='flex'>
                <a href='' className='flex'>
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