import styled, { keyframes } from "styled-components";

import { COLORS } from "@consts/style";

import { mobile, xMobile } from "@utils/style.util";

const SliderAnimation = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 32px;
  row-gap: 48px;
  background-color: ${COLORS.white};
  border-radius: 4px;
  scroll-snap-align: center;
  scroll-snap-type: x mandatory;
  transform: translateY(-50px);
  opacity: 0;

  &.show {
    animation: ${SliderAnimation} 1s forwards;
  }

  ${mobile`{
    padding: 16px;  
  }`}

  &.pc-slider {
    ${mobile`{
      display: none;  
    }`}
  }

  &.mobile-slider {
    display: none;

    ${mobile`{
      display: flex;  
    }`}
  }

  &.mobile {
    display: none;

    ${mobile`{
      display: flex;  
    }`}

    @media screen and (max-width: 425px) {
      display: none;
    }
  }

  &.x-mobile {
    display: none;

    @media screen and (max-width: 425px) {
      display: flex;
    }
  }
`;

export const SliderMainImageWrapper = styled.div<{ width: number }>`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 32px 0;
  width: ${(props) => props.width}px;
  height: auto;
  border-radius: 16px;
  overflow-y: hidden;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${mobile`{
    padding: 16px 0;  
  }`}
`;

export const SliderMainImage = styled.img<{ width: number }>`
  magin: auto 0;
  width: ${(props) => props.width}px;
  height: auto;
  object-fit: cover;
`;

export const SliderImageButtonWrapper = styled.div`
  position: absolute;

  ${mobile`{
    bottom: 20px;  
  }`}

  @media screen and (max-width: 425px) {
    bottom: 15px;
  }

  & > button:not(:first-child) {
    margin-left: 32px;

    ${xMobile`{
      margin-left: 24px;
    }`}

    @media screen and (max-width: 425px) {
      margin-left: 16px;
    }
  }
`;

export const SliderImageButton = styled.button`
  position: relative;
  padding: 0;
  border-width: 0;
  border-color: transparent;
  border-radius: 8px;
  box-shadow: 1px 1px 1px 1px ${COLORS.black};
  cursor: pointer;

  &.selected {
    box-shadow: 1px 2px 1px 2px ${COLORS.black};
  }

  &.selected > div {
    display: none;
  }
`;

export const SliderImageButtonShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 53px;
  background-color: #00000080;
  border-radius: 8px;
  z-index: 2;

  ${xMobile`{
    width: 40px;
    height: 43px;  
  }`}

  @media screen and (max-width: 425px) {
    width: 30px;
    height: 33px;
  }
`;

export const SliderImageButtonImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  fit-content: fill;

  ${xMobile`{
    width: 40px;
    height: 40px;  
  }`}

  @media screen and (max-width: 425px) {
    width: 30px;
    height: 30px;
  }
`;
