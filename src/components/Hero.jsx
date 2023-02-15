
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import React, { Suspense } from 'react';
import Typist from "react-typist";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "../animation";

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
    <div
        className="relative h-80 overflow-hidden rounded-full shadow-2xl shadow-teal-700 sm:h-80 lg:order-last lg:h-full bg-blue-600"
      >
        
        <img
          alt="Salim"
          src = "portfolio3.png"
          //src="https://img.freepik.com/free-vector/saving-nature-with-technology-concept_52683-33408.jpg?size=626&ext=jpg"
          className="absolute  w-[800px] h-[400px] object-cover object-center ml-20 mt-14"
/>
     
</div>



      <div className="lg:py-10 lg:ml-20">
        <Typist cursor={{show: false}} avgTypingDelay={200} >
        <h2 className="text-3xl font-bold sm:text-6xl text-teal-800 ">Salim <br/> Mwatsefu.</h2>
        </Typist>
      
        <motion.div 
      variants={homeAnimation}
      transition={{ delay: 2, duration: 1, type: "tween" }}
      >
        <div>
        <h2 className='text-lg font-semibold text-teal-600 mt-4'>Fullstack Developer</h2>
            <p className='mt-5 font-medium text-gray-700'>Software Developer from Nairobi, Kenya<br/> who likes to craft solid and scalable software <br/> products  with great user experiences.</p>
            </div>
            </motion.div>
            
            <motion.div 
      variants={homeAnimation}
      transition={{ delay: 3, duration: 1, type: "tween" }}
      >
            <ul className='flex gap-10 text-2xl mt-5 text-teal-400'>
                <li><a href='https://github.com/Salimmwatsefu'><BsGithub/></a></li>
                <li><a href='https://twitter.com/SalimMwatsefu'><BsTwitter/></a></li>
                <li><a href='https://www.linkedin.com/in/salim-mwatsefu-694685235/'><BsLinkedin/></a></li>
            </ul>
            </motion.div>

            <motion.div 
      variants={homeAnimation}
      transition={{ delay: 4, duration: 3, type: "spring", bounce: 0.6 }}
      whileTap={{ rotate: 90, scale: 0.75 }}
      >
           <a href='mailto:sjmwatsefu@gmail.com'>
            <button className='bg-teal-600 mt-9 rounded-full h-24 w-24 ml-24'>
                
                <button className='rounded-full h-16 w-16 bg-teal-700 text-white text-sm'>Let's talk</button>
         
            </button>
            </a>
            </motion.div>
            

        

        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero