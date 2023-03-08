function PropsBtn1({ count, countUp }) {
  return (
    <>
      <button onClick={countUp}>
        Clicked {count} times
      </button>
    </>
  );
}

export default PropsBtn1;