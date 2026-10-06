import imageUrl from './image-url.js'
import './hero.css'

function Hero() {
  const src = imageUrl(1200, 500)
  return (
    <div className="hero">
      <img src={src} alt="Abstract black, cyan, and orange fluid pattern" />
    </div>
  )
}

export default Hero