function ApiTutorialPortfolioCard() {
  let name = "API Tutorial"
  let description = "A step-by-step tutorial I built to demonstrate how an API request becomes data we can use on a webpage."
  let liveUrl = "https://mattwainwright-dev.github.io/api-tutorial/"
  let repoUrl = "https://github.com/mattwainwright-dev/api-tutorial"

  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl} role="button">See it live</a> <a href={repoUrl} role="button" className="outline">Read the code</a>
      </p>
    </article>
  )
}

export default ApiTutorialPortfolioCard