import styled from "styled-components";

import { COLORS } from "@consts/style";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.themeDarkColor};
  margin: 24px;
  padding: 32px 64px;
  row-gap: 32px;

  & > a > button {
    border: 3px solid ${COLORS.white};
  }
`;

export const Text = styled.span`
  color: ${COLORS.white};
  font-size: 1.6rem;
  font-weight: 500;
`;
