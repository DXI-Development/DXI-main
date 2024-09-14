import styled, { keyframes } from "styled-components";

import { COLORS } from "@consts/style";

const TitleAnimation = keyframes`
  from {
    transform: translateY(-50px);
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
  padding: 32px 64px;
  row-gap: 32px;
  border-radius: 4px;
`;

export const Title = styled.span`
  color: ${COLORS.white};
  font-size: 3rem;
  font-weight: 700;
  transform: translateY(-50px);
  opacity: 0;

  &.show {
    animation: ${TitleAnimation} 1s forwards;
  }
`;
