import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

const StyledSideButton = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 10px;
  bottom: 10vh;
  background-color: black;
  z-index: 500;
  border-radius: 50%;
`;

export const SideButton: React.FC<{ toggleNavbar: () => void }> = (props) => {
  return (
    <Link to={"/user"}>
      <StyledSideButton onClick={props.toggleNavbar}>
        {/*<img src={SideButtonImage} alt={"press to open user's menu"} />*/}
      </StyledSideButton>
    </Link>
  );
};
