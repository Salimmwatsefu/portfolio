import React from 'react'

function Contact() {
  return (
    <div className='mt-40'>
        <div className=''>
            <h1 className='flex justify-center font-bold text-5xl text-teal-800'>Send me a message!</h1>
            <p className='flex justify-center mt-6 text-xl font-medium text-gray-800'>Got a question or proposal, or just want</p>
            <p className='flex justify-center text-xl font-medium text-gray-800'>to say hello? Go ahead.</p>
        </div>

       

<section className=''>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
    <div class=" lg:grid-cols-5 ">
      

      <div class=" lg:col-span-3 lg:p-12  flex justify-center">
        <form action="" class="space-y-4  ">
          
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
          <div>
              <label class="sr-only" for="phone">Name</label>
              <h1 className='text-xs pl-3 text-gray-400'>Your Name</h1>
              <input
                class="w-full  border-gray-300 border-b-2 p-3 text-base text-black"
                placeholder="Enter Your Name"
                type="text"
                id="name"
              />
            </div>
            <div>
              <label class="sr-only" for="email">Email</label>
              <h1 className='text-xs pl-3 text-gray-400'>Email Address</h1>
              <input
                class="w-full  border-b-2 p-3 text-base border-gray-300"
                placeholder="Enter your email address"
                type="email"
                id="email"
              />
            </div>

            
          </div>

          
          <div>
            <label class="sr-only" for="message">Message</label>
            <h1 className='text-xs pl-3 text-gray-400'>Your Message</h1>
            <textarea
              class="w-full rounded-lg border-gray-300 border-b-2 p-3 text-base mb-16"
              placeholder="Hi, I think we need a certain project at Company X. How soon can you hope on this to discuss"
              rows="2"
              id="message"
            ></textarea>
          </div>

          <div class="mt-4  flex justify-center">
            <button
              type="submit"
              class="inline-flex w-[700px]  items-center justify-center  bg-transparent px-24 py-4 text-teal-800 border-2 border-teal-800 sm:w-auto"
            >
              <span class="font-medium text-sm "> SHOOT </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact