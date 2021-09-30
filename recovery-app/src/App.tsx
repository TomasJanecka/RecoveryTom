import React, { useEffect } from "react";
import "./App.css";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Muscles } from "./containers/Muscles";
import { Home } from "./containers/Home";
import { Exercises } from "./containers/Exercises";
import { Plus } from "./containers/Plus";

const TRACKING_ID = "G-WM9B8LTMQ2";

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview("/");
  }, []);

  return (
    <Router>
      <ul>
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

      <Switch>
        <Route path={"/muscles"}>
          <Muscles />
        </Route>
        <Route path={"/exercises"}>
          <Exercises />
        </Route>
        <Route path={"/plus"}>
          <Plus />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
