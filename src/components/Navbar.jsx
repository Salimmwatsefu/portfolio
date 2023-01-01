import React from 'react'
import { GoProject } from "react-icons/go";
import { FaUserTie } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";

function Navbar() {
  return (
    <div className='text-gray-600 flex'>

<header aria-label="Site Header" class="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="/">
        
        <img src='sjmwatzz.png' alt='Logo' className='w-40 pt-12 '/>
        

        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Site Nav">
        <div className='ml-[200px] pt-8  flex'>
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

            <p className=' ml-[500px] absolute font-bold hover:bg-teal-800 hover:text-white p-1 '>
                <a href='' className='flex'>
                    <TfiEmail className='text-xl'/>
                    <span className='ml-1 text-sm'>sjmwatsefu@gmail.com</span>
                </a>
            </p>

            
        </div>
          
        </nav>
      </div>

      <div className="flex items-center gap-4">
        

        <div className="block md:hidden">
          <button
            className="rounded bg-gray-100 p-2 mt-5 text-teal-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>

       {/*  <div className='w-48  ml-7 absolute -mt-8 '>
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
        <div className=' ml-[830px] pt-8  flex'>
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

  {/*mobile menu 
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
*/}
    </div>
  )
}

export default Navbar