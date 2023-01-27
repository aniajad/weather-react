import React from "react";
import Weather from "./Weather";
import { Rings } from "react-loader-spinner";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Rings
          height="80"
          width="80"
          color="#4fa94d"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
        <Weather />
      </header>
      <a href="https://github.com/aniajad/weather-react" target="blank">
        Coded by Anna Jadczyszyn
      </a>
    </div>
  );
}

export default App;
