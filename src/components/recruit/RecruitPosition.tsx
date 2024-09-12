import type { FC } from "react";

import {
  PositionWrapper,
  PositionDetails,
} from "@styles/recruit/content.style";

import type { RecruitPosition as Position } from "@customTypes/data.type";

interface RecruitPositionProps {
  position: Position;
}

const RecruitPosition: FC<RecruitPositionProps> = ({ position }) => {
  return (
    <PositionWrapper>
      <PositionDetails>
        <summary>
          {position.recruitPosition} (모집인원: {position.recruitCount}명)
        </summary>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          placerat malesuada augue, id consequat est facilisis quis. Quisque
          eget nulla vitae lorem bibendum viverra sit amet in magna. In in
          efficitur sem. Mauris tempus nulla massa, sed consectetur urna
          sollicitudin a. Integer at bibendum neque. Fusce et massa sed arcu
          rutrum posuere eget non ante. Duis ac elit lacinia, bibendum purus
          vitae, feugiat lorem. Morbi ultricies, purus et porta gravida, orci
          eros viverra lectus, ut porta nisi nisi sit amet nisi. Aenean mattis
          elit at pretium luctus. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Aenean vehicula consectetur
          congue. Vestibulum quis faucibus nibh, et placerat nibh. Nulla nec
          tortor in augue malesuada dapibus lobortis a lorem. Donec vulputate,
          turpis at suscipit tincidunt, dolor nulla facilisis libero, vitae
          malesuada sem ex ut nisi. Suspendisse eleifend nulla et quam
          consectetur porta. Proin efficitur fermentum dolor ut consequat.
        </div>
      </PositionDetails>
    </PositionWrapper>
  );
};

export default RecruitPosition;
