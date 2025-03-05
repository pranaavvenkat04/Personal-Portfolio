import React, { useEffect, useRef, useState } from 'react';

const BinaryRain = () => {
  const canvasRef = useRef(null);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setFontSize(10);
      } else if (width < 768) {
        setFontSize(12);
      } else if (width < 1024) {
        setFontSize(14);
      } else {
        setFontSize(16);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    // Expand the character set slightly for more variety
    const letters = "01";
    
    // Increase randomness of column placement
    const columnSpacing = fontSize * 3.5;
    const columns = Math.floor(width / columnSpacing);
    
    // Create more randomized column positions
    const columnPositions = Array(columns).fill(0).map((_, i) => ({
      // Add some horizontal jitter to each column's starting position
      x: (i * columnSpacing) + (Math.random() * fontSize * 1.5 - fontSize * 0.75),
      y: Math.random() * height, // Start at random heights
      speed: 0.8 + Math.random() * 0.7, // More varied speeds
      active: Math.random() > 0.5, // Some start active, some don't
      nextActivation: Math.random() * 200,
      // Add some variation in opacity
      opacity: 0.7 + Math.random() * 0.3,
      // Add a slight horizontal drift to each column
      drift: Math.random() * 0.4 - 0.2
    }));

    const drawMatrix = () => {
      // Adjust the fade effect to prevent black lines from forming
      ctx.fillStyle = "rgba(255, 255, 255, 0.12)"; // Slightly increased fade
      ctx.fillRect(0, 0, width, height);

      columnPositions.forEach((column, index) => {
        if (!column.active) {
          column.nextActivation--;
          if (column.nextActivation <= 0) {
            column.active = true;
            column.y = 0;
            // Randomize horizontal position slightly when reactivating
            column.x = (Math.floor(index * columnSpacing)) + (Math.random() * fontSize * 1.5 - fontSize * 0.75);
          }
        }

        if (column.active) {
          // Set varying opacity for each character
          ctx.fillStyle = `rgba(0, 0, 0, ${column.opacity})`;
          ctx.font = `${fontSize}px monospace`;
          
          const text = letters[Math.floor(Math.random() * letters.length)];
          
          // Apply slight horizontal drift
          column.x += column.drift;
          
          // Reset drift if it goes too far
          if (Math.abs(column.drift) > 0.5) {
            column.drift = Math.random() * 0.4 - 0.2;
          }
          
          // Add slight randomization to character position
          const jitterX = column.x + (Math.random() * 0.6 - 0.3);
          
          // Draw the character
          ctx.fillText(text, jitterX, column.y);

          column.y += column.speed * fontSize;

          // When a column reaches the bottom, reset with new random properties
          if (column.y > height) {
            column.active = false;
            column.nextActivation = Math.random() * 100 + 50;
            column.speed = 0.8 + Math.random() * 0.7;
            column.opacity = 0.7 + Math.random() * 0.3;
            column.drift = Math.random() * 0.4 - 0.2;
          }
        }
      });
    };

    // Randomly respawn some columns to prevent static patterns
    const respawnRandomColumns = () => {
      const numToRespawn = Math.floor(columns * 0.05); // Respawn 5% of columns
      for (let i = 0; i < numToRespawn; i++) {
        const randomIndex = Math.floor(Math.random() * columns);
        const column = columnPositions[randomIndex];
        
        if (column.active) {
          column.active = false;
          column.nextActivation = Math.random() * 20; // Short delay before reactivation
          column.x = (Math.floor(randomIndex * columnSpacing)) + (Math.random() * fontSize * 1.5 - fontSize * 0.75);
        }
      }
    };

    const interval = setInterval(drawMatrix, 50);
    const respawnInterval = setInterval(respawnRandomColumns, 3000); // Every 3 seconds

    return () => {
      clearInterval(interval);
      clearInterval(respawnInterval);
    };
  }, [fontSize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default BinaryRain;