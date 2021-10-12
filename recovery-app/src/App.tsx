import React, { useEffect, useState } from "react";
import "./App.css";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Muscles } from "./containers/Muscles";
import { Home } from "./containers/Home";
import { Exercises } from "./containers/Exercises";
import { Plus } from "./containers/Plus";
import { Glass } from "./components/Glass";
import Theme from "./theme/Theme";

const TRACKING_ID = "G-WM9B8LTMQ2";

const DARK_MODE = true;

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview("/");
  }, []);

  return (
    <Theme darkMode={DARK_MODE}>
      <a href={""}>janoooo</a>
      <Router>
        <ul>
          <li>
            <Link to={`/`}>home</Link>
          </li>
          <li>
            <Link to={`/muscles`}>muscles</Link>
          </li>
          <li>
            <Link to={`/exercises`}>exercises</Link>
          </li>
          <li>
            <Link to={`/plus`}>plus</Link>
          </li>
        </ul>

        <Glass />

        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path={"/muscles"}>
            <Muscles />
          </Route>
          <Route path={"/exercises"}>
            <Exercises />
          </Route>
          <Route path={"/plus"}>
            <Plus />
          </Route>
        </Switch>
      </Router>
    </Theme>
  );
}

export default App;
