
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import React, { useEffect, useState, useRef } from 'react';

import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "../animation";


function Hero() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 80,
      width: 80,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");


  return (
    <div className='mt-10 '>
        

<motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
    


      <div className="lg:py-10 lg:ml-20">
        
        <h2 className="text-3xl font-bold sm:text-6xl text-teal-800 dark:text-teal-700  " onMouseEnter={textEnter} onMouseLeave={textLeave}>Salim <br/> Mwatsefu.</h2>
       
      
        <motion.div 
      variants={homeAnimation}
      transition={{ delay: 2, duration: 1, type: "tween" }}
      >
        <div>
        <h2 className='text-lg font-semibold text-teal-600 dark:text-teal-800 mt-4'>Fullstack Developer</h2>
            <p className='mt-5 font-medium text-gray-700 dark:text-gray-400'>Software Developer from Nairobi, Kenya<br/> who likes to craft solid and scalable software <br/> products  with great user experiences.</p>
            </div>

            <div>
            <ul className='flex gap-10 text-2xl mt-5 text-teal-400'>
                <li><a href='https://github.com/Salimmwatsefu'><BsGithub/></a></li>
                <li><a href='https://twitter.com/SalimMwatsefu'><BsTwitter/></a></li>
                <li><a href='https://www.linkedin.com/in/salim-mwatsefu-694685235/'><BsLinkedin/></a></li>
            </ul>
            </div>
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

      <div
        className="sm:relative h-[420px] sm:overflow-hidden  rounded-full shadow-xl md:shadow-teal-600 dark:shadow-teal-300  sm:h-80 order-last lg:h-full bg-teal-800"
      >
        
        <img
          alt="Salim"
          src = "hero1.png"
          //src="https://img.freepik.com/free-vector/saving-nature-with-technology-concept_52683-33408.jpg?size=626&ext=jpg"
          className="absolute  sm:w-[1200px] w-[400px] h-[460px] sm:h-[600px] object-cover sm:object-center sm:-ml-40 -ml-36 -mt-5"
/>
     
  </div>



  

    </div>
  </div>
</section>

    </div>
  )
}



export default Hero