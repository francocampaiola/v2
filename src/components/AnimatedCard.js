import React from "react";

const AnimatedCard = ({ children, className = "", delay = 0 }) => {
  return (
    <div
      className={`transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animation: "fadeInUp 0.6s ease-out forwards",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
