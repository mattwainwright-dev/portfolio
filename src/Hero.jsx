import { useState } from "react";
import heroPhoto from "./hero-photo.js";
import "./hero.css";

function Hero() {
  const photos = [
    "premium_photo-1670455445879-07d27cb842c1",
    "/gothic-church.jpg",
    "/neon-bumper-cars.jpg",
  ];

  const descriptions = [
    "Abstract black, cyan, and orange fluid pattern",
    "Gothic church glowing red in a blue foggy forest",
    "Neon bumper cars beneath colorful lights",
  ];

  const [index, setIndex] = useState(0);
  const [sat, setSat] = useState(0);
  const [sepia, setSepia] = useState(0);

  const nextPhoto = () => {
    if (index === photos.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const previousPhoto = () => {
    if (index === 0) {
      setIndex(photos.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const showFirst = () => setIndex(0);
  const showSecond = () => setIndex(1);
  const showThird = () => setIndex(2);

  const showColor = () => {
    setSat(0);
  };

  const showBlackAndWhite = () => {
    setSat(-100);
  };

  const showNoSepia = () => {
    setSepia(0);
  };

  const showSepia = () => {
    setSepia(80);
  };

  const readSepia = (event) => {
    setSepia(Number(event.target.value));
  };

  const [src, alt] = heroPhoto(
    photos[index],
    1200,
    500,
    sat,
    sepia,
    descriptions[index],
  );

  return (
    <div>
      <div className="hero">
        <img src={src} alt={alt} />
      </div>
      <p className="hero-buttons">
        <button onClick={previousPhoto}>Previous Pulse</button>
        <button onClick={nextPhoto}>Next Pulse</button>
        <button onClick={showFirst}>1</button>
        <button onClick={showSecond}>2</button>
        <button onClick={showThird}>3</button>
        <button onClick={showColor}>Color</button>
        <button onClick={showBlackAndWhite}>Black and White</button>
        <button onClick={showNoSepia}>No Sepia</button>
        <button onClick={showSepia}>Sepia</button>
      </p>
      <input
        type="range"
        min="0"
        max="100"
        step="10"
        value={sepia}
        onChange={readSepia}
      />
      <p>Sepia: {sepia}</p>
    </div>
  );
}

export default Hero;
