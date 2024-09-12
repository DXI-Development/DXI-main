import styled from "styled-components";

import { COLORS, LAYOUT } from "@consts/style";

export const HeaderWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: ${COLORS.themeDarkColor};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${LAYOUT.pc.maxWidth}px;
`;

export const HeaderLogoWrapper = styled.div`
  display: flex;
  jusitfy-content: center;
  align-items: center;
  margin: 0 20px;
`;

export const HeaderLogo = styled.img`
  width: auto;
  height: 80px;
`;

export const HeaderLinks = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 100px;
  column-gap: 16px;
  list-style-type: none;
`;
