import React, { useEffect, useRef, useState } from "react";
import "../styles/happyNewYear.css";

import img1 from "../assets/photos/a1.jpeg";
import img2 from "../assets/photos/a2.jpeg";
import img3 from "../assets/photos/a3.jpeg";
import img4 from "../assets/photos/a4.jpeg";
import bgImage from "../assets/photos/a5.jpeg";

import HeartBackground from "../components/HeartBackground";
import song from "../assets/music/voice.mp3";

const HappyNewYear = () => {
  const images = [img1, img2, img3, img4];
  const audioRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [musicStarted, setMusicStarted] = useState(false);

  const slides = [
    { id: 1, type: "text", text: "Happy New Year ❤️" },
    { id: 2, type: "text", text: "Every moment with you is my favorite memory ✨" },
    { id: 3, type: "text", text: "I choose you — today, tomorrow, always 💍" },
    { id: 4, type: "image" },
  ];

  // ⏩ Auto slide
  useEffect(() => {
    if (current === slides.length - 1) return;
    const timer = setTimeout(() => setCurrent((p) => p + 1), 4500);
    return () => clearTimeout(timer);
  }, [current]);

  // 🎵 Start music on click (browser safe)
  const startMusic = () => {
    if (!musicStarted) {
      audioRef.current?.play().catch(() => {});
      setMusicStarted(true);
    }
  };

  return (
    <div className="newyear-root" onClick={startMusic}>
      <HeartBackground />

      <audio ref={audioRef} src={song} loop preload="auto" />

      <div className="newyear-carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`newyear-slide ${index === current ? "active" : ""}`}
          >
            <div
              className="glass-card"
              style={{
                backgroundImage: `linear-gradient(
                  rgba(0,0,0,0.55),
                  rgba(0,0,0,0.55)
                ), url(${bgImage})`,
              }}
            >
              {slide.type === "text" ? (
                <h1 className="newyear-text">{slide.text}</h1>
              ) : (
                <div className="gallery-3d-wrapper">
                  <div className="gallery-3d">
                    {images.map((img, i) => (
                      <div
                        key={i}
                        className="gallery-item"
                        style={{
                          transform: `rotateY(${i * (360 / images.length)}deg) translateZ(420px)`,
                        }}
                      >
                        <img src={img} alt="memory" />
                      </div>
                    ))}
                  </div>

                  <h2 className="gallery-heading">Our Forever 💞</h2>
                  <p className="gallery-subtext">
                    Every picture is a heartbeat we shared
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {!musicStarted && (
        <div className="tap-to-start">
          Tap anywhere to start the surprise 💖
        </div>
      )}
    </div>
  );
};

export default HappyNewYear;
