import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Nav from "./Nav.jsx";
import About from "./About.jsx";
import GitHubLink from "./GitHubLink.jsx";
import Footer from "./Footer.jsx";
import Fortune from "./Fortune.jsx";
import ProjectCount from "./ProjectCount.jsx";
import ProjectCard from "./ProjectCard.jsx";
import projects from "./projects.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Nav />
      <p>
        Web development student building at the intersection of music,
        creativity, and code.
      </p>
      <ProjectCount />
      <About />
      <GitHubLink />
      <Fortune />
      <ProjectCard project={projects[0]} featured={true} />
      <ProjectCard project={projects[1]} />
      <ProjectCard project={projects[2]} />
      <Footer />
    </div>
  );
}

export default App;
