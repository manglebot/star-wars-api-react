import React from "react";
import "./App.css";
import { FetchCharacter } from "./components/use_fetch/fetchCharacter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FetchCharacter />
        <img src="logo.svg" className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
