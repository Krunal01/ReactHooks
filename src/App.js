// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import Props from "./Props";
import UseState from "./UseState";

function App() {
  const [name, setName] = useState("");
  const [print, setPrint] = useState(false);
  function changeText(e) {
    setName(e.target.value);
    setPrint(false);
  }

  return (
    <>
      {print ? <h1>{name}</h1> : null}
      <input type="text" onChange={changeText} />
      <button onClick={() => setPrint(true)}>Print Data</button>
    </>
  );
}

export default App;

{
  /* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */
}
