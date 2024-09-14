import { useState, useEffect, useRef } from "react";

import ImageSlider from "@components/main/artwork/ImageSlider";
import ImageSliderMK from "@components/main/artwork/ImageSliderMK";
import ImageSliderHeight from "./artwork/ImageSliderHeight";

import { Wrapper, Title } from "@styles/main/artwork.style";

import type { FC } from "react";

interface ArtworkSectionProps {
  animationend: boolean;
}

const ArtworkSection: FC<ArtworkSectionProps> = ({ animationend }) => {
  const ARTWORK_IMAGE_PATHS = [
    "images/artworks/1.png",
    "images/artworks/2.png",
    "images/artworks/3.png",
  ];

  const [titleAnimationend, setTitleAnimationend] = useState(false);

  const titleRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (animationend) {
      if (titleRef.current) {
        const titleElement = titleRef.current;

        titleElement.addEventListener("animationend", () =>
          setTitleAnimationend(true)
        );

        titleElement.classList.add("show");
      }
    }
  }, [animationend]);

  return (
    <Wrapper>
      <Title ref={titleRef}>Artwork</Title>
      <ImageSlider
        imagePaths={ARTWORK_IMAGE_PATHS}
        animationend={titleAnimationend}
      />
      <ImageSliderMK
        imagePaths={ARTWORK_IMAGE_PATHS}
        animationend={titleAnimationend}
      />
      <ImageSliderHeight
        imagePaths={ARTWORK_IMAGE_PATHS}
        animationend={titleAnimationend}
      />
    </Wrapper>
  );
};

export default ArtworkSection;
