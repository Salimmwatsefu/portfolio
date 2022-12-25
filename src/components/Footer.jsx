import React from 'react'

function Footer() {
  return (
    <div className='flex mt-16  mb-1 h-16 mx-10 border-b-[20px]  border-amber-500'>
        <div className=' ml-16 w-48 -mt-[75px] '>
        <img src='sjmwatzz.png' alt='Logo' className='ml-5 p-1'/>
        </div>
        <div className='flex ml-[300px] border-b-8'>
            <ul className='flex gap-6 font-normal text-xs uppercase'>
                <li className='hover:bg-teal-800 hover:text-white p-1'>
                    <a href='' className='flex '>
                    <p className='ml-1 '>Projects</p>
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
        <div>
            <p className='uppercase text-xs p-1 gap-5 ml-[200px]'>2022 Salim.all rights reserved</p>
        </div>

    </div>
  )
}

export default Footer