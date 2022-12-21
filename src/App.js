
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App mt-20">
      <div className='bg-white  w-[1150px] mx-auto rounded-md'>
      <Navbar />
      <Hero />
      </div>

    </div>
  );
}

export default App;
