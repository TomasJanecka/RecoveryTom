import styled from "styled-components";
import React, { useState } from "react";
import { UsersNavigation } from "../navigation/UsersNavigation";
import { Backdrop } from "../UI/Backdrop";

const StyledUserMenu = styled.div`
  width: 90vw;
  height: 100vh;
  position: relative;
  float: right;
  z-index: 300;

  background-color: cadetblue;
`;

export const User: React.FC<{
  showUserNavbar: boolean;
  toggleUserNavbar: () => void;
}> = (props) => {
  return (
    <StyledUserMenu>
      <Backdrop show={props.showUserNavbar} cancel={props.toggleUserNavbar} />
      <UsersNavigation
        showUserNavbar={props.showUserNavbar}
        toggleUserNavbar={props.toggleUserNavbar}
      />
    </StyledUserMenu>
  );
};
