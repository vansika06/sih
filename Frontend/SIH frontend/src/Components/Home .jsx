import React, { useEffect, useState } from 'react';
import './Home.css'; // Import the CSS file

const numStars = 50; // Number of stars

const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateStars = () => {
  console.log("Aaagaue")
  return Array.from({ length: numStars }).map((_, index) => {
    const topOffset = getRandomValue(0, 10000) / 100;
    const starTailLength = getRandomValue(500, 750) / 100;
    const fallDuration = getRandomValue(6000, 12000) / 1000;
    const fallDelay = getRandomValue(0, 10000) / 1000;

    return {
      topOffset: `${topOffset}vh`,
      starTailLength: `${starTailLength}em`,
      fallDuration: `${fallDuration}s`,
      fallDelay: `${fallDelay}s`,
    };
  });
};

const StarryBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(generateStars());
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-full bg-gradient-to-b from-blue-900 to-black">
      <div className="stars-container">
        {stars.map((star, index) => (
          <div
            key={index}
            className="star"
            style={{
              top: star.topOffset,
              width: star.starTailLength,
              animationDuration: star.fallDuration,
              animationDelay: star.fallDelay,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StarryBackground;
