import styled from "styled-components";
import bodyFront from "../assets/images/bodyFront2.png";

const StyledMuscles = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;

  background-color: lightcoral;
`;

const Body = styled.div`
  height: 400px;
  width: 125px;
  position: absolute;
  top: 5%;
  left: calc((100vw - 170px) / 2);
`;

export const Muscles = () => {
  return (
    <StyledMuscles>
      <Body>
        <img src={bodyFront} alt={""} />
      </Body>
    </StyledMuscles>
  );
};
