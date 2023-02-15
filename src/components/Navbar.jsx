import { React, useState } from 'react'
import { GoProject } from "react-icons/go";
import { FaUserTie, FaBars, FaTimes} from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { HashLink as Link } from 'react-router-hash-link';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

{/*function Navbar() {

  const [open, setOpen] = useState(false);

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

      <div className="hidden md:block ">
        <nav aria-label="Site Nav">
        <div className='ml-[200px] pt-8  flex'>
            <ul className='flex justify-end gap-6 font-normal'>
              <Link to={"#projects"} smooth>
                <li className='hover:bg-teal-800 hover:text-white p-1'>
                    <a href='' className='flex '>
                    <GoProject className='text-xl'/>
                    <p className='ml-1 '>Projects</p>
                    </a>
                </li>
              </Link>
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
                <a href='mailto:sjmwatsefu@gmail.com' className='flex'>
                    <TfiEmail className='text-xl'/>
                    <span className='ml-1 text-sm'>sjmwatsefu@gmail.com</span>
                </a>
            </p>

            
        </div>
          
        </nav>
      </div>

      <div className="flex items-center gap-4">
        

        <div className="block md:hidden ">
          <button
            className="rounded bg-gray-100 p-2 mt-5 text-teal-600 transition hover:text-gray-600/75"
            onClick={() => setOpen(!open)}
          >
            {open ? (
            <FaBars />
            ):(
              <FaTimes/>
            )}

            
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
</div>*/}




{/*<div class={`hidden mobile-menu ${open ? "block" : "hidden"}`} onClick={() => setOpen(false)} >
	<ul class="">
		<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
		<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
		<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
		<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
	</ul>
</div>

    </div>
  )
}*/}



const navigation = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Shelf', href: '#', current: false },
  { name: 'Resume', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block w-40  lg:hidden"
                    src="sjmwatzz.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden w-40 lg:block mt-10"
                    src="sjmwatzz.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-[250px] sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-teal-800 text-white' : 'text-gray-700 hover:bg-teal-800 hover:text-white',
                          'px-3 mt-24 rounded-md text-base font-normal'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                      
                    ))}
                  </div>
                  
                </div>
                <p className=' ml-[900px] absolute mt-[90px] font-bold text-gray-700 hover:bg-teal-800 hover:text-white p-1 '>
                <a href='mailto:sjmwatsefu@gmail.com' className='flex'>
                    <TfiEmail className='text-xl'/>
                    <span className='ml-1 text-sm'>sjmwatsefu@gmail.com</span>
                </a>
            </p>
              </div>
              
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-7 bg-gray-100 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? ' text-white' : 'text-gray-700 hover:bg-teal-800 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-normal'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}



{/*export default Navbar*/}