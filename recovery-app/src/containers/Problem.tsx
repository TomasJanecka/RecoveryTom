import styled from "styled-components";
import bodyFront from "../assets/images/bodyFront.png";

const StyledProblem = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: rosybrown;
`;

const Body = styled.div`
  height: 400px;
  width: 125px;
  position: absolute;
  top: 5%;
  left: calc((100vw - 125px) / 2);
`;

export const Problem = () => {
  return (
    <StyledProblem>
      <Body>
        <img src={bodyFront} alt={""} />
      </Body>
    </StyledProblem>
  );
};
