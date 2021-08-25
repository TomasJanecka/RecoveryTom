import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import ReactGA from "react-ga";

const TRACKING_ID = "G-WM9B8LTMQ2"; // TRACKING_ID

function App() {
  useEffect(() => {
    axios.get("/test").then((response) => {
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview("/");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
