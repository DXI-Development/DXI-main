import { Link } from "react-router-dom";

import { HEADER_LOGO_PATH } from "@consts/index";

import type { FC } from "react";

import {
  Header,
  HeaderWrapper,
  HeaderLogoWrapper,
  HeaderLogo,
  HeaderLinks,
  HeaderLinkText,
} from "@styles/header.style";

const MainHeader: FC = () => {
  return (
    <HeaderWrapper>
      <Header>
        <HeaderLogoWrapper>
          <Link to="/">
            <HeaderLogo src={HEADER_LOGO_PATH} alt="DXI-logo-image" />
          </Link>
        </HeaderLogoWrapper>
        <HeaderLinks>
          <Link to="/">
            <HeaderLinkText>메인</HeaderLinkText>
          </Link>
          <Link to="/introduction">
            <HeaderLinkText>스튜디오 소개</HeaderLinkText>
          </Link>
          <Link to="/recruit">
            <HeaderLinkText>팀원 모집</HeaderLinkText>
          </Link>
        </HeaderLinks>
      </Header>
    </HeaderWrapper>
  );
};

export default MainHeader;
