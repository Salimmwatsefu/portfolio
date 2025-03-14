import { HashLink as Link } from 'react-router-hash-link';
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiCommand, FiCpu, FiDatabase, FiFeather, } from "react-icons/fi";
import { TbBrandReact, TbBrandTypescript } from "react-icons/tb";
import Breadcrumb1 from './UI/BreadCrumb1';
import { BiRightArrow } from "react-icons/bi";





function About() {

  
const quotes = [
  {
    icon: <FiCode className="w-8 h-8 text-white" />,
    text: "The web should be an inclusive space where creativity meets functionality",
    author: "Tim Berners-Lee"
  },
  {
    icon: <FiFeather className="w-8 h-8 text-white" />,
    text: "Creativity is a wild mind and a disciplined eye",
    author: "Dorothy Parker"
  },
  // Add more quotes...
];
  return (
    <section className="min-h-screen pb-20 md:pt-8 pt-1 px-4 sm:px-8 bg-white dark:bg-gray-900">

<Breadcrumb1 currentPath='/about' currentLabel='About' />
      <div className="max-w-6xl mx-auto mt-10">
        {/* Creative Philosophy Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          
          <div className='sm:ml-16'>
        <h1 className='font-bold text-4xl text-gray-700 dark:text-gray-300 text-center '>ABOUT ME</h1>
        <h2 className='font-bold text-5xl text-teal-600 -mt-7 text-center'>_</h2>
        <p className='mt-3 text-sm text-gray-700 dark:text-gray-400 text-center'>
          Here you find more information about me including my skill set. 
        Building digital experiences that live at the intersection of code and creativity
        </p>
      </div>
         
        </motion.div>

        

        {/* Philosophy Grid */}
        
<div className="grid md:grid-cols-2 gap-8 mb-28 relative group">
  {/* Decorative background elements */}
  <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-15 pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gray-800/10 dark:bg-gray-100/10 rounded-full blur-3xl"></div>
  </div>

  {quotes.map((quote, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-800 
                border-2 border-gray-200 dark:border-gray-700
                relative overflow-hidden
                hover:shadow-xl transition-shadow duration-300"
    >
      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-500/10 to-transparent pointer-events-none" />
      
      {/* Animated icon */}
      <div className="mb-6 relative">
        <div className="p-3 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl w-fit
                       transform transition-transform hover:scale-105">
          {quote.icon}
        </div>
      </div>

      {/* Quote text */}
      <h3 className="text-2xl font-medium text-gray-800 dark:text-gray-100 mb-4 
                    leading-tight font-serif italic">
        "{quote.text}"
      </h3>
      
      {/* Author */}
      <p className="text-gray-600 dark:text-gray-300 font-medium 
                   border-l-4 border-teal-500 pl-4 mt-6">
        — {quote.author}
      </p>

      {/* Decorative corner */}
      <div className="absolute bottom-2 right-2 text-teal-500/20 dark:text-teal-400/10 
                     text-6xl transform -rotate-12 -translate-y-4">
        ”
      </div>
    </motion.div>
  ))}
</div>



        <div className='flex justify-center gap-5 mb-10'>
          <div className="inline-block px-4 py-2 bg-teal-500/30 rounded-full text-teal-500 font-mono text-sm ">
                <span className="mr-2">✦</span>
                Frontend Obsession
              </div>
              <div className="inline-block px-4 py-2 bg-teal-500/30 rounded-full text-teal-500 font-mono text-sm ">
                <span className="mr-2">#</span>
                Pixel Perfect
              </div>
              <div className="inline-block px-4 py-2 bg-teal-500/30 rounded-full text-teal-500 font-mono text-sm ">
                <span className="mr-2">✦</span>
                Creative Coder
              </div>
              <div className="inline-block px-4 py-2 bg-teal-500/30 rounded-full text-teal-500 font-mono text-sm ">
                <span className="mr-2">✦</span>
                Accessible
              </div>
              <div className="inline-block px-4 py-2 bg-teal-500/30 rounded-full text-teal-500 font-mono text-sm ">
                <span className="mr-2">✦</span>
                Devops
              </div>
          </div>

       

        {/* Frontend Passion Section */}
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    
    <div className=" flex items-center">

      <div className="ml-4">
        
        
      </div>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
      <blockquote>
        <header className="sm:flex sm:items-center">
          
          <h1 className="mt-2 font-bold sm:ml-4 sm:mt-0 text-gray-700 dark:text-gray-300 text-2xl">
          Get to know me!
          </h1>
        </header>

        <p className='mt-5 text-gray-700 dark:text-gray-500 gap-3 text-base'>As a <span className='font-bold text-teal-800'>Fullstack Developer</span> I am proficient in both<br/> front-end and back-end technologies.<br/> In addition to my technical skills, I am a strong<br/> problem solver and have excellent communication skills.<br/>I am excited about the opportunity to use my skills and experience to create innovative solutions that make a positive impact.<br/> Check out some of
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
          

          <h1 class="mt-2 sm:ml-4 sm:mt-0 text-gray-700 dark:text-gray-300 font-bold text-2xl">
            My Skills
          </h1>
        </header>

        <h2 className='mt-10 font-semibold text-gray-600 dark:text-gray-400 text-xl'>FRONTEND APPS</h2>
            <p className=' text-gray-700 gap-3 text-base mt-6 dark:text-gray-500'>I build intuitive and visually appealing client-side<br/>applications with modern features like SPA among<br/> other best practices for SEO optimisation. I Use<br/> modern tech such as:
            
            {/*<span className='text-teal-800 font-semibold'> React, TailwindCSS, and<br/> JavaScript.</span>*/}
            <div className='grid grid-cols-2 mt-6 gap-2 ' >
            <span className='flex text-sm gap-2'>
              <BiRightArrow className='text-xs mt-[4px] text-teal-500'/>Typescript
              </span>
            <span className='flex text-sm gap-2'>
              <BiRightArrow className='text-xs mt-[4px] text-teal-500'/>Javascript  (ES6+)
              </span>
              <span className='flex text-sm gap-2'>
              <BiRightArrow className='text-xs mt-[4px] text-teal-500'/>Next Js
              </span>
              <span className='flex text-sm gap-2'>
              <BiRightArrow className='text-xs mt-[4px] text-teal-500'/>React Js
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
            <h2 className='mt-16 font-semibold text-gray-600 dark:text-gray-400 text-xl'>BACKEND APPS</h2>
            <p className=' text-gray-700 dark:text-gray-500 gap-3 text-base mt-6'>Build scalable and maintainable server applications<br/> using modern technology stacks such as: 
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
              <span className='flex text-sm gap-2'>
              <BiRightArrow className='text-xs mt-[4px] text-teal-500'/>Flask
              </span>
              <span className='flex text-sm gap-2'>
              <BiRightArrow className='text-xs mt-[4px] text-teal-500'/>Django
              </span>
              
              </div>
            </p>


            
        

        

        
      </blockquote>

     

      
      
    </div>
  </div>

        {/* CTA */}
        
      </div>
    </section>
  )
}

export default About