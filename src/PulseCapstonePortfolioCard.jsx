import { useState } from "react";
function PulseCapstonePortfolioCard() {
  const name = "Pulse Capstone";
  const description =
    "A music discovery experience I built to create a community in motion around artists, music, and the individual stories united behind them.";
  const details =
    "Pulse features artist discovery, music information, and interactive experiences designed to bring people closer to the music they love.";
  const liveUrl = "https://mattwainwright-dev.github.io/capstone";
  const repoUrl = "https://github.com/mattwainwright-dev/capstone";

  const [likes, setLikes] = useState(0);
  const [open, setOpen] = useState(false);

  const addLike = () => {
    setLikes(likes + 1);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  let text = description;
  if (open) {
    text = description + " " + details;
  }

  let label = "Show More";
  if (open) {
    label = "Show Less";
  }

  return (
    <article className="pulse-card">
      <h2>{name}</h2>
      <p>{text}</p>
      <p>
        <a href={liveUrl} role="button" className="pulse-button">
          See it live
        </a>{" "}
        <a href={repoUrl} role="button" className="outline pulse-button">
          Read the code
        </a>
      </p>
      <button onClick={toggleOpen}>{label}</button>
      <button onClick={addLike}>Like {likes}</button>
    </article>
  );
}

export default PulseCapstonePortfolioCard;
