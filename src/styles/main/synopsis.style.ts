import styled, { keyframes } from "styled-components";

import { COLORS } from "@consts/style";

const wrapperAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const imageAnimation = keyframes`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const textAnimation = keyframes`
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
  padding: 24px;
  column-gap: 64px;
  border-radius: 4px;
  background-color: ${COLORS.white};
  opacity: 0;

  &.show {
    animation: ${wrapperAnimation} 0.2s forwards;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 500px;
  height: 500px;
  opacity: 0;

  &.show {
    animation: ${imageAnimation} 1s forwards;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 32px;
  opacity: 0;

  &.show {
    animation: ${textAnimation} 1s forwards;
  }
`;

export const TextTitle = styled.span`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

export const TextContent = styled.p`
  padding: 16px;
  font-size: 1.4rem;
  font-weight: 500;
  word-break: break-word;
`;
