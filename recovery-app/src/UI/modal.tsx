import { Fragment } from "react";
import styled from "styled-components";
import { Backdrop } from "./Backdrop";

const StyledModal = styled.div<{ show: boolean }>`
  width: fit-content;
  height: fit-content;
  z-index: 1000;
  position: absolute;
  right: 0;

  opacity: ${(props) => (props.show ? "1" : "0")};
`;

export const Modal = (props: {
  show: boolean;
  cancel: () => void;
  children: any;
}) => {
  return (
    <Fragment>
      <Backdrop show={props.show} cancel={props.cancel} />
      <StyledModal show={props.show}>{props.children}</StyledModal>
    </Fragment>
  );
};
