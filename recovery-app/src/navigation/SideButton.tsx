import styled from "styled-components";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import React from "react";

const StyledSideButton = styled.div`
  width: 30px;
  height: 30px;
  position: fixed;
  right: 10px;
  bottom: 10vh;
  background-color: black;
  z-index: 10000;
  border-radius: 50%;
`;

export const SideButton: React.FC<{ toggleNavbar: () => void }> = (props) => {
  const { pathname } = useLocation();
  console.log(useLocation());
  const newUrl = pathname.includes("user") ? "/" : "/user";

  return (
    <Link to={newUrl}>
      <StyledSideButton onClick={props.toggleNavbar}>
        {/*<img src={SideButtonImage} alt={"press to open user's menu"} />*/}
      </StyledSideButton>
    </Link>
  );
};
