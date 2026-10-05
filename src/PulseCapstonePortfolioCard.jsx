function PulseCapstonePortfolioCard() {
  let name = "Pulse Capstone"
  let description = "A music discovery experience I built to create a community in motion around artists, music, and the individual stories united behind them."
  let liveUrl = "https://mattwainwright-dev.github.io/capstone"
  let repoUrl = "https://github.com/mattwainwright-dev/capstone"

  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
    </article>
  )
}

export default PulseCapstonePortfolioCard