import React from 'react';

const ProjectCard = ({ href, imgSrc, imgAlt, title, titleColor, description, tools }) => (
  <div className='w-[500px]'>
    <a href={href} target='_blank' rel="noopener noreferrer" className="group relative block bg-black h-72">
      <img
        alt={imgAlt}
        src={imgSrc}
        className="blur-background absolute h-full w-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
      />
      <div className="relative p-8">
        <div className="mt-7">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <h1 className={`text-3xl font-bold ${titleColor}`}>{title}</h1>
            <p className='text-sm text-white mt-3'>
              <span className='text-lg font-semibold tracking-wide'>Description: </span>
              {description}
            </p>
            <p className="text-sm text-white mt-5">
              <span className='text-lg font-semibold'>Tools: </span>
              {tools}
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>
);

function Projects() {
  return (
    <div className='mt-32 mx-3' id='projects'>
      <div className='sm:ml-16'>
        <h1 className='font-bold text-4xl text-gray-700 dark:text-gray-300 text-center'>MY PROJECTS</h1>
        <h2 className='font-bold text-5xl text-teal-600 -mt-7 text-center'>_</h2>
        <p className='mt-3 text-lg text-gray-700 dark:text-gray-400 text-center'>
          Here you will find some of the personal and clients projects that I created
        </p>
        <h2 className='mt-8 font-semibold text-gray-600 text-3xl dark:text-gray-300'>Web Applications</h2>
      </div>
      <div className='m-auto flex justify-center gap-10 flex-wrap mt-16'>
        <ProjectCard
          href="https://www.vicshiytours.co.ke/"
          imgSrc="vicshiy.png"
          imgAlt="Travel"
          title="Vicshiy Tours and Travels"
          titleColor="text-teal-700"
          description="Drove the comprehensive development of Vicshiy Tours and Travel's official website, reshaping their digital presence in the bespoke travel landscape across East Africa."
          tools="React JS, Tailwind CSS, Framer Motion"
        />
        <ProjectCard
          href="https://www.tepa2030.org/"
          imgSrc="tepass.png"
          imgAlt="tepa"
          title="TePA Official Website"
          titleColor="text-pink-600"
          description="This is the official website for TEPA, a non-profit organization dedicated to combating the prevalent issue of teenage pregnancies within Slums in Nairobi."
          tools="React JS, Tailwind CSS"
        />
        <ProjectCard
          href="https://kuku-hub.vercel.app/"
          imgSrc="kukuhub.png"
          imgAlt="Developer"
          title="Kuku Hub"
          titleColor="text-orange-600"
          description="A comprehensive web application enabling users to manage business sales, track products, and generate sales reports with interactive graphs."
          tools="Next JS, Typescript, Tailwind CSS, Ruby on Rails, and PostgreSQL"
        />
        <ProjectCard
          href="https://westwired.vercel.app/"
          imgSrc="westwired1.png"
          imgAlt="Developer"
          title="WestWired"
          titleColor="text-yellow-600"
          description="An ecommerce website facilitating the purchase of electronic items such as headphones, laptops, and mobile phones."
          tools="Next JS, Tailwind CSS, Framer Motion, and Stripe"
        />
        <ProjectCard
          href="https://importsbysalim.netlify.app/"
          imgSrc="importshome.png"
          imgAlt="Developer"
          title="ImportsBySalim"
          titleColor="text-sky-700"
          description="This is a car dealership website where one can view the cars available for sale."
          tools="HTML, CSS, and JavaScript"
        />
      </div>
    </div>
  );
}

export default Projects;
