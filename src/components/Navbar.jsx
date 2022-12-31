import React from 'react'
import { GoProject } from "react-icons/go";
import { FaUserTie } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";

function Navbar() {
  return (
    <div className='text-gray-600 flex max-w-6xl'>
        <div className='w-48  ml-7 absolute -mt-8 '>
        <img src='sjmwatzz.png' alt='Logo' className='w-full '/>
        

        </div>

        <div className='hidden md:flex'>
            <p className=' ml-[400px] absolute font-bold hover:bg-teal-800 hover:text-white p-1 mt-10'>
                <a href='' className='flex'>
                    <TfiEmail className='text-xl'/>
                    <span className='ml-1 text-sm'>sjmwatsefu@gmail.com</span>
                </a>
            </p>
        </div>
        <div className=' ml-[830px] pt-8 hidden md:flex'>
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

  {/*mobile menu */}
  <div class="md:hidden flex items-center bg-red-600  mt-10 absolute ">
	<button class="outline-none mobile-menu-button">
		<svg
			class="w-6 h-6 text-gray-500"
			x-show="!showMenu"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
		<path d="M4 6h16M4 12h16M4 18h16"></path>
		</svg>
	</button>
</div>



<div class="hidden mobile-menu">
	<ul class="">
		<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
		<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
		<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
		<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
	</ul>
</div>
    </div>
  )
}

export default Navbar