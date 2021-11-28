import styled from "styled-components";

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Backdrop = (props: { show: boolean; cancel: () => void }) =>
  props.show ? <StyledBackdrop onClick={props.cancel} /> : null;
