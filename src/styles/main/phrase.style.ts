import styled, { keyframes } from "styled-components";

import { COLORS } from "@consts/style";

import { laptop, tablet, mobile, xMobile } from "@utils/style.util";

const PhraseAnimation = keyframes`
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
  padding: 0px 64px 32px 64px;
  row-gap: 12px;
  border-radius: 4px;
  font-family: "Dongle";

  ${tablet`{
    row-gap: 8px;
  }`}

  ${xMobile`{
    padding: 0px 32px 16px 32px;  
  }`}
`;

export const Image = styled.img`
  width: 800px;
  height: auto;
  transform: translateY(100px);
  opacity: 0;

  ${laptop`{
    width: 750px;  
  }`}

  ${tablet`{
    width: 550px;  
  }`}

  ${mobile`{
    width: 400px;  
  }`}

  ${xMobile`{
    width: 250px;  
  }`}

   @media screen and (max-width: 425px) {
    width: 200px;
  }

  &.show {
    animation: ${PhraseAnimation} 0.8s forwards;
  }
`;

export const Text = styled.span`
  color: ${COLORS.white};
  font-size: 5rem;
  font-weight: 700;
  transform: translateY(100px);
  opacity: 0;

  ${laptop`{
    font-size: 4.5rem;
  }`}

  ${tablet`{
    font-size: 3.5rem;
  }`}

  ${mobile`{
    font-size: 2.5rem;  
  }`}

  ${xMobile`{
    font-size: 1.6rem;  
  }`}

  &.show {
    animation: ${PhraseAnimation} 0.8s forwards;
  }
`;
