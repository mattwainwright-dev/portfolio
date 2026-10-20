import { useState } from 'react'

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

function Fortune() {
  const fortunes = [
    "Music for the people.",
    "Bring music to your life.",
    "Keep your finger on the pulse."
  ]

  const [index, setIndex] = useState(0)

  const newFortune = () => {
    setIndex(randomNumber(0, fortunes.length - 1))
  }

  return (
    <div>
      <p>{fortunes[index]}</p>
      <button onClick={newFortune}>New Fortune</button>
    </div>
  )
}

export default Fortune
