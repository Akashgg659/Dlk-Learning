import React, { useEffect, useState } from 'react';


const MetroBackground = () => {
  const [meteors, setMeteors] = useState([]);

  // Function to create meteors at random positions
  const generateMeteors = () => {
    const numberOfMeteors = 10; // You can change the number of meteors
    const meteorArray = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      const leftPosition = Math.random() * 100;
      const duration = Math.random() * (5 - 3) + 3; // Random falling duration (3 to 5 seconds)
      meteorArray.push({ leftPosition, duration });
    }

    setMeteors(meteorArray);
  };

  useEffect(() => {
    generateMeteors();
    const intervalId = setInterval(generateMeteors, 5000); // Regenerate meteors every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="meteor-background">
      {meteors.map((meteor, index) => (
        <div
          key={index}
          className="meteor"
          style={{
            left: `${meteor.leftPosition}%`,
            animationDuration: `${meteor.duration}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default MetroBackground;