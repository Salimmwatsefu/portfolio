import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dices } from "lucide-react";

const MobileCardStack = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle card active

  // Data from MobileCardsStack
  const cardData = [
    {
      id: 1,
      title: "PROFESSIONAL",
      bgImage: "outside-work.jpg",
      color: "#4D7C5E", // Green-ish tint
      route: "/professional"
    },
    {
      id: 2,
      title: "EXPERIENCE",
      bgImage: "salim.jpg",
      color: "#905D6C", // Purple-ish tint
      route: "/experience"
    },
    {
      id: 3,
      title: "PROJECTS",
      bgImage: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
      color: "#4A6D8B", // Blue-ish tint
      route: "/projects"
    },
    {
      id: 4,
      title: "BLOG",
      bgImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "#8B614A", // Brownish tint
      route: "/blog"
    },
    {
      id: 5,
      title: "ABOUT",
      bgImage: "setup.jpg",
      color: "#6A568B", // Dark purple tint
      route: "/about"
    }
  ];

  // Function to shuffle cards (can be implemented later)
  const shuffleCards = () => {
    console.log("Cards shuffled!");
  };

  // Calculate fan layout positions for each card
  const calculateCardPositions = () => {
    const totalCards = cardData.length;
    const positions = [];
    
    for (let i = 0; i < totalCards; i++) {
      // Calculate the angle in radians
      // Cards span approximately from -0.06 to +0.06 radians
      const angleRange = 0.12566; // About 7.2 degrees total span
      const angleStep = angleRange / (totalCards - 1);
      const angle = -0.06283 + (i * angleStep);
      
      // Calculate X offset based on the angle
      const xOffset = Math.sin(angle) * 430; // Multiplier controls spread width
      
      // Calculate Y offset - slight upward curve for middle cards
      const yOffset = Math.abs(i - Math.floor(totalCards/2)) * 0.8;
      
      positions.push({
        translateX: xOffset,
        translateY: yOffset,
        rotate: angle,
        zIndex: i
      });
    }
    
    return positions;
  };

  const cardPositions = calculateCardPositions();

  return (
    <div className="relative lg:h-1/2 h-full flex items-end justify-center">
      {/* Dice button for mobile */}
      <div className="lg:hidden absolute h-full">
        <div className="w-full h-1/4 flex items-end ">
          <div 
            className="p-2 bg-gray-100 rounded-full shadow-md cursor-pointer" 
            tabIndex="0"
            onClick={shuffleCards}
            style={{opacity: 1}}
          >
            <Dices width={40} height={40} />
          </div>
        </div>
      </div>
      
      {/* Card fan layout */}
      {cardData.map((card, index) => {
        const position = cardPositions[index];
        const gradientFrom = card.color;
        const gradientTo = card.color; // You could calculate a darker shade if needed
        
        return (
          <div 
            key={card.id}
            className="absolute" 
            style={{
              transformOrigin: "center bottom",
              height: "310.667px",
              transform: `translateX(${position.translateX}px) translateY(${position.translateY}px) rotate(${position.rotate}rad) translateZ(0px)`,
              opacity: 1,
              zIndex: position.zIndex,
              top: 70
             // Position at the bottom of the container
            }}
          >
            <Link to={card.route}>
              <div className="relative bottom-0 h-full aspect-square cursor-pointer">
                <div className="w-full h-full" style={{filter: "contrast(1)"}}>
                  <img 
                    alt={`${card.title} Card`}
                    loading="lazy"
                    width="300"
                    height="300"
                    className="select-none w-full h-full object-cover shadow-lg shadow-zinc-500/40 drop-shadow-xl rounded-lg border-white p-1"
                    style={{color: "transparent"}}
                    src={card.bgImage}
                  />
                </div>
                <div 
                  className="absolute top-0 w-full h-full bg-gradient-to-b rounded-xl z-20 opacity-80 flipCard-front"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`
                  }}
                ></div>
                <div className="absolute top-0 w-full h-full flex justify-center z-30 text-[#F9FFF2] font-silk md:text-base lg:text-lg xl:text-xl 2xl:text-3xl py-5 flipCard-front">
                  <div>{card.title}</div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MobileCardStack;