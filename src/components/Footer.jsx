import React from 'react'

function Footer() {
  return (
    <div className='sm:flex mt-16  mb-1 h-16 mx-10 border-b-[20px]  border-amber-500'>
        <div className=' ml-16 w-48 h-28 -mt-[75px] '>
        <img src='sjmwatzz.png' alt='Logo' className='ml-5 p-1'/>
        </div>
        <div className='sm:flex sm:ml-[300px]  border-b-8 ml-36'>
            <ul className='sm:flex sm:gap-6 sm:font-normal font-semibold sm:text-xs uppercase text-gray-700'>
                <li className='flex'>
                    <a href='' className=' hover:bg-teal-800 hover:text-white p-1'>
                    <p className=''>Projects</p>
                    </a>
                </li>
                <li className='flex'>
                <a href='' className='flex hover:bg-teal-800 hover:text-white p-1'>
                    <p className='' >Resume</p>
                </a>
                </li>
                <li className='flex'>
                <a href='' className='flex hover:bg-teal-800 hover:text-white p-1'>
                    <p>Shelf</p>
                </a>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Footer