import { React, Fragment } from 'react';
import { TfiEmail } from "react-icons/tfi";
import { HashLink as Link } from 'react-router-hash-link';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon  } from '@heroicons/react/24/outline';
import { FiMoon, FiSun } from "react-icons/fi";
import DarkModeButton from './DarkModeButton';


const navigation = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Shelf', href: 'https://medium.com/@sjmwatsefu', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example({toggleDarkMode, darkMode}) {
  const handleResumeClick = () => {
    // Replace '/resume.pdf' with the actual path to your resume file
    window.open('/Resume.pdf', '_blank');
  };

  return (
    <Disclosure as="nav" className=" ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
                    className="block w-40 lg:hidden mt-5 ml-5"
                    src="sjmwatzz.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden w-28 lg:block mt-10 absolute  "
                    src="sjmwatzz.png"
                    alt="Your Company"
                  />
                </div>

                <div className='  h-10 w-10 absolute top-8 right-[200px]'>
                
      
     
                </div>

                
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-7 bg-gray-100">
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
              {/* Download link for Resume */}
              <button
                onClick={handleResumeClick}
                className={classNames(
                  'text-gray-700 hover:bg-teal-800 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-normal'
                )}
              >
                Resume
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
