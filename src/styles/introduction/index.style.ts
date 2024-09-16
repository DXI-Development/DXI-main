import styled, { keyframes } from "styled-components";

import { COLORS } from "@consts/style";

import { laptop, tablet, mobile } from "@utils/style.util";

import { PageMainWrapper, InnerPage } from "@styles/app.style";

const SloganAnimation = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const IntroductionAnimation = keyframes`
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }

  25% {
    transform: translateY(30px);
    opacity: 0.5;
  }

  50% {
    transform: translateY(0px);
    opacity: 1;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const PageWrapper = styled(PageMainWrapper)`
  background-color: ${COLORS.themeColor};
  padding: 32px;
`;

export const Page = styled(InnerPage)`
  row-gap: 32px;
`;

export const IntroductionSlogan = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background-color: ${COLORS.themeDarkColor};
  border-radius: 4px;

  @media screen and (max-width: 425px) {
    padding: 16px;
  }
`;

export const IntroductionSloganWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  color: ${COLORS.white};
  font-family: "Dongle";
  font-size: 5rem;
  opacity: 0;
  animation: ${SloganAnimation} 1s forwards;

  ${tablet`{
    font-size: 4rem;  
  }`}

  ${mobile`{
    font-size: 3rem;  
  }`}

  @media screen and (max-width: 425px) {
    font-size: 1.8rem;
  }
`;
export const IntroductionSloganText = styled.span`
  text-align: center;
`;

export const IntroductionContentWrapper = styled.section`
  display: flex;
  background-color: ${COLORS.white};
  border: 3px solid ${COLORS.dark};
  border-radius: 16px;
  opacity: 0;

  ${mobile`{
    flex-direction: column;  
  }`}

  &.show {
    animation: ${IntroductionAnimation} 1s forwards ease-out;
  }
`;

export const IntroductionImage = styled.img`
  width: 80%;
  min-width: 500px;
  height: auto;
  object-fit: cover;

  ${laptop`{
    min-width: 350px;  
  }`}

  ${tablet`{
    min-width: 250px;  
  }`}
`;

export const IntroductionImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  width: 50%;
  border-right: 3px solid #332d2d;

  ${mobile`{
    width: auto;
    border-right: 0;
    border-bottom: 3px solid #332d2d;
  }`}
`;

export const IntroductionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  width: 50%;
  row-gap: 32px;
  word-break: keep-all;
  font-family: "Jua";
  font-size: 2.5rem;
  line-height: 48px;

  ${laptop`{
    font-size: 2rem;
    line-height: 40px;
  }`}

  ${tablet`{
    row-gap: 24px;
    font-size: 1.6rem;
    line-height: 32px;
  }`}

  ${mobile`{
    width: auto;
    font-size: 1.8rem;
    line-height: 36px;
    text-align: center;
  }`}

  @media screen and (max-width: 425px) {
    font-size: 1.4rem;
    line-height: 28px;
  }
`;

export const IntroductionTextLine = styled.span``;
