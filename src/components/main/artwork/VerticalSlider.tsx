import { useState, useEffect, useRef } from "react";

import {
  SliderWrapper,
  SliderMainImageWrapper,
  SliderMainImage,
  SliderImageButtonWrapper,
  SliderImageButton,
  SliderImageButtonImage,
  SliderImageButtonShadow,
} from "@styles/main/artwork/vertical.style";

import type { FC } from "react";
import type { ArtworkImagePath } from "@consts/index";

interface ImageSliderProps {
  className: string;
  imageHeight: number;
  imagePaths: ArtworkImagePath[];
  animationend: boolean;
}

const ImageVerticalSlider: FC<ImageSliderProps> = ({
  className,
  imageHeight,
  imagePaths,
  animationend,
}) => {
  const SLIDE_INTERVAL = 3000;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const intervalIdRef = useRef<NodeJS.Timer | null>(null);

  const slideWrapperRef = useRef<HTMLDivElement | null>(null);
  const sliderMainImageWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClickImageButton = (index: number) => (e: React.MouseEvent) =>
    setCurrentImageIndex(index);

  useEffect(() => {
    if (sliderMainImageWrapperRef.current) {
      const sliderMainImageWrapper = sliderMainImageWrapperRef.current;

      sliderMainImageWrapper.addEventListener(
        "touchmove",
        (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
        },
        { passive: false }
      );

      sliderMainImageWrapper.addEventListener(
        "wheel",
        (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
        },
        { passive: false }
      );
    }
  }, []);

  useEffect(() => {
    if (animationend) {
      if (slideWrapperRef.current) {
        const slideWrapperElement = slideWrapperRef.current;

        slideWrapperElement.classList.add("show");
      }
    }
  }, [animationend]);

  useEffect(() => {
    intervalIdRef.current = setInterval(
      () =>
        setCurrentImageIndex((prevValue) =>
          prevValue + 1 < imagePaths.length ? prevValue + 1 : 0
        ),
      SLIDE_INTERVAL
    );

    return () => {
      intervalIdRef.current && clearInterval(intervalIdRef.current);
    };
  }, [imagePaths.length]);

  useEffect(() => {
    const changeSliderImage = (index: number) => {
      if (sliderMainImageWrapperRef.current) {
        const sliderMainImageWrapper = sliderMainImageWrapperRef.current;

        sliderMainImageWrapper.scroll({
          top: index * imageHeight,
          behavior: "smooth",
        });
      }
    };

    changeSliderImage(currentImageIndex);

    intervalIdRef.current && clearInterval(intervalIdRef.current);
    intervalIdRef.current = setInterval(
      () =>
        setCurrentImageIndex((prevValue) =>
          prevValue + 1 < imagePaths.length ? prevValue + 1 : 0
        ),
      SLIDE_INTERVAL
    );

    return () => {
      intervalIdRef.current && clearInterval(intervalIdRef.current);
    };
  }, [imageHeight, currentImageIndex, imagePaths.length]);

  return (
    <SliderWrapper ref={slideWrapperRef} className={className}>
      <SliderMainImageWrapper
        ref={sliderMainImageWrapperRef}
        height={imageHeight}
      >
        {imagePaths.map(({ name, path }) => (
          <SliderMainImage
            key={`slider-main-${name}`}
            src={path}
            height={imageHeight}
            alt={name}
          />
        ))}
      </SliderMainImageWrapper>
      <SliderImageButtonWrapper>
        {imagePaths.map(({ name, path }, index) => (
          <SliderImageButton
            key={`slider-button-${name}`}
            className={index === currentImageIndex ? "selected" : ""}
            onClick={handleClickImageButton(index)}
          >
            <SliderImageButtonShadow />
            <SliderImageButtonImage src={path} alt={`artwork-${name}`} />
          </SliderImageButton>
        ))}
      </SliderImageButtonWrapper>
    </SliderWrapper>
  );
};

export default ImageVerticalSlider;
