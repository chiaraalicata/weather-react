import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Francisco" />
        <footer>
          Project coded by{" "}
          <a
            href="https://www.linkedin.com/in/chiara-alicata-9b0529177/"
            target="_blank"
            title="visit Chiara´s coding portfolio"
            rel="noopener noreferrer"
          >
            Chiara Alicata
          </a>{" "}
          and this is{" "}
          <a
            href="https://github.com/chiaraalicata/weather-react"
            title="open-source link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Sourced on GitHub
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
