import styled from "styled-components";
import React, { useState } from "react";
import UsersNavigation from "../navigation/UsersNavigation";
import { Card } from "../components/card";
import { MCard } from "../@types/models";
import { useSwipeable } from "react-swipeable";

const StyledUserMenu = styled.div`
  width: 90vw;
  height: 100vh;
  float: left;
  z-index: 1000;

  background-color: cadetblue;
`;

const User: React.FC<{
  showUserNavbar: boolean;
  toggleUserNavbar: () => void;
}> = (props) => {
  console.log("user");

  const handlers = useSwipeable({
    onSwipedRight: () => props.toggleUserNavbar(),
  });

  return (
    <StyledUserMenu {...handlers}>
      <Card imageUrl={""} height={MCard.large} width={MCard.large} />
      <UsersNavigation
        showUserNavbar={props.showUserNavbar}
        toggleUserNavbar={props.toggleUserNavbar}
      />
    </StyledUserMenu>
  );
};

export default React.memo(User);
