
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';





function App() {



  return (
    <BrowserRouter>
    <motion.div initial="hidden" animate="show">
    <div className="App sm:mt-14">
      <div className='bg-white  sm:w-[1150px] mx-auto rounded-md'>
      

  

      <Navbar />
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
