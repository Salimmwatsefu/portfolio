import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MobileCardStack = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "OUTSIDE WORK", bgImage: "outside-work.jpg" },
    { id: 2, title: "EXPERIENCE", bgImage: "salim.jpg" },
    { id: 3, title: "PROJECTS", bgImage: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 4, title: "BLOG", bgImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, title: "ABOUT", bgImage: "setup.jpg" },
  ]);

  const cycleCards = () => {
    setCards(prev => {
      const newStack = [...prev];
      newStack.unshift(newStack.pop()); // Moves last card to the front
      return newStack;
    });
  };

  return (
    <div className="relative h-screen w-full mt-10 justify-center touch-pan-y">
      <div className="flex justify-center">
        <motion.button
          onClick={cycleCards}
          className="bg-teal-500 text-white px-6 py-3 rounded-full shadow-lg"
          whileTap={{ scale: 0.95 }}
        >
          Next Card
        </motion.button>
      </div>

      <div className="flex justify-center mt-10">
        <div className="relative w-[65vw] h-[35vh] perspective-1000">
          <AnimatePresence>
            {cards.map((card, index) => {
              let xOffset = 0;
              if (index === 1) xOffset = -30; // 2nd card slightly left
              if (index === 2) xOffset = 30;  // 3rd card slightly right
              if (index === 3) xOffset = -60; // 4th card further left
              if (index === 4) xOffset = 60;  // 5th card further right

              return (
                <motion.div
                  key={card.id}
                  className="absolute w-full h-full bg-white rounded-2xl shadow-2xl border-4 border-teal-500 overflow-hidden bg-cover bg-center"
                  style={{
                    zIndex: cards.length - index,
                    backgroundImage: `url(${card.bgImage})`,
                  }}
                  initial={{ x: 50, opacity: 0, scale: 0.95 }}
                  animate={{ 
                    x: xOffset, // Shift based on index for side peeking effect
                    y: index * 10, // Minor vertical shift for layering
                    opacity: 1,
                    scale: 1 - index * 0.05,
                    rotate: index === 0 ? 0 : index % 2 === 0 ? -3 : 3, // Small tilt effect
                    transition: { type: "spring", stiffness: 100, delay: index * 0.1 }
                  }}
                  exit={{ x: -100, opacity: 0 }}
                >
                  <div className="bg-black bg-opacity-70 w-full h-full rounded-lg flex flex-col justify-start items-center p-4">
                    <h3 className="text-base font-bold text-white mb-2 mt-14">{card.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MobileCardStack;
