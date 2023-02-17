
import { HashLink as Link } from 'react-router-hash-link'; 
import { BiRightArrow } from "react-icons/bi";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

function About() {

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
    <div className='mt-20'>
        <div>
            <h1 className='flex justify-center text-4xl font-bold text-gray-700'>ABOUT ME</h1>
            <h2 className=' font-bold text-5xl flex justify-center text-teal-600 -mt-7'>_</h2>
            <p className='flex justify-center mt-6 text-gray-700 font-medium text-center'>Here you will find more information about me, what I do, and my current skills mostly in terms </p>
            <p className='flex justify-center text-gray-700 font-medium'>of programming and technology</p>
        </div>
        

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    
    <div className="mt-4 flex items-center">

      <div className="ml-4">
        
        
      </div>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
      <blockquote>
        <header className="sm:flex sm:items-center">
          
          <h1 className="mt-2 font-bold sm:ml-4 sm:mt-0 text-gray-700 text-2xl">
          Get to know me!
          </h1>
        </header>

        <p className='mt-5 text-gray-700 gap-3 text-base'>As a <span className='font-bold text-teal-800'>Fullstack Developer</span> I am proficient in both<br/> front-end and back-end technologies.<br/> In addition to my technical skills, I am a strong<br/> problem solver and have excellent communication skills.<br/>I am excited about the opportunity to use my skills and experience to create innovative solutions that make a positive impact.<br/> Check out some of
        my work in the
        <Link to={"#projects"} smooth>
         <span className='font-bold text-teal-800'> Projects section.</span>
         </Link>
         </p>

         <div className=' rounded-lg mt-10 '>

          <div className='absolute border-2 border-teal-700 h-[400px] w-80 ml-10 mt-6  '></div>
          <img
          alt=''
          src='salim.jpg'
          className='rounded-lg w-80 z-50 relative'
          />
         </div>
         

        
      </blockquote>

      <blockquote>
        <header class="sm:flex sm:items-center">
          

          <h1 class="mt-2 sm:ml-4 sm:mt-0 text-gray-700 font-bold text-2xl">
            My Skills
          </h1>
        </header>

        <h2 className='mt-10 font-semibold text-gray-600 text-xl'>FRONTEND APPS</h2>
            <p className=' text-gray-700 gap-3 text-base mt-6'>I build intuitive and visually appealing client-side<br/>applications with modern features like SPA among<br/> other best practices for SEO optimisation. I Use<br/> modern tech such as:
            
            {/*<span className='text-teal-800 font-semibold'> React, TailwindCSS, and<br/> JavaScript.</span>*/}
            <div className='grid grid-cols-2 mt-6 gap-2 ' >
            <span className='flex text-sm gap-2'>
              <BiRightArrow className='text-xs mt-[4px] text-teal-500'/>Javascript  (ES6+)
              </span>
              <span className='flex text-sm gap-2'>
              <BiRightArrow className='text-xs mt-[4px] text-teal-500'/>React
              </span>
              <span className='flex text-sm gap-2'>
              <BiRightArrow className='text-xs mt-[4px] text-teal-500'/>Tailwind Css
              </span>
              <span className='flex text-sm gap-2'>
              <BiRightArrow className='text-xs mt-[4px] text-teal-500'/>Framer Motion
              </span>
              <span className='flex text-sm gap-2'>
              <BiRightArrow className='text-xs mt-[4px] text-teal-500'/>Bootstrap
              </span>
              <span className='flex text-sm gap-2'>
              <BiRightArrow className='text-xs mt-[4px] text-teal-500'/>HTML
              </span>
              <span className='flex text-sm gap-2'>
              <BiRightArrow className='text-xs mt-[4px] text-teal-500'/>CSS
              </span>
              </div>
              </p>
            <h2 className='mt-16 font-semibold text-gray-600 text-xl'>BACKEND APPS</h2>
            <p className=' text-gray-700 gap-3 text-base mt-6'>Build scalable and maintainable server applications<br/> using modern technology stacks such as: 
            <div className='grid grid-cols-2 mt-6 gap-2'>
            <span className='flex text-sm gap-2'>
              <BiRightArrow className='text-xs mt-[4px] text-teal-500'/>Ruby on Rails
              </span>
              <span className='flex text-sm gap-2'>
              <BiRightArrow className='text-xs mt-[4px] text-teal-500'/>Sinatra
              </span>
              <span className='flex text-sm gap-2'>
              <BiRightArrow className='text-xs mt-[4px] text-teal-500'/>Postgresql
              </span>
              <span className='flex text-sm gap-2'>
              <BiRightArrow className='text-xs mt-[4px] text-teal-500'/>SQlite3
              </span>
              <span className='flex text-sm gap-2'>
              <BiRightArrow className='text-xs mt-[4px] text-teal-500'/>Javascript
              </span>
              
              </div>
            </p>


            
        

        

        
      </blockquote>

     

      
      
    </div>
  </div>
  <div className='flex justify-center items-center mt-16'>
  <Link to={"#projects"} smooth>
        <button className='text-teal-800 border-2 border-teal-800  hover:bg-teal-800 hover:text-white w-44 h-16 rounded-full  font-semibold '>
            See my Work
        </button>
        </Link>
  </div>
</section>


        
    </div>
  )
}

export default About