import { useState, useEffect } from "react";

import { PageWrapper, Page } from "@styles/main/index.style";

import { MOTTO } from "@consts/index";

import MottoSection from "@components/main/MottoSection";
import SynopsisSection from "@components/main/SynopsisSection";
import ArtworkSection from "@components/main/ArtworkSection";
import RecruitSection from "@components/main/RecruitSection";

import type { FC } from "react";

const MainPage: FC = () => {
  const [isMottoAnimationend, setIsMottoAnimationend] = useState(false);
  const [isSynopsisAnimationend, setIsSynopsisAnimationend] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <Page>
        <MottoSection motto={MOTTO} setAnimationFlag={setIsMottoAnimationend} />
        <SynopsisSection
          animationend={isMottoAnimationend}
          setAnimationFlag={setIsSynopsisAnimationend}
        />
        <ArtworkSection animationend={isSynopsisAnimationend} />
        <RecruitSection />
      </Page>
    </PageWrapper>
  );
};

export default MainPage;
