import styled, { keyframes } from "styled-components";

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
  flex-direction: column;
  width: 100%;
  padding: 32px;
  row-gap: 48px;
  background-color: #000000e6;
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
  width: 600px;
  height: 600px;
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
  width: 600px;
  height: auto;
  object-fit: cover;
`;

export const SliderImageButtonWrapper = styled.div`
  margin: 0 auto;

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
  cursor: pointer;

  &.selected > div {
    display: none;
  }
`;

export const SliderImageButtonShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  background-color: #00000080;
  border-radius: 8px;
  z-index: 2;
`;

export const SliderImageButtonImage = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 8px;
`;
