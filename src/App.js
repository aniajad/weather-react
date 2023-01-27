import React from "react";
import Weather from "./Weather";
import { Audio } from "react-loader-spinner";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello world</h1>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="orange"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
        <Weather />
      </header>
    </div>
  );
}

export default App;
