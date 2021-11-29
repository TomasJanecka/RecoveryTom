import styled from "styled-components";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Home } from "./Home";
import { Food } from "./Food";
import { Muscles } from "./Muscles";
import { Problem } from "./Problem";
import { Exercises } from "./Exercises";
import User from "./User";
import { NavigationBar } from "../navigation/NavigationBar";
import React, { useState } from "react";
import { Modal } from "../UI/modal";

const StyledDefault = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;

  background-color: rosybrown;
`;

export const DefaultPage: React.FC<{}> = (props) => {
  const [userMode, setUserMode] = useState(false);
  const { path, url } = useRouteMatch();

  const toggleUserMode = () => {
    // if ()
    setUserMode((prevState) => !prevState);
  };

  return (
    <StyledDefault>
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
          <Modal show={true} cancel={toggleUserMode}>
            <User toggleUserNavbar={toggleUserMode} showUserNavbar={userMode} />
          </Modal>
        </Route>
      </Switch>
      <NavigationBar toggleUserNavbar={toggleUserMode} />
    </StyledDefault>
  );
};
