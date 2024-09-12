import styled from "styled-components";

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

  &:hover {
    background-color: ${BUTTON_COLORS.hoverBackgroundColor};
  }
`;

export const ButtonText = styled.span`
  color: ${COLORS.white};
  font-size: 1.6rem;
  font-weight: 700;
`;
