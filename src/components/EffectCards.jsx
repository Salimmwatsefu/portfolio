import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const EffectCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  // Card data with background images
  const cards = [
    {
        title: "PROJECTS",
        link: "/projects",
        image: "portfolio2.jpg",
      },
    {
      title: "PROFESSIONAL",
      link: "This is the first card.",
      image: "salim.jpg", // Example image
    },
   
    {
      title: "OUTSIDE WORK",
      link: "This is the fourth card.",
      image: "outside-work.jpg",
    },
    {
      title: "BLOG",
      link: "This is the fifth card.",
      image: "https://via.placeholder.com/300x400?text=Card+5",
    },
  ];

  const handleNavigation = () => {
    const nextIndex = (activeIndex + 1) % cards.length; // Loop to the start
    setActiveIndex(nextIndex);

    // Scroll to the next card
    if (cardRefs.current[nextIndex]) {
      cardRefs.current[nextIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Navigation Button */}
      <button
        onClick={handleNavigation}
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Next Card
      </button>
      <div className="flex gap-5 overflow-hidden w-full px-4 py-8">
        {cards.map((card, index) => {
          let cardClass =
            "transition-transform duration-300 transform opacity-50 scale-90"; // Default (blurred)

          if (index === activeIndex) {
            cardClass = "opacity-100 scale-110"; // Active
          } else if (index === activeIndex - 1 || index === activeIndex + 1) {
            cardClass = "opacity-30 scale-100"; // Nearby
          }

          return (
            <Link to={card.link}>
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`flex-shrink-0 w-[250px] h-[350px] rounded-lg shadow-lg flex flex-col justify-center items-center text-center bg-cover bg-center ${cardClass}`}
              style={{
                backgroundImage: `url(${card.image})`,
              }}
            >
                {/* Optional overlay for better text readability */}
              <div className="bg-black bg-opacity-50 w-full h-full rounded-lg flex flex-col justify-center items-center p-4">
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EffectCards;
