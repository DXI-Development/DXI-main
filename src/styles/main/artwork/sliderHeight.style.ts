import styled, { keyframes } from "styled-components";

import { COLORS } from "@consts/style";

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
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 64px 32px;
  column-gap: 32px;
  background-color: ${COLORS.white};
  border-radius: 4px;
  scroll-snap-align: center;
  scroll-snap-type: x mandatory;
  transform: translateY(-50px);
  opacity: 0;

  &.show {
    animation: ${SliderAnimation} 1s forwards;
  }
`;

export const SliderMainImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px;
  width: auto;
  height: 600px;
  border-radius: 16px;
  overflow-x: hidden;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SliderMainImage = styled.img`
  magin: 0 auto;
  width: auto;
  height: 600px;
  object-fit: cover;
`;

export const SliderImageButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > button:not(:first-child) {
    margin-top: 32px;
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
  width: 75px;
  height: 78px;
  background-color: #00000080;
  border-radius: 8px;
  z-index: 2;
`;

export const SliderImageButtonImage = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 8px;
  fit-content: fill;
`;
