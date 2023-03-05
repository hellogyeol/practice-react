import test from './test.css'

const title = 'Title string';
let condition = false;

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

export default App;