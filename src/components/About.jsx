import { HashLink as Link } from 'react-router-hash-link';
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiCommand, FiCpu, FiDatabase, FiFeather, } from "react-icons/fi";
import { TbBrandReact, TbBrandTypescript } from "react-icons/tb";
import Breadcrumb1 from './UI/BreadCrumb1';





function About() {

  
const quotes = [
  {
    icon: <FiCode className="w-8 h-8 text-white" />,
    text: "The web should be an inclusive space where creativity meets functionality",
    author: "Tim Berners-Lee"
  },
  {
    icon: <FiFeather className="w-8 h-8 text-white" />,
    text: "Creativity is a wild mind and a disciplined eye",
    author: "Dorothy Parker"
  },
  // Add more quotes...
];
  return (
    <section className="min-h-screen pb-20 md:pt-8 pt-1 px-4 sm:px-8 bg-white dark:bg-gray-900">

<Breadcrumb1 currentPath='/about' currentLabel='About' />
      <div className="max-w-6xl mx-auto mt-10">
        {/* Creative Philosophy Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6 text-teal-500">
            
            <span className="font-mono text-sm">Creative Philosophy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 leading-tight max-w-3xl mx-auto">
            Building digital experiences that live at the intersection of 
            <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              {" "}code and creativity
            </span>
          </h1>
        </motion.div>

        

        {/* Philosophy Grid */}
        
<div className="grid md:grid-cols-2 gap-8 mb-28 relative group">
  {/* Decorative background elements */}
  <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-15 pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gray-800/10 dark:bg-gray-100/10 rounded-full blur-3xl"></div>
  </div>

  {quotes.map((quote, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-800 
                border-2 border-gray-200 dark:border-gray-700
                relative overflow-hidden
                hover:shadow-xl transition-shadow duration-300"
    >
      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-500/10 to-transparent pointer-events-none" />
      
      {/* Animated icon */}
      <div className="mb-6 relative">
        <div className="p-3 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl w-fit
                       transform transition-transform hover:scale-105">
          {quote.icon}
        </div>
      </div>

      {/* Quote text */}
      <h3 className="text-2xl font-medium text-gray-800 dark:text-gray-100 mb-4 
                    leading-tight font-serif italic">
        "{quote.text}"
      </h3>
      
      {/* Author */}
      <p className="text-gray-600 dark:text-gray-300 font-medium 
                   border-l-4 border-teal-500 pl-4 mt-6">
        — {quote.author}
      </p>

      {/* Decorative corner */}
      <div className="absolute bottom-2 right-2 text-teal-500/20 dark:text-teal-400/10 
                     text-6xl transform -rotate-12 -translate-y-4">
        ”
      </div>
    </motion.div>
  ))}
</div>



        <div className='flex justify-center gap-5 mb-20'>
          <div className="inline-block px-4 py-2 bg-teal-500/10 rounded-full text-teal-500 font-mono text-sm ">
                <span className="mr-2">✦</span>
                Frontend Obsession
              </div>
              <div className="inline-block px-4 py-2 bg-teal-500/10 rounded-full text-teal-500 font-mono text-sm ">
                <span className="mr-2">#</span>
                Pixel Perfect
              </div>
              <div className="inline-block px-4 py-2 bg-teal-500/10 rounded-full text-teal-500 font-mono text-sm ">
                <span className="mr-2">✦</span>
                Creative Coder
              </div>
              <div className="inline-block px-4 py-2 bg-teal-500/10 rounded-full text-teal-500 font-mono text-sm ">
                <span className="mr-2">✦</span>
                Accessible
              </div>
              <div className="inline-block px-4 py-2 bg-teal-500/10 rounded-full text-teal-500 font-mono text-sm ">
                <span className="mr-2">✦</span>
                Devops
              </div>
          </div>

       

        {/* Frontend Passion Section */}
        <motion.div 
          className="my-28 relative group"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/5 to-purple-500/5 rounded-3xl transform -rotate-1 -z-10" />
          
          <div className="grid lg:grid-cols-2 gap-12 px-8 pt-14 pb-8 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl shadow-teal-400/10 ">
            {/* Frontend Mastery */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-teal-500/10 rounded-xl">
                  <TbBrandReact className="w-8 h-8 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  Frontend Arsenal
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'React', icon: <TbBrandReact className="w-5 h-5" /> },
                  { name: 'TypeScript', icon: <TbBrandTypescript className="w-5 h-5" /> },
                  { name: 'Next.js', icon: <FiCode className="w-5 h-5" /> },
                  { name: 'Framer Motion', icon: <FiCommand className="w-5 h-5" /> },
                  { name: 'Three.js', icon: <FiCpu className="w-5 h-5" /> },
                  { name: 'Tailwind CSS', icon: <FiCode className="w-5 h-5" /> },
                ].map((tech, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl"
                  >
                    <span className="text-teal-500">{tech.icon}</span>
                    <span className="font-medium text-gray-700 dark:text-gray-200">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Backend Expertise */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                  <FiDatabase className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  Backend Toolkit
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Ruby on Rails', icon: '🛤️' },
                  { name: 'PostgreSQL', icon: '🐘' },
                  { name: 'REST APIs', icon: '🔗' },
                  { name: 'JWT Auth', icon: '🔐' },
                  { name: 'Redis', icon: '🗃️' },
                  { name: 'Docker', icon: '🐳' },
                ].map((tech, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl"
                  >
                    <span className="text-purple-500">{tech.icon}</span>
                    <span className="font-medium text-gray-700 dark:text-gray-200">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="px-6 py-2 bg-teal-700 text-white rounded-full text-sm font-medium shadow-lg">
              Technical Spectrum
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        
      </div>
    </section>
  )
}

export default About