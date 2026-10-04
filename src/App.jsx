import Header from './Header.jsx'

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}



function Fortune() {
  let fortunes = [
    "Music for the people.",
    "Bring music to your life.",
    "Keep your finger on the pulse."
  ]
  let fortune = fortunes[randomNumber(0, fortunes.length - 1)]
  return <p>{fortune}</p>
}

function Footer() {
  let year = new Date().getFullYear()
  return <p>&copy; {year} Matthew Wainwright</p>
}
function GitHubLink() {
  const url = "https://github.com/mattwainwright-dev"
  const label = "GitHub Profile"

  return <a href={url}>{label}</a>
}

function App() {
  return (
    <div>
      <Header />
      <p>Web developer building Pulse one component at a time.</p>
      <GitHubLink />
      <Fortune />
      <Footer />
    </div>
  );
}

export default App;
