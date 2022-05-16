import logo from "./logo.svg";
import "./App.css";

function clicked() {
  document.getElementById("greetings").innerHTML =
    "Hello, " + document.getElementById("text_field").value + "!";
}

function App() {
  return (
    <>
      Your name: <input type="text" id="text_field"></input>
      <br />
      <button id="hello_button" onClick={clicked}>
        Hello!
      </button>
      <br />
      <h1 id="greetings"></h1>
    </>
  );
}

export default App;
