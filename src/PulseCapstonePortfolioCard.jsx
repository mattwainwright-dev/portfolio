function PulseCapstonePortfolioCard() {
  const name = "Pulse Capstone"
  const  description = "A music discovery experience I built to create a community in motion around artists, music, and the individual stories united behind them."
  const  liveUrl = "https://mattwainwright-dev.github.io/capstone"
  const  repoUrl = "https://github.com/mattwainwright-dev/capstone"

  return (
    <article className="pulse-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl} role="button" className="pulse-button">See it live</a> <a href={repoUrl} role="button" className="outline pulse-button">Read the code</a>
      </p>
    </article>
  )
}

export default PulseCapstonePortfolioCard