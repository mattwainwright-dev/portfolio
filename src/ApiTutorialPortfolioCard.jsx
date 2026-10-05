function ApiTutorialPortfolioCard() {
  let name = "API Tutorial"
  let description = "A Level 2 project that uses a data API to dynamically render records."
  let liveUrl = "https://mattwainwright-dev.github.io/api-tutorial/"
  let repoUrl = "https://github.com/mattwainwright-dev/api-tutorial"

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

export default ApiTutorialPortfolioCard