function PulseMotionPortfolioCard() {
  let name = "Pulse Motion"
  let description = "An interactive music visualization concept exploring how motion, sound, and code can become one experience."
  let liveUrl = "https://mattwainwright-dev.github.io/pulse-motion/"
  let repoUrl = "https://github.com/mattwainwright-dev/pulse-motion"

  return (
    <article>
      <img
        src="/pulse-motion.png"
        alt="Pulse Motion music visualization"
        width={600}
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
    </article>
  )
}

export default PulseMotionPortfolioCard