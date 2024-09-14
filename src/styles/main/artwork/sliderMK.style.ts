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
`;

export const SliderMainImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 32px 0;
  width: 1200px;
  height: auto;
  border-radius: 16px;
  overflow-y: hidden;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SliderMainImage = styled.img`
  magin: auto 0;
  width: 1200px;
  height: auto;
  object-fit: cover;
`;

export const SliderImageButtonWrapper = styled.div`
  position: absolute;
  bottom: 100px;

  & > button:not(:first-child) {
    margin-left: 32px;
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
