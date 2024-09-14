import { useEffect } from "react";
import dayjs from "dayjs";

import RecruitTeam from "@components/recruit/RecruitTeam";

import {
  PageWrapper,
  Page,
  TitleWrapper,
  Title,
  TitleDescription,
  ContentWrapper,
  ContentTitle,
  RecruitList,
} from "@styles/recruit/index.style";

import { TEAM_NAME } from "@consts/index";

import RecruitData from "@data/career/recruit.json";

import type { FC } from "react";
import type { Recruitment, Team } from "@customTypes/data.type";

const RecruitPage: FC = () => {
  const {
    recruitIndex,
    totalRecruitPositionCount,
    startDate,
    endDate,
    ...data
  } = RecruitData as Recruitment;

  const teams = Object.keys(data) as Team[];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <Page>
        <TitleWrapper>
          <Title>
            {`${TEAM_NAME} ${recruitIndex}차 모집 (${dayjs(startDate).format(
              "YY-MM-DD"
            )} ~ ${dayjs(endDate).format("YY-MM-DD")}`}
            )
          </Title>
          <TitleDescription>
            현재 {TEAM_NAME}에서는 다양한 분야에서 열정있는 분들을 모시고
            있습니다. 많은 지원 바랍니다! :)
          </TitleDescription>
        </TitleWrapper>
        <ContentWrapper>
          <ContentTitle>
            현재 {totalRecruitPositionCount}개 분야에서 모집을 진행중입니다!
          </ContentTitle>
          <RecruitList>
            {teams.map((team) => {
              const { name, recruitPositions } = data[team];

              return (
                <RecruitTeam
                  key={team}
                  name={name}
                  recruitPositions={recruitPositions}
                />
              );
            })}
          </RecruitList>
        </ContentWrapper>
      </Page>
    </PageWrapper>
  );
};

export default RecruitPage;
