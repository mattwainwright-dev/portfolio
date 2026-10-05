import Header from './Header.jsx'
import About from './About.jsx'
import GitHubLink from './GitHubLink.jsx'
import Footer from './Footer.jsx'
import Fortune from './Fortune.jsx'
import ProjectCount from './ProjectCount.jsx'
import PulseCapstonePortfolioCard from './PulseCapstonePortfolioCard.jsx'
import ApiTutorialPortfolioCard from './ApiTutorialPortfolioCard.jsx'







function App() {
  return (
    <div className="container">
      <Header />
      <p>Web developer building Pulse one component at a time.</p>
      <ProjectCount />
      <About />
      <GitHubLink />
      <Fortune />
      <PulseCapstonePortfolioCard />
      <ApiTutorialPortfolioCard />
      <Footer />
    </div>
  );
}

export default App;
