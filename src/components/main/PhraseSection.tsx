import { useEffect, useRef } from "react";

import { LOGO_PATH } from "@consts/index";

import { Wrapper, Image, Text } from "@styles/main/phrase.style";

import type { FC, Dispatch, SetStateAction } from "react";

interface PhraseSectionProps {
  phrase: string[];
  setAnimationFlag: Dispatch<SetStateAction<boolean>>;
}

const PhraseSection: FC<PhraseSectionProps> = ({
  phrase,
  setAnimationFlag,
}) => {
  const wrapperRef = useRef<HTMLElement | null>(null);

  const createAnimationendCallback = (children: HTMLCollection) => {
    const CHILDREN_LENGTH = children.length;

    let index = 0;

    const animationendCallback = () => {
      const animationListener = () => {
        index += 1;
        animationendCallback();
      };

      if (index < CHILDREN_LENGTH) {
        const child = children[index];

        child.addEventListener("animationend", animationListener);

        child.classList.add("show");
      } else {
        for (const child of children) {
          child.removeEventListener("animationend", animationListener);
        }

        setAnimationFlag(true);
      }
    };
    animationendCallback();
  };

  useEffect(() => {
    if (wrapperRef.current) {
      const wrapperElement = wrapperRef.current;

      const children = wrapperElement.children;

      if (children.length > 0) createAnimationendCallback(children);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Image src={LOGO_PATH} alt="로고 이미지" />
      {phrase.map((line, index) => (
        <Text key={`${index}-${line}`}>{line}</Text>
      ))}
    </Wrapper>
  );
};

export default PhraseSection;
