import { useState } from 'react';
import PropsBtn1 from './PropsBtn1';
import PropsBtn2 from './PropsBtn2';

function Props() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Use Props</h1>
      <PropsBtn1 count={count} countUp={handleClick} />
      <PropsBtn2 count={count} countUp={handleClick} />
    </>
  );
}

export default Props;