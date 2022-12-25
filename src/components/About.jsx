import React from 'react'

function About() {
  return (
    <div className='mt-36'>
        <div>
            <h1 className='flex justify-center text-4xl font-bold text-gray-700'>ABOUT ME</h1>
            <h2 className=' font-bold text-5xl flex justify-center text-teal-600 -mt-7'>_</h2>
            <p className='flex justify-center mt-6 text-gray-700 font-medium'>Here you will find more information about me, what I do, and my current skills mostly in terms </p>
            <p className='flex justify-center text-gray-700 font-medium'>of programming and technology</p>
        </div>
        <div className='flex gap-5 mt-16'>

        <div className='ml-16'>
            <h1 className='text-gray-700 font-bold text-2xl  '>Get to know me!</h1>
            <p className='mt-5 text-gray-700 gap-3 text-base'>I'm a <span className='font-bold text-teal-800'>Frontend Web Developer</span> building the Front-end<br/> of Websites  and Web Applications that leads to the<br/> success of the overall product. Check out some of<br/> my work in the Projects section.</p>
        </div>

        <div className='ml-36 '>
            <h1 className='text-gray-700 font-bold text-2xl'>My Skills</h1>
            <h2 className='mt-5 font-semibold text-gray-600 text-xl'>FRONTEND APPS</h2>
            <p className=' text-gray-700 gap-3 text-base mt-3'>Build client-side applications with modern features<br/> like SPA and maintain semantic coding style among<br/> other best practices for SEO optimisation. Use<br/> modern tech such as Nuxt (Vue.js), TailwindCSS, and<br/> GSAP.</p>
            <h2 className='mt-5 font-semibold text-gray-600 text-xl'>BACKEND APPS</h2>
            <p className=' text-gray-700 gap-3 text-base mt-3'>Build scalable and maintainable server applications<br/> using modern technology stacks such as Node.js,<br/> Express, and MongoDB</p>
        </div>

        </div>

        <div className='flex justify-center items-center mt-16'>
        <button className='text-teal-800 border-2 border-teal-800  hover:bg-teal-800 hover:text-white w-44 h-16 rounded-full  font-semibold '>
            See my Work
        </button>
        </div>

        
    </div>
  )
}

export default About