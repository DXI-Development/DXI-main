import styled from "styled-components";

import { COLORS, LAYOUT } from "@consts/style";

export const FooterWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: ${COLORS.themeDarkColor};
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${LAYOUT.pc.maxWidth}px;
  padding: 20px 0;
`;

export const FooterText = styled.span`
  color: ${COLORS.white};
  font-size: 1.2rem;
  font-weight: 500;

  & > strong {
    font-weight: 700;
  }
`;
