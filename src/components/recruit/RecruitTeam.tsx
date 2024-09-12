import RecruitPosition from "./RecruitPosition";

import {
  TeamWrapper,
  TeamName,
  PositionList,
} from "@styles/recruit/content.style";

import type { FC } from "react";

import type { RecruitPosition as Position } from "@customTypes/data.type";

interface RecruitTeamProps {
  name: string;
  recruitPositions: Position[];
}

const RecruitTeam: FC<RecruitTeamProps> = ({ name, recruitPositions }) => {
  return (
    <TeamWrapper>
      <TeamName>{name}</TeamName>
      <PositionList>
        {recruitPositions.map((position, index) => (
          <RecruitPosition key={`${name}-${index + 1}`} position={position} />
        ))}
      </PositionList>
    </TeamWrapper>
  );
};

export default RecruitTeam;
