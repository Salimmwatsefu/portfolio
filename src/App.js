
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

  {/*const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
const textLeave = () => setCursorVariant("default");*/}



  return (
    <BrowserRouter>
    <motion.div initial="hidden" animate="show">
    <div >
      <div className='bg-white  sm:w-[1150px] mx-auto rounded-md md:mt-14'>

      {/*<motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
  />*/}
      

  

      <Navbar  />
      <Hero />
      <About />
      <Projects/>
      <Contact/>
      </div>

      <Footer/>

      

    </div>
    </motion.div>
    </BrowserRouter>
  );
}

export default App;
