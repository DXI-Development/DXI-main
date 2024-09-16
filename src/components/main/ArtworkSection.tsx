import { useState, useEffect, useRef } from "react";

import HorizontalSlider from "@components/main/artwork/HorizontalSlider";
import VerticalSlider from "@components/main/artwork/VerticalSlider";

import { ARTWORK_IMAGE_PATHS } from "@consts/index";

import { Wrapper, Title } from "@styles/main/artwork.style";

import type { FC } from "react";

interface ArtworkSectionProps {
  animationend: boolean;
}

const ArtworkSection: FC<ArtworkSectionProps> = ({ animationend }) => {
  const [artworkAnimationend, setArtworkAnimationend] = useState(false);

  const wrapperRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let wrapperElement: HTMLElement;

    const animationListener = () => {
      setArtworkAnimationend(true);
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
  }, [animationend]);

  return (
    <Wrapper ref={wrapperRef}>
      <Title>Artwork</Title>
      <HorizontalSlider
        className="mobile-slider mobile"
        imageWidth={400}
        imagePaths={ARTWORK_IMAGE_PATHS}
        animationend={artworkAnimationend}
      />
      <HorizontalSlider
        className="mobile-slider x-mobile"
        imageWidth={300}
        imagePaths={ARTWORK_IMAGE_PATHS}
        animationend={artworkAnimationend}
      />
      <HorizontalSlider
        className="mobile-slider s-mobile"
        imageWidth={250}
        imagePaths={ARTWORK_IMAGE_PATHS}
        animationend={artworkAnimationend}
      />
      <VerticalSlider
        className="pc-slider"
        imageHeight={600}
        imagePaths={ARTWORK_IMAGE_PATHS}
        animationend={artworkAnimationend}
      />
    </Wrapper>
  );
};

export default ArtworkSection;
