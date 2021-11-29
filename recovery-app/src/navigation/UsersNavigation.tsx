import styled from "styled-components";
import { media } from "../theme/media";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import React from "react";
import { Messages } from "../containers/Messages";
import { UserProblems } from "../containers/UserProblems";
import { Profile } from "../containers/Profile";
import { Favorites } from "../containers/Favorites";

const UsersNavigation: React.FC<{
  toggleUserNavbar: () => void;
}> = (props) => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <StyledNavigationBar>
        <MenuList>
          <ListItem>
            <StyledLink
              exact
              to={`${url}/messages`}
              activeStyle={{ opacity: 1 }}
            >
              messages
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to={`${url}/problems`} activeStyle={{ opacity: 1 }}>
              problems
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to={`${url}/favorites`} activeStyle={{ opacity: 1 }}>
              favorites
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to={`${url}/profile`} activeStyle={{ opacity: 1 }}>
              profile
            </StyledLink>
          </ListItem>
        </MenuList>
      </StyledNavigationBar>

      <Switch>
        <Route path={`${path}/messages`}>
          <Messages />
        </Route>
        <Route path={`${path}/problems`}>
          <UserProblems />
        </Route>
        <Route path={`${path}/favorites`}>
          <Favorites />
        </Route>
        <Route path={`${path}/profile`}>
          <Profile />
        </Route>
      </Switch>
    </>
  );
};

export default React.memo(UsersNavigation);

const StyledNavigationBar = styled.nav`
  width: 90%;
  height: 10vh;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1999;

  background-color: ${(props) => props.theme.colors.text};
  border-radius: 20px 20px 0 0;

  @media (${media.desktopM}) {
    width: 60%;
    position: relative;
    align-self: center;
    bottom: 2rem;
    right: auto;
  }
`;

const MenuList = styled.ul`
  display: flex;
  height: 100%;
  flex-flow: row;
  align-self: center;
  padding: 0;
  margin: 0;
  justify-content: space-around;
  list-style-type: none;
`;

const ListItem = styled.li`
  margin: auto;
  width: 25%;
  text-align: center;

  @media (${media.desktopM}) {
    &:first-child {
      display: none;
    }
  }
`;

const StyledLink = styled(NavLink)`
  opacity: 0.5;
  text-decoration: none;
`;
