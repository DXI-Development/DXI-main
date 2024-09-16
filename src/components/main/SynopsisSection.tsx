import { useEffect, useRef } from "react";

import { SYNOPSIS } from "@consts/index";

import {
  Wrapper,
  Image,
  ImageWrapper,
  TextWrapper,
  TextTitle,
  TextContent,
  TextLine,
} from "@styles/main/synopsis.style";

import type { FC, Dispatch, SetStateAction } from "react";

interface SynopsisSectionProps {
  animationend: boolean;
  setAnimationFlag: Dispatch<SetStateAction<boolean>>;
}

const SynopsisSection: FC<SynopsisSectionProps> = ({
  animationend,
  setAnimationFlag,
}) => {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const textWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let wrapperElement: HTMLElement;

    const animationListener = () => {
      if (imageRef.current) {
        const imageElement = imageRef.current;
        imageElement.classList.add("show");
      }

      if (textWrapperRef.current) {
        const textWrapperElement = textWrapperRef.current;
        textWrapperElement.classList.add("show");
      }

      setAnimationFlag(true);
    };

    if (animationend) {
      if (wrapperRef.current) {
        wrapperElement = wrapperRef.current;

        wrapperElement.addEventListener("animationend", animationListener);

        wrapperElement.classList.add("show");
      }
    }

    return () => {
      if (animationend)
        wrapperElement.removeEventListener("animationend", animationListener);
    };
  }, [animationend, setAnimationFlag]);

  return (
    <Wrapper ref={wrapperRef}>
      <ImageWrapper>
        <Image
          ref={imageRef}
          src="images/artworks/synopsis-image.jpeg"
          alt="시놉시스 이미지"
        />
      </ImageWrapper>
      <TextWrapper ref={textWrapperRef}>
        <TextTitle>SYNOPSIS</TextTitle>
        <TextContent>
          {SYNOPSIS.map((line, index) => (
            <TextLine key={`${index}-${line}`}>{line}</TextLine>
          ))}
        </TextContent>
      </TextWrapper>
    </Wrapper>
  );
};

export default SynopsisSection;
