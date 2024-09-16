import { useState, useEffect } from "react";

import { PageWrapper, Page } from "@styles/main/index.style";

import { CATCH_PHARSE } from "@consts/index";

import PhraseSection from "@components/main/PhraseSection";
import SynopsisSection from "@components/main/SynopsisSection";
import ArtworkSection from "@components/main/ArtworkSection";

import type { FC } from "react";

const MainPage: FC = () => {
  const TITLE = "스튜디오 EDDA - 메인";

  const [isMottoAnimationend, setIsMottoAnimationend] = useState(false);
  const [isSynopsisAnimationend, setIsSynopsisAnimationend] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = TITLE;
  }, []);

  return (
    <PageWrapper>
      <Page>
        <PhraseSection
          phrase={CATCH_PHARSE}
          setAnimationFlag={setIsMottoAnimationend}
        />
        <SynopsisSection
          animationend={isMottoAnimationend}
          setAnimationFlag={setIsSynopsisAnimationend}
        />
        <ArtworkSection animationend={isSynopsisAnimationend} />
      </Page>
    </PageWrapper>
  );
};

export default MainPage;
