import React from "react";
import "../styles/happyNewYear.css";

const HeartBackground = () => {
  return (
    <div className="heart-bg">
      {Array.from({ length: 20 }).map((_, i) => (
        <span key={i} className="heart">❤️</span>
      ))}
    </div>
  );
};

export default HeartBackground;
