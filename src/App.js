
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App mt-14">
      <div className='bg-white  sm:w-[1150px] mx-auto rounded-md'>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Contact/>
      </div>

      <Footer/>

    </div>
  );
}

export default App;
