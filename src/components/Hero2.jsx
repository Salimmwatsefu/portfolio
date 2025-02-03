
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import React, { useEffect, useState, useRef } from 'react';

import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation, fadeIn, textVariant } from "../animation";
import EffectCards from "./EffectCards";
import EffectCards2 from "./EffectCards2";
import MobileCardStack from "./MobileCardStack";




function Hero2() {

  const [mousePosition, setMousePosition] = useState({
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
      height: 80,
      width: 80,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");


  return (
    <div className=' '>
        

<motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8  sm:px-6 lg:px-8 ">
    <div className=" ">
    


      <div className=" lg:ml-10 -mt-10 ">
        
        <motion.h2 variants={textVariant()} className="text-3xl font-bold sm:text-4xl text- dark:text-teal-500 text-center  " onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              {" "}Salim Mwatsefu
            </span>
        </motion.h2>
       
      
        <motion.div 
      variants={fadeIn('', '', 0.1, 1)}
      transition={{ delay: 2, duration: 1, type: "tween" }}

      className=" "
      >
        <div>
        <h2 className='text-lg font-semibold text-teal-600 dark:text-teal-600 mt-4 text-center'>Fullstack Developer</h2>
            <p className='font-medium text-gray-700 dark:text-gray-400 text-center mt-5'>Software Developer from Nairobi, Kenya who likes to craft solid and scalable software <br/> products  with great user experiences.</p>
            </div>
            </motion.div>
            
            

           
            

        

        
      </div>

    

  <div className="ml-[370px] mt-20 md:block hidden"
  
  >
    <EffectCards2 />
  </div>

  <div className="  md:hidden block "
  
  >
    <MobileCardStack />
  </div>

  {/*<div><ShuffleGrid /></div>*/}

  

    </div>
  </div>
</section>

    </div>
  )
}

{/*

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
  },
  
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};
*/}

export default Hero2