import { useState } from "react";

function ApiTutorialPortfolioCard() {
  const name = "API Tutorial";
  const description =
    "A step-by-step tutorial I built to demonstrate how an API request becomes data we can use on a webpage.";
  const liveUrl = "https://mattwainwright-dev.github.io/api-tutorial/";
  const repoUrl = "https://github.com/mattwainwright-dev/api-tutorial";

  const [likes, setLikes] = useState(0)

  const addLike = () => {
    setLikes(likes + 1)
  }

  return (
    <article className="pulse-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl} role="button" className="pulse-button">
          See it live
        </a>{" "}
        <a href={repoUrl} role="button" className="outline pulse-button">
          Read the code
        </a>
      </p>
     <button onClick={addLike}>Like {likes}</button> 
    </article>
  );
}

export default ApiTutorialPortfolioCard;
