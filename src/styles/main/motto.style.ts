import styled, { keyframes } from "styled-components";

import { COLORS } from "@consts/style";

const MottoLoadAnimation = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }

  to {
   transform: translateY(0px);
   opacity: 1;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.themeDarkColor};
  margin: 24px;
  padding: 64px;
  row-gap: 24px;
  border-radius: 4px;
`;

export const Text = styled.span`
  color: ${COLORS.white};
  font-size: 2.5rem;
  font-weight: 700;
  transform: translateY(100px);
  opacity: 0;

  &.show {
    animation: ${MottoLoadAnimation} 0.8s forwards;
  }
`;
