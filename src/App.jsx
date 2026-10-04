import Header from './Header.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import GitHubLink from './GitHubLink.jsx'
import Footer from './Footer.jsx'
import Fortune from './Fortune.jsx'
import ProjectCount from './ProjectCount.jsx'







function App() {
  return (
    <div>
      <Header />
      <p>Web developer building Pulse one component at a time.</p>
      <ProjectCount />
      <About />
      <Projects />
      <GitHubLink />
      <Fortune />
      <Footer />
    </div>
  );
}

export default App;
