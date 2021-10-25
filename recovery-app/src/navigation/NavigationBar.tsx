import styled from "styled-components";
import { media } from "../theme/media";
import { Link, NavLink } from "react-router-dom";
import SideButtonImage from "../assets/images/side-button.png";
import React, { Fragment, useState } from "react";
import { SideButton } from "./SideButton";

export const NavigationBar: React.FC<{ toggleUserNavbar: () => void }> = (
  props
) => {
  const [isOpen, setIsOpen] = useState(false);

  const openUserMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <StyledNavigationBar>
        <MenuList>
          <ListItem>
            <StyledLink exact to="/" activeStyle={{ opacity: 1 }}>
              Home
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to={"/food"} activeStyle={{ opacity: 1 }}>
              food
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/muscles" activeStyle={{ opacity: 1 }}>
              muscles
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to={"/problem"} activeStyle={{ opacity: 1 }}>
              problem
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to={"/exercises"} activeStyle={{ opacity: 1 }}>
              exercises
            </StyledLink>
          </ListItem>
        </MenuList>
      </StyledNavigationBar>
      <SideButton toggleNavbar={props.toggleUserNavbar} />
    </Fragment>
  );
};

const StyledNavigationBar = styled.nav`
  width: 100%;
  height: 10vh;
  position: fixed;
  bottom: 0;
  z-index: 200;

  background-color: ${(props) => props.theme.colors.main};
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
  width: 20%;
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
