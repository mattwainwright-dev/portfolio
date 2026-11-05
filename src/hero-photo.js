import imageUrl from './image-url.js'

const heroPhoto = ({ photo, width, height, sat = 0, sepia, description }) => {
  const src = imageUrl({ photo, width, height, sat, sepia });
  const alt = description;
  return [src, alt];
};


export default heroPhoto