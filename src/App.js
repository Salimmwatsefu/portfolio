
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App mt-14">
      <div className='bg-white  w-[1150px] mx-auto rounded-md'>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Contact/>
      </div>

    </div>
  );
}

export default App;
