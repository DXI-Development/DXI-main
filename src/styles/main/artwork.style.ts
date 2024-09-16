import styled, { keyframes } from "styled-components";

import { laptop, tablet, mobile, xMobile } from "@utils/style.util";

import { COLORS } from "@consts/style";

const ArtworkAnimation = keyframes`
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
  transform: translateY(-50px);
  opacity: 0;

  ${mobile`{
    padding: 24px 48px;
    row-gap: 16px;
  }`}

  ${xMobile`{
    padding: 16px 32px;
  }`}

  &.show {
    animation: ${ArtworkAnimation} 1s forwards;
  }
`;

export const Title = styled.span`
  color: ${COLORS.white};
  font-size: 6rem;
  font-weight: 700;
  font-family: "Dongle";

  ${laptop`{
    font-size: 5rem;  
  }`}

  ${tablet`{
    font-size: 4rem;  
  }`}

  ${mobile`{
    font-size: 3.5rem;  
  }`}

  ${xMobile`{
    font-size: 3rem;
  }`}
`;
