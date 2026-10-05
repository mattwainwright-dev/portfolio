import Header from './Header.jsx'
import About from './About.jsx'
import GitHubLink from './GitHubLink.jsx'
import Footer from './Footer.jsx'
import Fortune from './Fortune.jsx'
import ProjectCount from './ProjectCount.jsx'
import PulseCapstonePortfolioCard from './PulseCapstonePortfolioCard.jsx'
import ApiTutorialPortfolioCard from './ApiTutorialPortfolioCard.jsx'
import PulseMotionPortfolioCard from './PulseMotionPortfolioCard.jsx'







function App() {
  return (
    <div className="container">
      <Header />
      <p>Web development student building at the intersection of music, creativity, and code.</p>
      <ProjectCount />
      <About />
      <GitHubLink />
      <Fortune />
      <PulseCapstonePortfolioCard />
      <ApiTutorialPortfolioCard />
      <PulseMotionPortfolioCard />
      <Footer />
    </div>
  );
}

export default App;
