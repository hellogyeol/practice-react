import { useState } from "react";

function State() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Use State</h1>
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    </>
  )
}

export default State;