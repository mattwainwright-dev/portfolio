function PhotoControls({
  onPrevious,
  onNext,
  onFirst,
  onSecond,
  onThird,
  onColor,
  onBlackAndWhite,
  onNoSepia,
  onSepia,
  onReset,
  position,
  total,
}) {
  return (
    <div>
      <p>
        {position} of {total}
      </p>
      <p className="hero-buttons">
        <button onClick={onPrevious}>Previous Pulse</button>
        <button onClick={onNext}>Next Pulse</button>
        <button onClick={onFirst}>1</button>
        <button onClick={onSecond}>2</button>
        <button onClick={onThird}>3</button>
        <button onClick={onColor}>Color</button>
        <button onClick={onBlackAndWhite}>Black and White</button>
        <button onClick={onNoSepia}>No Sepia</button>
        <button onClick={onSepia}>Sepia</button>
        <button onClick={onReset}>Reset</button>
      </p>
    </div>
  );
}

export default PhotoControls;
