import styled from "styled-components";
import { useState } from "react";

const StyledUserMenu = styled.div`
  width: 90vw;
  height: 100vh;
  position: relative;
  float: right;
  z-index: 300;

  background-color: cadetblue;
`;

export const User = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openUserMenu = () => {
    setIsOpen(!isOpen);
  };

  return <StyledUserMenu>.</StyledUserMenu>;
};
