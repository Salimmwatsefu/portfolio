import React from 'react'

function Projects() {
  return (
    <div className='mt-32'>
        <div className='ml-16'>
            <h1 className='font-bold text-4xl text-gray-700 '>MY PROJECTS</h1>
            <h2 className=' font-bold text-5xl text-teal-600 -mt-7'>_</h2>
            <p className='mt-3 text-lg text-gray-700'>Here you will find some of the personal and clients projects that I created</p>
            <h2 className='mt-8 font-semibold text-gray-600 text-3xl'>Web Applications</h2>
        </div>

     
     <div className='m-auto flex justify-center gap-10 flex-wrap mt-16'>

        {/*project 1 */}
     <div className='w-[500px]'>
     <a href="#" class="group relative block bg-black h-72">
  <img
    alt="Travel"
    src="travelhome.png"
    class="absolute  h-full w-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8 ">


    <div class="mt-20">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <h1 className='text-2xl text-white font-bold'>Travelog</h1>
        <p class="text-sm text-white mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
</a>
</div>

{/*project 2 */}
<div className='w-[500px]'>
     <a href="#" class="group relative block bg-black h-72">
  <img
    alt="Developer"
    src="electrohome.png"
    class="absolute  h-full w-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8">

    <div class="mt-20">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <h1 className='text-2xl text-white font-bold'>Electrohub</h1>
        <p class="text-sm text-white mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
</a>
</div>

{/*project 3 */}
<div className='w-[500px]'>
     <a href="https://importsbysalim.netlify.app/" class="group relative block bg-black h-72">
  <img
    alt="Developer"
    src="importshome.png"
    class="absolute inset-0 h-full w-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8">

    <div class="mt-20">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <h1 className='text-2xl text-white font-bold'>ImportsBySalim</h1>
        <p class="text-sm text-white mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
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