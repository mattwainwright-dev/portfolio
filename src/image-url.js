const imageUrl = (photo, width, height, sat, sepia) => {
  if (photo.startsWith("/")) {
    return photo;
  }

  return (
    "https://images.unsplash.com/" +
    photo +
    "?w=" +
    width +
    "&h=" +
    height +
    "&fit=crop&auto=format&sat=" +
    sat +
    "&sepia=" +
    sepia
  );
};

export default imageUrl
