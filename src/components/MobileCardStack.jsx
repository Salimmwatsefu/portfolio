import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MobileCardStack = () => {
  const [cards, setCards] = useState([
    { id: 1, content: "Hitch-hiker", subtext: "PROFESSIONAL" },
    { id: 2, content: "Card 2", subtext: "DESIGNER" },
    { id: 3, content: "Card 3", subtext: "DEVELOPER" },
  ]);

  const cycleCards = () => {
    setCards(prev => {
      const newStack = [...prev];
      newStack.unshift(newStack.pop());
      return newStack;
    });
  };

  return (
    <div className="relative h-screen w-full flex mt-20 justify-center touch-pan-y">
      <div className="relative w-[80vw] h-[45vh] perspective-1000">
        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="absolute w-full h-full bg-white rounded-2xl shadow-2xl p-8 border-4 border-teal-500 overflow-hidden"
              style={{
                zIndex: cards.length - index,
                rotate: index === 0 ? 0 : index % 2 === 0 ? -5 : 3,
                transformOrigin: "center bottom",
              }}
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ 
                y: index * -20,
                opacity: 1,
                scale: 1 - index * 0.05,
                transition: { 
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.1 
                }
              }}
              exit={{ y: 100, opacity: 0 }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h2 className="text-5xl font-bold text-gray-800 mb-4">
                  {card.content}
                </h2>
                <p className="text-2xl font-semibold text-teal-500">
                  {card.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.button
        onClick={cycleCards}
        className="absolute bottom-8 bg-teal-500 text-white px-6 py-3 rounded-full shadow-lg"
        whileTap={{ scale: 0.95 }}
      >
        Next Card
      </motion.button>
    </div>
  );
};

export default MobileCardStack;