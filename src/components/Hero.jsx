import React from 'react'
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

function Hero() {
  return (
    <div className='mt-10'>
        {/*<div className='relative ml-28 '>
            
            <h1 className=' font-bold text-teal-800 text-6xl'>Salim <br/> Mwatsefu.</h1>
            <h2 className='text-lg font-semibold text-teal-600 mt-4'>Fullstack Developer</h2>
            <p className='mt-5 font-medium text-gray-700'>Software Developer from Nairobi, Kenya<br/> who likes to craft solid and scalable frontend products <br/> with great user experiences.</p>
            <ul className='flex gap-10 text-2xl mt-5 text-teal-400'>
                <li><a href=''><BsGithub/></a></li>
                <li><a href=''><BsTwitter/></a></li>
                <li><a href=''><BsLinkedin/></a></li>
            </ul>

            <button className='bg-teal-600 mt-9 rounded-full h-24 w-24 ml-24'>
                
                <button className='rounded-full h-16 w-16 bg-teal-700 text-white text-sm'>Let's talk</button>
         
            </button>

  </div>*/}

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
     {/* <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="Salim"
          src=""
          className="absolute inset-0 h-full w-full object-cover"
        />
</div>*/}

      <div className="lg:py-10 lg:ml-20">
        <h2 className="text-3xl font-bold sm:text-6xl text-teal-800 ">Salim <br/> Mwatsefu.</h2>

        <h2 className='text-lg font-semibold text-teal-600 mt-4'>Fullstack Developer</h2>
            <p className='mt-5 font-medium text-gray-700'>Software Developer from Nairobi, Kenya<br/> who likes to craft solid and scalable frontend products <br/> with great user experiences.</p>
            <ul className='flex gap-10 text-2xl mt-5 text-teal-400'>
                <li><a href=''><BsGithub/></a></li>
                <li><a href=''><BsTwitter/></a></li>
                <li><a href=''><BsLinkedin/></a></li>
            </ul>

            <button className='bg-teal-600 mt-9 rounded-full h-24 w-24 ml-24'>
                
                <button className='rounded-full h-16 w-16 bg-teal-700 text-white text-sm'>Let's talk</button>
         
            </button>

        

        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero