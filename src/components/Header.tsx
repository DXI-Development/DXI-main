import { Link } from "react-router-dom";

import type { FC } from "react";

import {
  Header,
  HeaderWrapper,
  HeaderLogoWrapper,
  HeaderLogo,
  HeaderLinks,
} from "@styles/header.style";

const MainHeader: FC = () => {
  return (
    <HeaderWrapper>
      <Header>
        <HeaderLogoWrapper>
          <Link to="/">
            <HeaderLogo
              src="images/logos/logo-with-color.png"
              alt="DXI-logo-image"
            />
          </Link>
        </HeaderLogoWrapper>
        <HeaderLinks></HeaderLinks>
      </Header>
    </HeaderWrapper>
  );
};

export default MainHeader;
