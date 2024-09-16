import styled, { keyframes } from "styled-components";

import { COLORS } from "@consts/style";

import { laptop, tablet, mobile, xMobile } from "@utils/style.util";

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
    transform: translateY(-50px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
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
  justify-content: space-around;
  margin: 0 24px;
  padding: 24px;
  border-radius: 4px;
  background-color: ${COLORS.white};
  opacity: 0;

  ${mobile`{
    flex-direction: column;
    justify-content: center;
    padding: 12px;
  }`}

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

  ${laptop`{
    width: 400px;
    height: 400px;
  }`}

  ${tablet`{
    width: 300px;
    height: 300px;
  }`}

  ${xMobile`{
    width: 250px;
    height: 250px;
  }`}

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
  font-family: "SongMyung";

  ${laptop`{
    row-gap: 24px;  
  }`}

  ${tablet`{
    row-gap: 16px;
  }`}

  &.show {
    animation: ${textAnimation} 1s forwards;
  }
`;

export const TextTitle = styled.span`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;

  ${mobile`{
    font-size: 3.5rem;
  }`}

  ${xMobile`{
    font-size: 3rem;
  }`}
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 16px;
  font-size: 2rem;
  font-weight: 500;

  ${laptop`{
    font-size: 1.6rem;  
  }`}

  ${tablet`{
    font-size: 1.4rem;
    row-gap: 8px;
    line-height: 24px;
  }`}

  ${mobile`{
    font-size: 1.6rem;
    line-height: 32px;
  }`}

  ${xMobile`{
    font-size: 1.2rem;
    line-height: 24px;
  }`}
`;

export const TextLine = styled.span`
  text-align: center;
  word-break: keep-all;
`;
