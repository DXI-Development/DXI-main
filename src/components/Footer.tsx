import { FooterWrapper, Footer, FooterText } from "@styles/footer.style";

import type { FC } from "react";

const MainFooter: FC = () => {
  return (
    <FooterWrapper>
      <Footer>
        <FooterText>
          Copyright 2024. <strong>Team DXI</strong>. All rights reserved.
        </FooterText>
      </Footer>
    </FooterWrapper>
  );
};

export default MainFooter;
