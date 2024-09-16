import { Link } from "react-router-dom";

import Button from "@components/common/Button";

import { RECRUIT_URL } from "@consts/recruit";

import {
  PositionItem,
  PositionDetails,
  PositionDescriptionsWrapper,
  PositionDescriptionWrapper,
  PositionDescriptionTitle,
  PositionDescriptionList,
  PositionDescriptionItem,
  PositionDescriptionItemText,
  PositionApplyButtonWrapper,
  PositionDescriptionSummary,
} from "@styles/recruit/content.style";

import type { FC } from "react";
import type { RecruitPosition as Position } from "@customTypes/data.type";

interface RecruitPositionProps {
  position: Position;
}

const RecruitPosition: FC<RecruitPositionProps> = ({ position }) => {
  return (
    <PositionItem>
      <PositionDetails>
        <PositionDescriptionSummary>
          {position.recruitPosition} (모집인원: {position.recruitCount}명)
        </PositionDescriptionSummary>
        <PositionDescriptionsWrapper className="description-wrapper">
          <PositionDescriptionWrapper>
            <PositionDescriptionTitle>담당업무</PositionDescriptionTitle>
            <PositionDescriptionList>
              <PositionDescriptionItem>
                <PositionDescriptionItemText>
                  {position.responbilities}
                </PositionDescriptionItemText>
              </PositionDescriptionItem>
            </PositionDescriptionList>
          </PositionDescriptionWrapper>
          {position.requirements && (
            <PositionDescriptionWrapper>
              <PositionDescriptionTitle>지원자격</PositionDescriptionTitle>
              <PositionDescriptionList>
                {position.requirements.map((requirement, index) => (
                  <PositionDescriptionItem key={`${index}-${requirement}`}>
                    <PositionDescriptionItemText>
                      {requirement}
                    </PositionDescriptionItemText>
                  </PositionDescriptionItem>
                ))}
              </PositionDescriptionList>
            </PositionDescriptionWrapper>
          )}
          {position.preferences && (
            <PositionDescriptionWrapper>
              <PositionDescriptionTitle>우대사항</PositionDescriptionTitle>
              <PositionDescriptionList>
                {position.preferences.map((preference, index) => (
                  <PositionDescriptionItem key={`${index}-${preference}`}>
                    <PositionDescriptionItemText>
                      {preference}
                    </PositionDescriptionItemText>
                  </PositionDescriptionItem>
                ))}
              </PositionDescriptionList>
            </PositionDescriptionWrapper>
          )}
          <PositionApplyButtonWrapper>
            <Link to={RECRUIT_URL} target="_blank">
              <Button>지원하기</Button>
            </Link>
          </PositionApplyButtonWrapper>
        </PositionDescriptionsWrapper>
      </PositionDetails>
    </PositionItem>
  );
};

export default RecruitPosition;
