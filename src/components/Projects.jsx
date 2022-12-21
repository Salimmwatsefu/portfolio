import React from 'react'

function Projects() {
  return (
    <div className='mt-32'>
        <div className='ml-16'>
            <h1 className='font-bold text-4xl text-gray-700 border-b-4 border-teal-700 w-64 h-14'>MY PROJECTS</h1>
            <p className='mt-3 text-lg text-gray-700'>Here you will find some of the personal and clients projects that I created</p>
            <h2 className='mt-8 font-semibold text-gray-600 text-3xl'>Web Applications</h2>
        </div>

     
     <div className='m-auto flex justify-center gap-10 flex-wrap mt-16'>

        {/*project 1 */}
     <div className='w-[500px]'>
     <a href="#" class="group relative block bg-black">
  <img
    alt="Travel"
    src="travelhome.png"
    class="absolute  h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8 ">
    <p class="text-2xl font-bold uppercase tracking-widest text-gray-600">
      Travelog
    </p>


    <div class="mt-20">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
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
     <a href="#" class="group relative block bg-black">
  <img
    alt="Developer"
    src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
      Developer
    </p>

    <p class="text-2xl font-bold text-white">Tony Wayne</p>

    <div class="mt-20">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
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
     <a href="#" class="group relative block bg-black">
  <img
    alt="Developer"
    src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
      Developer
    </p>

    <p class="text-2xl font-bold text-white">Tony Wayne</p>

    <div class="mt-20">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
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