import React from 'react'

function Projects() {
  return (
    <div className='mt-32 mx-3' id='projects'>
        <div className='sm:ml-16'>
            <h1 className='font-bold text-4xl text-gray-700 text-center'>MY PROJECTS</h1>
            <h2 className=' font-bold text-5xl text-teal-600 -mt-7 text-center'>_</h2>
            <p className='mt-3 text-lg text-gray-700'>Here you will find some of the personal and clients projects that I created</p>
            <h2 className='mt-8 font-semibold text-gray-600 text-3xl'>Web Applications</h2>
        </div>

     
     <div className='m-auto flex justify-center gap-10 flex-wrap mt-16'>

      {/*project 1 */}
<div className='w-[500px]'>
     <a href="https://kuku-hub.vercel.app/" className="group relative block bg-black h-72">
  <img
    alt="Developer"
    src="kukuhub.png"
    className="absolute  h-full w-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-8">

    <div className="mt-7">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <h1 className='text-3xl text-orange-600 font-bold'>Kuku Hub</h1>
        <p className=' text-sm text-white mt-3'><span className='text-lg font-semibold tracking-wide'>Description  : </span> a comprehensive web application enabling users to manage business sales, track
products, and generate sales reports with interactive graphs </p>
        <p className="text-sm text-white mt-5">
        <span className='text-lg font-semibold'>Tools : </span>Next JS, Typescript, Tailwind CSS, Ruby on Rails, and PostgreSQL.
        </p>
      </div>
    </div>
  </div>
</a>
</div>

       

{/*project 2 */}
<div className='w-[500px]'>
     <a href="https://westwired.vercel.app/" target='_blank' className="group relative block bg-black h-72">
  <img
    alt="Developer"
    src="westwired1.png"
    className="absolute  h-full w-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-8">

    <div className="mt-7">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <h1 className='text-3xl text-yellow-600 font-bold'>WestWired</h1>
        <p className='text-sm text-white mt-3'><span className='font-semibold text-lg tracking-wide'>Description : </span> an ecommerce website facilitating the purchase of electronic items such as
headphones, laptops, and mobile phones.  </p>
        <p className="text-sm text-white mt-5">
        <span  className='text-lg font-semibold'>Tools : </span>Next JS, Tailwind CSS, Framer Motion, and Stripe.
        </p>
      </div>
    </div>
  </div>
</a>
</div>

{/*project 3 */}
<div className='w-[500px]'>
     <a href="https://job-app-frontend.vercel.app/" target='_blank' className="group relative block bg-black h-72">
  <img
    alt="Developer"
    src="career.png"
    className="absolute  h-full w-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-8">

    <div className="mt-10">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <h1 className='text-3xl text-pink-800 font-bold'>Career Connect</h1>
        <p className='text-sm text-white mt-3'><span className='font-semibold text-lg tracking-wide'>Description : </span> a web application connecting job seekers with employers
through job postings and applications.</p>
        <p className="text-sm text-white mt-5">
        <span  className='text-lg font-semibold'>Tools : </span>React JS, Ruby on Rails, and PostgreSQL
        </p>
      </div>
    </div>
  </div>
</a>
</div>


{/*project 4 */}
<div className='w-[500px]'>
     <a href="https://travelog7.vercel.app/" target='_blank' className="group relative block bg-black h-72">
  <img
    alt="Travel"
    src="travelhome.png"
    className="absolute  h-full w-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-8 ">


    <div className="mt-10">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <h1 className='text-2xl text-white font-bold'>Travelog</h1>
        <p className='text-sm text-white mt-3'><span className='font-semibold text-lg tracking-wide'>Description : </span> A travel web-app that shows a variety of tours and destinations in Kenya</p>
        <p className="text-sm text-white mt-5">
        <span  className='text-lg font-semibold'>Tools : </span>React JS, Tailwind CSS, Ruby on Rails, and PostgreSQL
        </p>
        
      </div>
    </div>
  </div>
</a>
</div>


{/*project 5 */}
<div className='w-[500px]'>
     <a href="https://importsbysalim.netlify.app/" className="group relative block bg-black h-72">
  <img
    alt="Developer"
    src="importshome.png"
    className="absolute inset-0 h-full w-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-8">

    <div className="mt-10">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <h1 className='text-2xl  font-bold text-sky-700'>ImportsBySalim</h1>
        <p className='text-sm text-white mt-3'><span className='font-semibold text-lg tracking-wide'>Description : </span>This is car dealership website where one can view the cars available for sale.</p>
        <p className="text-sm text-white mt-5">
        <span  className='text-lg font-semibold'>Tools : </span>HTML, CSS and JavaScript
        </p>
      </div>
    </div>
  </div>
</a>
</div>
</div>

    </div>
  )
}

export default Projects