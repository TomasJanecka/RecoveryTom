import styled from "styled-components";
import { media } from "../theme/media";
import { Link, NavLink } from "react-router-dom";
import SideButtonImage from "../assets/images/side-button.png";
import React, { Fragment, useState } from "react";
import { SideButton } from "./SideButton";
import { Backdrop } from "../UI/Backdrop";

export const UsersNavigation: React.FC<{
  showUserNavbar: boolean;
  toggleUserNavbar: () => void;
}> = (props) => {
  console.log(props.showUserNavbar);
  return (
    <Fragment>
      <Backdrop show={props.showUserNavbar} cancel={props.toggleUserNavbar} />
      {props.showUserNavbar && (
        <StyledNavigationBar>
          <MenuList>
            <ListItem>
              <StyledLink exact to="/messages" activeStyle={{ opacity: 1 }}>
                messages
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to={"/problems"} activeStyle={{ opacity: 1 }}>
                problems
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/favorites" activeStyle={{ opacity: 1 }}>
                favorites
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to={"/profile"} activeStyle={{ opacity: 1 }}>
                profile
              </StyledLink>
            </ListItem>
          </MenuList>
        </StyledNavigationBar>
      )}
    </Fragment>
  );
};

const StyledNavigationBar = styled.nav`
  width: 90%;
  height: 10vh;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 300;

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
