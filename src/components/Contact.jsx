import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('mwatsefu25', 'template_3hcernh', e.target, '2Z84E0p83pzjjmPaV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className='mt-40'>
        <div className='text-center'>
            <h1 className='flex justify-center font-bold text-5xl text-teal-800'>Send me a message!</h1>
            <p className='flex justify-center mt-6 text-xl font-medium text-gray-800 dark:text-gray-500'>Got a question or proposal, or just want</p>
            <p className='flex justify-center text-xl font-medium text-gray-800 dark:text-gray-500'>to say hello? Go ahead.</p>
        </div>

       

<section className=''>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
    <div className=" lg:grid-cols-5 ">
      

      <div className=" lg:col-span-3 lg:p-12  flex justify-center">
        <form onSubmit={sendEmail} className="space-y-4  ">
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
          <div>
              <label className="sr-only" for="phone" >Name</label>
              <h1 className='text-xs pl-3 text-gray-400'>Your Name</h1>
              <input
                className="w-full  border-gray-300 border-b-2 p-3 text-base text-black"
                placeholder="Enter Your Name"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div>
              <label className="sr-only" for="email">Email</label>
              <h1 className='text-xs pl-3 text-gray-400'>Email Address</h1>
              <input
                className="w-full  border-b-2 p-3 text-base border-gray-300"
                placeholder="Enter your email address"
                type="email"
                id="email"
                name="email"
              />
            </div>

            
          </div>

          
          <div>
            <label className="sr-only" for="message">Message</label>
            <h1 className='text-xs pl-3 text-gray-400'>Your Message</h1>
            <textarea
              className="w-full rounded-lg border-gray-300 border-b-2 p-3 text-base mb-16"
              placeholder="Hi, I think we need a certain project at Company X. How soon can you hope on this to discuss"
              rows="2"
              id="message"
              name='message'
            ></textarea>
          </div>

          <div className="mt-4  flex justify-center">
            <button
              type="submit"
              className="inline-flex sm:w-[300px]  items-center justify-center  bg-transparent px-24 py-4 text-teal-800 border-2 border-teal-800  hover:bg-teal-800 hover:text-white transition duration-300"
            >
              <span className="font-medium text-sm "> SHOOT </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5"
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

<div className='flex justify-center '>
  <div>
  <h1 className='font-semibold text-gray-600 text-xl flex justify-center'>Stay connected</h1>
  <h2 className='mt-7 text-sm text-gray-500 flex justify-center'>Nairobi, Kenya</h2>
  <p className='mt-3 text-gray-600 font-bold text-2xl flex justify-center mb-3'>sjmwatsefu@gmail.com</p>
  </div>

</div>

    </div>
  )
}

export default Contact