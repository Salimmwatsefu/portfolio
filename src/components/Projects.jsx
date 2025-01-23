import React, { useRef, useState } from 'react';
import Breadcrumb1 from './UI/BreadCrumb1';
import Drawer from './UI/Drawer';
import KukuhubDetails from './ProjectDetails/KukuhubDetails';
import VicshyDetails from './ProjectDetails/VicshiyDetails';
import { cardVariants, fadeIn, textVariant } from '../animation';
import { motion, useInView } from 'framer-motion';



function Projects() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openDrawer = (project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedProject(null);
  };

  const ref = useRef(null);
 const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className='mt-12 mx-3 pb-10' id='projects'>
      <motion.div  variants={fadeIn('', '', 0.1, 1)}>
      <Breadcrumb1 currentPath='/projects' currentLabel='Projects' />

      </motion.div>
      
      <div className='sm:ml-16'>
        <motion.h1 variants={textVariant()} className='font-bold text-4xl text-gray-700 dark:text-gray-300 text-center'>MY PROJECTS</motion.h1>
        <h2 className='font-bold text-5xl text-teal-600 -mt-7 text-center'>_</h2>
        <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-3 text-lg text-gray-700 dark:text-gray-400 text-center'>
        These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p>
        <motion.h2 variants={fadeIn('', '', 0.1, 1)} className='mt-8 font-semibold text-gray-600 text-3xl dark:text-gray-300'>Web Applications</motion.h2>
      </div>

      <div className='mt-10 ml-10 grid grid-cols-2'>
        {/* Kukuhub */}
        <motion.div 
          className="w-[500px] h-[430px] bg-gradient-to-b from-orange-50 via-[#c5781fd8] to-[#70450e46] rounded-lg cursor-pointer"
          onClick={() => openDrawer('kukuhub')}
          variants={cardVariants}
  initial="hidden" // Hidden before coming into view
  whileInView="visible" // Visible when in view
  whileHover="hover" // Hover effect
  whileTap="tap" // Tap effect
  viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex justify-center">
            <img className="h-auto object-contain rounded-t-xl" src="/kukuhub.png" alt="kukuhub" />
          </div>
          <h4 className="text-2xl font-semibold mt-4 px-6">.Kuku-Hub</h4>
          <div>
            <p className='pl-6 text-gray-700 text-sm mt-5'>A comprehensive web inventory management system</p>
          </div>
          
        </motion.div>

        {/* Vicshy */}
        <motion.div 
          className="w-[500px] h-[550px] bg-gradient-to-b from-green-50 via-[#146844ae] to-[#0e704a48] p-6 rounded-lg cursor-pointer"
          onClick={() => openDrawer('vicshiy')}
          variants={cardVariants}
  initial="hidden" // Hidden before coming into view
  whileInView="visible" // Visible when in view
  whileHover="hover" // Hover effect
  whileTap="tap" // Tap effect
  viewport={{ once: true, amount: 0.3 }}
        >
          <h4 className="text-2xl font-semibold mt-4">.Vicshy Tours</h4>
          <div className="flex justify-center">
            <img className="w-[400px] h-auto object-contain" src="/vicshiy-mockup.png" alt="Vicshy" />
          </div>
          <div>
            <p className='text-center text-gray-700 text-sm'>Vicshiy Tours and Travel's official website</p>
          </div>
          
        </motion.div>

        {/* TePA */}
        <motion.div 
          className="w-[500px] h-[550px] bg-gradient-to-b from-pink-50 via-[#db6274ae] to-[#94172a48] p-6 rounded-lg -mt-20"
          variants={cardVariants}
  initial="hidden" // Hidden before coming into view
  whileInView="visible" // Visible when in view
  whileHover="hover" // Hover effect
  whileTap="tap" // Tap effect
  viewport={{ once: true, amount: 0.3 }}
        >
          <h4 className="text-2xl font-semibold mt-4">.TePA</h4>
          <div className="flex justify-center">
            <img className="w-[380px] h-auto object-contain" src="/tepa-mockup.png" alt="TePA" />
          </div>
          <div>
            <p className='text-center text-gray-700 text-sm mt-10'>Teenage Pregnancy Awareness Project official website</p>
          </div>
          
        </motion.div>

        {/* Moodly */}
        <motion.div 
          className="w-[500px] h-[550px] bg-gradient-to-b from-blue-50 via-[#19578aae] to-[#183dad48] p-6 rounded-lg mt-10"
          variants={cardVariants}
  initial="hidden" // Hidden before coming into view
  whileInView="visible" // Visible when in view
  whileHover="hover" // Hover effect
  whileTap="tap" // Tap effect
  viewport={{ once: true, amount: 0.3 }}
        >
          <h4 className="text-2xl font-semibold mt-4">.Moodly</h4>
          <div className="flex justify-center">
            <img className="w-[450px] h-auto object-contain" src="/moodly2.png" alt="Moodly" />
          </div>
          <div>
            <p className='text-center text-gray-700 text-sm'>A student mood tracking application for USIU-Africa</p>
          </div>
          
        </motion.div>

        {/* Westwired */}
        <motion.div 
          className="w-[500px] h-[550px] bg-gradient-to-b from-yellow-50 via-[#d9cb33ae] to-[#f3d12548] p-6 rounded-lg -mt-20"
          variants={cardVariants}
  initial="hidden" // Hidden before coming into view
  whileInView="visible" // Visible when in view
  whileHover="hover" // Hover effect
  whileTap="tap" // Tap effect
  viewport={{ once: true, amount: 0.3 }}
        >
          <h4 className="text-2xl font-semibold mt-4">.WestWired</h4>
          <div className="flex justify-center">
            <img className="w-[400px] h-auto object-contain" src="/westwired2.png" alt="WestWired" />
          </div>
          <div>
            <p className='text-center text-gray-700 text-sm'>An ecommerce website facilitating the purchase of electronic items such as headphones, laptops and mobile phones</p>
          </div>
         
        </motion.div>
      </div>

      {/* Drawer Component */}
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer}>
        {selectedProject === 'kukuhub' && <KukuhubDetails />}
        {selectedProject === 'vicshiy' && <VicshyDetails />}
      </Drawer>
    </div>
  );
}

export default Projects;
