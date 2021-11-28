import React from "react";
import styled from "styled-components";
import { media } from "../theme/media";
import { CardType } from "../@types/types";
import cake from "../assets/images/foto.jpg";

export const Card: React.FC<{
  imageUrl: string;
  height: string;
  width: string;
}> = (props) => {
  return (
    <StyledCard width={props.width} height={props.height}>
      <CardImage src={props.imageUrl || cake} alt={"Card image"} />
    </StyledCard>
  );
};

const StyledCard = styled.div<{
  theme: any;
  width: string;
  height: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;

  text-align: center;
  align-self: center;
  //box-shadow: 0 4px 3px 7px rgba(206, 206, 206, 0.5);

  @media (${media.tablet}) {
    height: 23rem;
    width: 37rem;
    margin: 0.8rem 0;
  }
`;

const CardImage = styled.img<{ theme: any }>`
  height: 100%;
  width: 100%;
  justify-self: center;

  background-color: lightgray;
  border-radius: ${(props) => props.theme.border};
`;
