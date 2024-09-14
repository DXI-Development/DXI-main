import { useEffect, useRef } from "react";

import { Wrapper, Text } from "@styles/main/motto.style";

import type { FC, Dispatch, SetStateAction } from "react";

interface MottoSectionProps {
  motto: string;
  setAnimationFlag: Dispatch<SetStateAction<boolean>>;
}

const MottoSection: FC<MottoSectionProps> = ({ motto, setAnimationFlag }) => {
  const wrapperRef = useRef<HTMLElement | null>(null);

  const createAnimationendCallback = (children: HTMLCollection) => {
    const CHILDREN_LENGTH = children.length;

    let index = 0;

    const animationendCallback = () => {
      if (index < CHILDREN_LENGTH) {
        const child = children[index];

        child.addEventListener("animationend", () => {
          index += 1;
          animationendCallback();
        });

        child.classList.add("show");
      } else {
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
      <Text>우리가 함께 만들어가는 이야기</Text>
      <Text>Team DXI</Text>
      <Text>{motto}!</Text>
    </Wrapper>
  );
};

export default MottoSection;
