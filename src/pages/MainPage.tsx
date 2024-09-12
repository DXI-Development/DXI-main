import { Link } from "react-router-dom";

import { PageWrapper, Page } from "@styles/main/index.style";
import Button from "@components/common/Button";

import type { FC } from "react";

const MainPage: FC = () => {
  return (
    <PageWrapper>
      <Page>
        <Link to="/recruit">
          <Button>테스트 버튼</Button>
        </Link>
      </Page>
    </PageWrapper>
  );
};

export default MainPage;
