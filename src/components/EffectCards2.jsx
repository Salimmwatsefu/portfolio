import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";


// Reusable Card component
const Card = ({ index, title, bgImage, transform, onHover, offHover, borderColor }) => (
  <Link to={`/${title.toLowerCase().replace(" ", "-")}`}>
    <motion.div
      className={`absolute w-[250px] h-[300px] rounded-lg shadow-lg flex flex-col justify-center items-center text-center bg-cover bg-center transition-transform duration-300 border-4 border-teal-500`}
      style={{
        transformOrigin: "center bottom",
        transform: transform,
        zIndex: index,
        backgroundImage: `url(${bgImage})`,
        opacity: 1,
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={offHover}
      initial={{ opacity: 0, y: 100 }} // Initial state: opacity 0, y offset down
      animate={{ opacity: 1, y: 0, transform }} // Animate to the target position
      transition={{  }}
    >
      <div className={`bg-black bg-opacity-50 w-full h-full rounded-lg flex flex-col justify-start items-center p-4 `}>
        <h3 className="text-lg font-bold text-white mb-2 mt-7">{title}</h3>
      </div>
    </motion.div>
  </Link>
);

const EffectCards2 = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardData = [
    {
      id: 1,
      title: "CONTACT",
      bgImage: "outside-work.jpg",
      borderColor: "teal",
      transform: hoveredCard === 1 ? "translateX(-270px) translateY(-20px) rotate(-16deg)" : "translateX(-270px) translateY(40px) rotate(-16deg)"
    },
    {
      id: 2,
      title: "EXPERIENCE",
      bgImage: "salim.jpg",
      borderColor: "amber",
      transform: hoveredCard === 2 ? "translateX(-120px) translateY(-55px) rotate(-7deg)" : "translateX(-120px) translateY(5px) rotate(-7deg)"
    },
    {
      id: 3,
      title: "PROJECTS",
      bgImage: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
      borderColor: "teal",
      transform: hoveredCard === 3 ? "translateX(0px) translateY(-52px) rotate(0deg)" : "translateX(0px) translateY(-8px) rotate(0deg)"
    },
    {
      id: 4,
      title: "BLOG",
      bgImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      borderColor: "amber",
      transform: hoveredCard === 4 ? "translateX(200px) translateY(-55px) rotate(7deg)" : "translateX(200px) translateY(5px) rotate(7deg)"
    },
    {
      id: 5,
      title: "ABOUT",
      bgImage: "setup.jpg",
      borderColor: "teal",
      transform: hoveredCard === 5 ? "translateX(390px) translateY(-14px) rotate(16deg)" : "translateX(390px) translateY(46px) rotate(16deg)"
    },
  ];

  const handleMouseEnter = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="">
      <div className="relative w-full max-w-4xl h-[400px]">
        {cardData.map((card) => (
          <Card
            key={card.id}
            index={card.id}
            title={card.title}
            bgImage={card.bgImage}
            transform={card.transform}
            onHover={handleMouseEnter}
            offHover={handleMouseLeave}
            borderColor={card.borderColor}
          />
        ))}
      </div>
    </div>
  );
};

export default EffectCards2;
