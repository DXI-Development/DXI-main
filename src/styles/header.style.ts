import styled from "styled-components";

import { COLORS, LAYOUT } from "@consts/style";

import { tablet, mobile, xMobile } from "@utils/style.util";

export const HeaderWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: ${COLORS.themeDarkColor};

  ${tablet`{
    height: 120px;  
  }`}

  ${xMobile`{
    height: 180px;  
  }`}
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${LAYOUT.pc.maxWidth}px;

  ${xMobile`{
    flex-direction: column;
    justify-content: center;
  }`}
`;

export const HeaderLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

export const HeaderLogo = styled.img`
  width: auto;
  height: 80px;

  ${tablet`{
    height: 120px;  
  }`}

  ${xMobile`{
    height: 100px;  
    }`}
`;

export const HeaderLinks = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 100px;
  column-gap: 16px;
  font-family: "Dongle";
  font-size: 2.5rem;

  ${tablet`{
    margin-right: 80px;
    font-size: 2.8rem;
  }`}

  ${mobile`{
    margin-right: 40px;
    font-size: 2.5rem;  
  }`}

  ${xMobile`{
    margin: 0 auto;
    padding: 16px 0;
    column-gap: 32px;
  }`}

  & > a, a:link, a:visited {
    color: ${COLORS.white};
  }

  & > a:hover,
  a:active {
    color: ${COLORS.themeColor};
  }
`;

export const HeaderLinkText = styled.span``;
