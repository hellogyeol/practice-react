function PropsBtn2({ count, countUp }) {
  return (
    <>
      <button onClick={countUp}>
        Clicked {count} times
      </button>
    </>
  );
}

export default PropsBtn2;