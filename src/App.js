import test from './test.css'

const title = 'Title string';
let condition = false;
let alwaysTrue = true;

function App() {
  return (
    <>
      <h1
        className="h1"
        style={{
          color: 'blue'
        }}
      >
        {title}
      </h1>

      {condition ? (<IsTrue />) : (<IsFalse />)}

      {alwaysTrue && <ImTrue />}
    </>
  );
}

function IsTrue() {
  return (
    <h3>Im true!</h3>
  );
}

function IsFalse() {
  return (
    <h3>Im false!</h3>
  );
}

function ImTrue() {
  return (
    <h4>Im always true!</h4>
  );
}

export default App;