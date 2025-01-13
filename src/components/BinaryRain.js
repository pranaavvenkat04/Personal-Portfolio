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

    const letters = "01";
    const columns = Math.floor(width / fontSize);
    
    const columnPositions = Array(columns).fill(0).map((_, i) => ({
      x: (i * fontSize) + (Math.random() * fontSize * 0.5 - fontSize * 0.25),
      y: 0,
      speed: 1 + Math.random() * 0.5,
      active: false,
      nextActivation: Math.random() * 100
    }));

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#000000";
      ctx.font = `${fontSize}px monospace`;

      columnPositions.forEach((column) => {
        if (!column.active) {
          column.nextActivation--;
          if (column.nextActivation <= 0) {
            column.active = true;
            column.y = 0;
          }
        }

        if (column.active) {
          const text = letters[Math.floor(Math.random() * letters.length)];
          ctx.fillText(text, column.x, column.y);

          column.y += column.speed * fontSize;

          if (column.y > height) {
            column.active = false;
            column.nextActivation = Math.random() * 50;
            column.speed = 1 + Math.random() * 0.5;
          }
        }
      });
    };

    const interval = setInterval(drawMatrix, 50);
    return () => clearInterval(interval);
  }, [fontSize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default BinaryRain;