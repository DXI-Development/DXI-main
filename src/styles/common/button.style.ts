import styled from "styled-components";

import { mobile } from "@utils/style.util";

import { BUTTON_COLORS, COLORS } from "@consts/style";

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: ${BUTTON_COLORS.backgroundColor};
  border: 0px transparent;
  border-radius: 8px;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    padding: 12px;
  }

  &:hover {
    background-color: ${BUTTON_COLORS.hoverBackgroundColor};
  }
`;

export const ButtonText = styled.span`
  color: ${COLORS.white};
  font-size: 1.4rem;
  font-weight: 700;

  ${mobile`{
    font-size: 1.2rem;  
  }`}

  @media screen and (max-width: 425px) {
    font-size: 1rem;
  }
`;
