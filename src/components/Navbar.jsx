import { React, Fragment, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import DarkModeButton from './DarkModeButton';
import { HiMenu, HiX } from "react-icons/hi";
import MobileMenu from './MobileMenu';
import Drawer from './NavDrawer';




function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example({toggleDarkMode, darkMode}) {
  const handleResumeClick = () => {
    window.open('/SalimMwatsefuCV25.pdf', '_blank');
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className=" ">
      <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center  sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center ">
              <img
                className=" w-28 mt-10"
                src="sjmwatzz.png"
                alt="Your Company"
              />
            </div>

            <div className='h-10 w-10 md:ml-24 md:mt-[70px] ml-5 mt-[30px]'>
              <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>

            <div className="sm:ml-[630px] ml-5">
              <button
                onClick={handleResumeClick}
                className={classNames(
                  'bg-gradient-to-r from-teal-500 to-teal-800 text-gray-100',
                  'sm:px-5 px-2 sm:py-3 py-2 sm:mt-[70px] mt-[30px] rounded-xl sm:text-base text-sm font-normal'
                )}
              >
                Download Resume
              </button>
            </div>

            <div className="block  md:hidden bg-white rounded ml-7 mt-[30px]">
          <button onClick={openMenu} className="text-3xl">
            <HiMenu className='mt-1 w-10' />
          </button>
           
          </div>
          </div>
        </div>
      </div>
      <Drawer isOpen={isMenuOpen} onClose = {closeMenu}>
 <MobileMenu onClose={closeMenu} />
</Drawer>
    </nav>
  );
}