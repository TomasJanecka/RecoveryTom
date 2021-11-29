import React, { useEffect, useState } from "react";
import "./App.css";
import ReactGA from "react-ga";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "./theme/Theme";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { user } from "./store/atoms";
import { DefaultPage } from "./containers/DefaultPage";
import { UserCheck } from "./components/UserCheck";

const TRACKING_ID = "G-WM9B8LTMQ2";

const StyledApp = styled.div<{ theme: any }>`
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.colors.second};
  margin: 0;
`;

function App() {
  const [userInfo] = useRecoilState(user);
  const [input, setInput] = useState();

  // console.log(userInfo);

  // const handleChange(event: any): any => {
  //
  // }

  // function usePageViews() {
  //   let location = useLocation();
  //   React.useEffect(() => {
  //     ga.send(["pageview", location.pathname]);
  //   }, [location]);
  // }

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Theme darkMode={userInfo.darkMode}>
      <Router>
        <StyledApp>
          {userInfo.loggedIn || <UserCheck />}
          <DefaultPage />
        </StyledApp>
      </Router>
    </Theme>
  );
}

export default App;
