import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import Main from "../src/components/Main.jsx"

function App() {
  return (
    <div className="App">
      {/* <h1>CIAO DOVILE</h1> */}
      <Main/>
    </div>
  );
}

export default App;
