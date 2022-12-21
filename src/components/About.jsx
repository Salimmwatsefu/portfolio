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
        <div className='flex gap-5'>

        <div className='ml-16'>
            <h1 className='text-gray-700 font-bold text-2xl  mt-28'>Get to know me!</h1>
            <p className='mt-5 text-gray-700 gap-3 text-base'>I'm a <span className='font-bold text-teal-800'>Frontend Web Developer</span> building the Front-end of Websites <br/> and Web Applications that leads to the success of the overall<br/> product. Check out some of my work in the Projects section.</p>
        </div>

        <div>
            <h1 className='text-gray-700 font-bold text-2xl ml-16 mt-28 bg-yellow-200'>My Skills</h1>
            <h2>FRONTEND APPS</h2>
        </div>

        </div>
    </div>
  )
}

export default About