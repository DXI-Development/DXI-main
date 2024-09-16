import { useEffect, useRef } from "react";

import { INTRODUCTION, SLOGAN } from "@consts/introduction";

import {
  PageWrapper,
  Page,
  IntroductionImage,
  IntroductionImageWrapper,
  IntroductionTextWrapper,
  IntroductionTextLine,
  IntroductionContentWrapper,
  IntroductionSlogan,
  IntroductionSloganWrapper,
  IntroductionSloganText,
} from "@styles/introduction/index.style";

import type { FC } from "react";

const IntroductionPage: FC = () => {
  const TITLE = "스튜디오 EDDA - 스튜디오 소개";

  const sloganRef = useRef<HTMLDivElement | null>(null);
  const introductionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = TITLE;

    let sloganElement: HTMLElement;

    const animationListener = () => {
      if (introductionRef.current) {
        const introductionElement = introductionRef.current;
        introductionElement.classList.add("show");
      }
    };

    if (sloganRef.current) {
      sloganElement = sloganRef.current;

      sloganElement.addEventListener("animationend", animationListener);
    }

    return () => {
      sloganElement.removeEventListener("animationend", animationListener);
    };
  }, []);

  return (
    <PageWrapper>
      <Page>
        <IntroductionSlogan>
          <IntroductionSloganWrapper ref={sloganRef}>
            {SLOGAN.map((text, index) => (
              <IntroductionSloganText key={`${index}-${text}`}>
                {text}
              </IntroductionSloganText>
            ))}
          </IntroductionSloganWrapper>
        </IntroductionSlogan>
        <IntroductionContentWrapper ref={introductionRef}>
          <IntroductionImageWrapper>
            <IntroductionImage
              src="images/logos/studio-logo-with-text.png"
              alt="스튜디오 소개 이미지"
            />
          </IntroductionImageWrapper>
          <IntroductionTextWrapper>
            {INTRODUCTION.map((text, index) => (
              <IntroductionTextLine key={`${index}-${text}`}>
                {text}
              </IntroductionTextLine>
            ))}
          </IntroductionTextWrapper>
        </IntroductionContentWrapper>
      </Page>
    </PageWrapper>
  );
};

export default IntroductionPage;
