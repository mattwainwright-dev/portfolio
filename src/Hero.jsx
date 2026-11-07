import { useState } from "react";
import heroPhoto from "./hero-photo.js";
import "./hero.css";
import PhotoControls from "./PhotoControls.jsx";

function Hero() {
  const photos = [
    "photo-1470225620780-dba8ba36b745",
    "photo-1493225457124-a3eb161ffa5f",
    "photo-1514525253161-7a46d19cd819",
  ];

  const descriptions = [
    "Colorful stage lights at a music event",
    "Live music performance",
    "Crowd enjoying a concert",
  ];

  const [settings, setSettings] = useState({
    index: 0,
    sat: 0,
    sepia: 0,
  });

  const nextPhoto = () => {
    if (settings.index === photos.length - 1) {
      setSettings({ ...settings, index: 0 });
    } else {
      setSettings({ ...settings, index: settings.index + 1 });
    }
  };

  const previousPhoto = () => {
    if (settings.index === 0) {
      setSettings({ ...settings, index: photos.length - 1 });
    } else {
      setSettings({ ...settings, index: settings.index - 1 });
    }
  };

  const showFirst = () => setSettings({ ...settings, index: 0 });
  const showSecond = () => setSettings({ ...settings, index: 1 });
  const showThird = () => setSettings({ ...settings, index: 2 });

  const showColor = () => {
    setSettings({ ...settings, sat: 0 });
  };

  const showBlackAndWhite = () => {
    setSettings({ ...settings, sat: -100 });
  };

  const showNoSepia = () => {
    setSettings({ ...settings, sepia: 0 });
  };

  const showSepia = () => {
    setSettings({ ...settings, sepia: 80 });
  };

  const readSepia = (event) => {
    setSettings({ ...settings, sepia: Number(event.target.value) });
  };

  const [src, alt] = heroPhoto({
    photo: photos[settings.index],
    width: 1200,
    height: 500,
    sat: settings.sat,
    sepia: settings.sepia,
    description: descriptions[settings.index],
  });

  return (
    <div>
      <div className="hero">
        <img src={src} alt={alt} />
      </div>
      <p className="hero-buttons">
        <PhotoControls
          onPrevious={previousPhoto}
          onNext={nextPhoto}
          onFirst={showFirst}
          onSecond={showSecond}
          onThird={showThird}
          onColor={showColor}
          onBlackAndWhite={showBlackAndWhite}
          onNoSepia={showNoSepia}
          onSepia={showSepia}
        />
      </p>
      <input
        type="range"
        min="0"
        max="100"
        step="10"
        value={settings.sepia}
        onChange={readSepia}
      />
      <p>Sepia: {settings.sepia}</p>
    </div>
  );
}

export default Hero;
