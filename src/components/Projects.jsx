import React from 'react'

function Projects() {
  return (
    <div className='mt-32 mx-3' id='projects'>
        <div className='ml-16'>
            <h1 className='font-bold text-4xl text-gray-700 '>MY PROJECTS</h1>
            <h2 className=' font-bold text-5xl text-teal-600 -mt-7'>_</h2>
            <p className='mt-3 text-lg text-gray-700'>Here you will find some of the personal and clients projects that I created</p>
            <h2 className='mt-8 font-semibold text-gray-600 text-3xl'>Web Applications</h2>
        </div>

     
     <div className='m-auto flex justify-center gap-10 flex-wrap mt-16'>

        {/*project 1 */}
     <div className='w-[500px]'>
     <a href="#" className="group relative block bg-black h-72">
  <img
    alt="Travel"
    src="travelhome.png"
    className="absolute  h-full w-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-8 ">


    <div className="mt-20">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <h1 className='text-2xl text-white font-bold'>Travelog</h1>
        <p className="text-sm text-white mt-5">
          React.js, Tailwind CSS, Ruby on Rails and Postgresql
        </p>
      </div>
    </div>
  </div>
</a>
</div>

{/*project 2 */}
<div className='w-[500px]'>
     <a href="#" className="group relative block bg-black h-72">
  <img
    alt="Developer"
    src="electrohome.png"
    className="absolute  h-full w-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-8">

    <div className="mt-20">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <h1 className='text-2xl text-white font-bold'>Electrohub</h1>
        <p className="text-sm text-white mt-5">
        React.js, Bootstrap, Ruby Sinatra and Sqlite3
        </p>
      </div>
    </div>
  </div>
</a>
</div>

{/*project 3 */}
<div className='w-[500px]'>
     <a href="https://importsbysalim.netlify.app/" className="group relative block bg-black h-72">
  <img
    alt="Developer"
    src="importshome.png"
    className="absolute inset-0 h-full w-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-8">

    <div className="mt-20">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <h1 className='text-2xl text-white font-bold'>ImportsBySalim</h1>
        <p className="text-sm text-white mt-5">
          HTMl, CSS and JavaScript
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