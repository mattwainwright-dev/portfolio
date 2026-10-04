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

export default Fortune