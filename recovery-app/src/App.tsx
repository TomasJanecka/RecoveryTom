import React, { useEffect, useState } from "react";
import "./App.css";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Muscles } from "./containers/Muscles";
import { Home } from "./containers/Home";
import { Exercises } from "./containers/Exercises";
import { User } from "./containers/User";
import Theme from "./theme/Theme";
import styled from "styled-components";
import { NavigationBar } from "./navigation/NavigationBar";
import { Food } from "./containers/Food";
import { Problem } from "./containers/Problem";
import { useRecoilState } from "recoil";
import { user } from "./store/atoms";

const TRACKING_ID = "G-WM9B8LTMQ2";

const StyledApp = styled.div<{ theme: any }>`
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.colors.second};
  margin: 0;
`;

function App() {
  const [showUserNavbar, setShowUserNavbar] = useState(false);
  const [userInfo] = useRecoilState(user);
  // function usePageViews() {
  //   let location = useLocation();
  //   React.useEffect(() => {
  //     ga.send(["pageview", location.pathname]);
  //   }, [location]);
  // }

  const toggleUserNavbar = () => {
    setShowUserNavbar((prevState) => !prevState);
  };

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Theme darkMode={userInfo.darkMode}>
      <Router>
        <StyledApp>
          <Switch>
            <Route exact path={"/"}>
              <Home />
            </Route>
            <Route path={"/food"}>
              <Food />
            </Route>
            <Route path={"/muscles"}>
              <Muscles />
            </Route>
            <Route path={"/problem"}>
              <Problem />
            </Route>
            <Route path={"/exercises"}>
              <Exercises />
            </Route>
            <Route path={"/user"}>
              {showUserNavbar && (
                <User
                  toggleUserNavbar={toggleUserNavbar}
                  showUserNavbar={showUserNavbar}
                />
              )}
            </Route>
          </Switch>
          <NavigationBar toggleUserNavbar={toggleUserNavbar} />
        </StyledApp>
      </Router>
    </Theme>
  );
}

export default App;
