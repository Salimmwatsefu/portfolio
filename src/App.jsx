
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Hero3 from './components/Hero3';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Route } from 'react-router-dom';
import OutsideWork from './components/OutsideWork';
import Professional from './components/Professional';
import Blog from './components/Blog';
import Projects2 from './components/Projects2';





function App() {

 const [darkMode, setDarkMode] = useState(false)

 const toggleDarkMode = () => {
  setDarkMode(!darkMode);
 };

 useEffect(() => {
  // Update body background color based on darkMode state
  document.body.style.backgroundColor = darkMode ? '#01161E' : '#d6d3d1';

  // Clean up the effect to prevent memory leaks
  return () => {
    document.body.style.backgroundColor = ''; // Reset background color on unmount
  };
}, [darkMode]);


  return (
    <BrowserRouter>
    <motion.div initial="hidden" animate="show" className={`${darkMode && "dark"} `}>
    <div  >
      <div className='bg-white dark:bg-gray-900   sm:w-[1150px] mx-auto rounded-md md:mt-10 !overflow-x-hidden scrollbar-hidden'>

      
  

      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>

      <Routes>
        <Route path='/' element={<Hero3 />} />

        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/outside-work' element={<OutsideWork />} />
        <Route path='/professional' element={<Professional />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
  
      </Routes>
      </div>


      

    </div>
    </motion.div>
    </BrowserRouter>
  );
}

export default App;
