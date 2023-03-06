function Event() {
  function isClicked() {
    alert('Clicked!');
  }

  return (
    <>
      <h1>Responding to Events</h1>
      <button onClick={isClicked}>
        Click
      </button>
    </>
  );
}

export default Event;