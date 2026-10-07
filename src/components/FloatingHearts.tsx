import React, { useEffect, useState } from 'react';

interface FloatingHeart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  symbol: string;
}

export const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);
  const symbols = ['❤️', '💖', '🌹', '💕', '💗', '💌', '🤍'];

  useEffect(() => {
    const initialHearts: FloatingHeart[] = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: Math.random() * 95,
      size: Math.floor(Math.random() * 20) + 14,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 8,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
    }));
    setHearts(initialHearts);
  }, []);

  const addHeartOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const newHeart: FloatingHeart = {
      id: Date.now() + Math.random(),
      left: Math.max(2, Math.min(95, x)),
      size: Math.floor(Math.random() * 24) + 18,
      duration: 8,
      delay: 0,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
    };

    setHearts((prev) => [...prev.slice(-30), newHeart]);
  };

  return (
    <div
      onClick={addHeartOnClick}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute select-none animate-float-heart opacity-60 transition-opacity hover:opacity-100"
          style={{
            left: `${h.left}%`,
            bottom: '-40px',
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          {h.symbol}
        </span>
      ))}
    </div>
  );
};
