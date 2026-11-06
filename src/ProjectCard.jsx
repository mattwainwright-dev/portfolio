import { useState } from "react";

function ProjectCard({ project }) {
  const [likes, setLikes] = useState(0);
  const [open, setOpen] = useState(false);

  const addLike = () => {
    setLikes(likes + 1);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  let text = project.description;
  if (open) {
    text = project.description + " " + project.details;
  }

  let label = "Show More";
  if (open) {
    label = "Show Less";
  }

  return (
    <article className="pulse-card">
      <h2>{project.name}</h2>
      <p>Status: {project.status}</p>
      <p>{text}</p>
      <p>
        <a href={project.liveUrl} role="button" className="pulse-button">
          See it live
        </a>{" "}
        <a
          href={project.repoUrl}
          role="button"
          className="outline pulse-button"
        >
          Read the code
        </a>
      </p>
      <button onClick={toggleOpen}>{label}</button>
      <button onClick={addLike}>Like {likes}</button>
    </article>
  );
}

export default ProjectCard;
