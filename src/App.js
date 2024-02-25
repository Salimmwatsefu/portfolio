
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';





function App() {

 const [darkMode, setDarkMode] = useState(false)

 const toggleDarkMode = () => {
  setDarkMode(!darkMode);
 };

 useEffect(() => {
  // Update body background color based on darkMode state
  document.body.style.backgroundColor = darkMode ? '#01161E' : 'rgb(240, 237, 237)';

  // Clean up the effect to prevent memory leaks
  return () => {
    document.body.style.backgroundColor = ''; // Reset background color on unmount
  };
}, [darkMode]);


  return (
    <BrowserRouter>
    <motion.div initial="hidden" animate="show" className={`${darkMode && "dark"}`}>
    <div >
      <div className='bg-white dark:bg-[#06070E]   sm:w-[1150px] mx-auto rounded-md md:mt-14 !overflow-x-hidden'>

      
  

      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Hero />
      <About />
      <Projects/>
      <Contact/>
      </div>


      

    </div>
    </motion.div>
    </BrowserRouter>
  );
}

export default App;
