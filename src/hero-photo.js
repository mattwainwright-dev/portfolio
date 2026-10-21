import imageUrl from './image-url.js'

const heroPhoto = (width, height, sat, sepia, description) => {
  const src = imageUrl(width, height, sat, sepia)
  const alt = description
  return [src, alt]
}

export default heroPhoto