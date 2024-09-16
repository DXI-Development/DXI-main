import styled from "styled-components";

import { COLORS, LAYOUT } from "@consts/style";

import { tablet } from "@utils/style.util";

export const FooterWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: ${COLORS.themeDarkColor};

  ${tablet`{
    height: 120px;
  }`}
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${LAYOUT.pc.maxWidth}px;
  padding: 20px 0;
  column-gap: 8px;

  @media screen and (max-width: 575px) {
    flex-direction: column;
    column-gap: 0;
    row-gap: 8px;
  }
`;

export const FooterText = styled.span`
  color: ${COLORS.white};
  font-size: 1.4rem;
  font-weight: 500;

  ${tablet`{
    font-size: 1.6rem;  
  }`}

  @media screen and (max-width: 575px) {
    font-size: 1.2rem;
  }

  & > strong {
    font-weight: 700;
  }
`;
