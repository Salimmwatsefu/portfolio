import React from 'react'
import { cardVariants, fadeIn, textVariant } from '../animation';
import { motion, useInView } from 'framer-motion';
import Breadcrumb1 from './UI/BreadCrumb1';
import XboxProfile from './Xbox';


function OutsideWork() {
  return (
    <div className='mt-12 mx-3 pb-10'>

<motion.div  variants={fadeIn('', '', 0.1, 1)}>
      <Breadcrumb1 currentPath='/outside-work' currentLabel='Outside-Work' />

      </motion.div>
      
      <div className='sm:ml-16'>
        <motion.h1 variants={textVariant()} className='font-bold text-4xl text-gray-700 dark:text-gray-300 text-center'>OUTSIDE WORK</motion.h1>
        <h2 className='font-bold text-5xl text-teal-600 -mt-7 text-center'>_</h2>
        <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-8 text-lg text-gray-700 dark:text-gray-400 text-center'>
        A glimpse into my hobbies and activities beyond the workplace.
        </motion.p>
        
      </div>

       {/* Gaming */}

      {/* Gaming Section */}
<div
  className="relative mx-28 my-20 rounded-xl shadow-lg overflow-hidden"
  style={{
    backgroundImage: `url('xbox2.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Overlay for text visibility */}
  <div className="bg-black bg-opacity-60 p-10">
    <h1 className="text-4xl font-bold text-teal-600 text-center mb-8">🎮 Gaming</h1>
    <p className="text-gray-300 text-center text-lg mb-10">
      Explore the games that fuel my passion for virtual adventures and competition.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
      {/* GTA 5 Card */}
      <div className="bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-md flex items-center gap-4">
        <img
          src="https://i.pinimg.com/474x/17/2f/6f/172f6fff34fc3e0ccc29de4b6283786e.jpg"
          alt="GTA 5 Cover"
          className="w-24 h-32 rounded-md object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-teal-400">GTA V</h3>
          <p className="text-gray-300 text-sm mt-2">
            Dive into the ultimate open-world experience with heists, chaos, and breathtaking freedom.
          </p>
        </div>
      </div>

      {/* FIFA 23 Card */}
      <div className="bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-md flex items-center gap-4">
        <img
          src="https://m.media-amazon.com/images/M/MV5BZjU4NGI0ZWQtZjg4Yi00Y2ViLWFjOGItZTE1MGFmMzZjZDEyXkEyXkFqcGc@._V1_QL75_UX180_CR0,2,180,266_.jpg"
          alt="FIFA 23 Cover"
          className="w-24 h-32 rounded-md object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-teal-400">FIFA 23</h3>
          <p className="text-gray-300 text-sm mt-2">
            Experience the thrill of football with next-gen graphics and ultimate competitive gameplay.
          </p>
        </div>
      </div>
    </div>

    <div className="mt-10 text-center">
      <div className="bg-teal-600 text-gray-100 px-6 py-4 rounded-lg inline-block shadow-md">
        Gaming Mode: Activated
      </div>
    </div>
  </div>
</div>



      {/* Fitness */}

      {/* Fitness Section */}
<div className="mx-28 my-20 p-8 rounded-xl shadow-lg bg-black" >
  <h1 className="text-4xl font-extrabold text-teal-600 text-center mb-6">💪 Fitness</h1>
  <p className="text-gray-200 text-lg text-center mb-8">
    Fitness is my passion. From the field to the gym, I stay active and energized every week.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {/* Football Section */}
    <div className="flex items-center gap-4 bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full">
        <span className="text-3xl text-teal-600">⚽</span>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-teal-600">Football</h2>
        <p className="text-gray-600 mt-2">
          I enjoy playing football on weekends, a perfect way to stay active and have fun with friends.
        </p>
      </div>
    </div>

    {/* Gym Section */}
    <div className="flex items-center gap-4 bg-white bg-opacity-10 p-6 rounded-lg shadow-md ">
      <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full">
        <span className="text-3xl text-teal-600">🏋️‍♂️</span>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-teal-600">Gym</h2>
        <p className="text-gray-600 mt-2">
          I dedicate 4–5 days a week to the gym, building strength, discipline, and endurance.
        </p>
      </div>
    </div>
  </div>
</div>


     
{/* Cars Section */}
<div className="mx-28 my-10 p-8 rounded-xl shadow-lg bg-black relative">
  <h1 className="text-4xl font-extrabold text-teal-600 text-center mb-6">🚗 Cars</h1>
  <p className="text-gray-300 text-lg text-center mb-8">
    Cars are my passion—exploring the latest models, tuning, and maintenance techniques. 
  </p>
  <div>
      <p className=' text-gray-300 text-center'><span className="font-semibold">Coming soon</span> with exciting updates!</p>
    </div>
  <div className=" inset-0 flex items-center justify-center opacity-50">
    <div className="w- flex items-center justify-center">
      <img src="audieyes.jpg" alt="Audi Logo" className="w-[500px]" />
    </div>
   
  </div>

 
</div>





      <div>

      </div>

    </div>
  )
}

export default OutsideWork