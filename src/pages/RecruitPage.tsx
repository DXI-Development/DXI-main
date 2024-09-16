import { useState, useEffect, useRef } from "react";
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
  const TITLE = "스튜디오 EDDA - 팀원 모집";

  const {
    recruitIndex,
    totalRecruitPositionCount,
    startDate,
    endDate,
    ...data
  } = RecruitData as Recruitment;

  const teams = Object.keys(data) as Team[];

  const [isTimeout, setIsTimeout] = useState(false);

  const titleRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = TITLE;

    let titleElement: HTMLDivElement;

    const animationListener = () => {
      if (contentRef.current) {
        const contentElement = contentRef.current;
        contentElement.classList.add("show");
      }
    };

    if (titleRef.current) {
      titleElement = titleRef.current;

      titleElement.addEventListener("animationend", animationListener);
    }

    return () => {
      titleElement.removeEventListener("animationend", animationListener);
    };
  }, []);

  useEffect(() => {
    const timeDiff = dayjs(endDate).diff(Date.now());

    if (timeDiff <= 0) setIsTimeout(true);
  }, [endDate, isTimeout]);

  return (
    <PageWrapper>
      {isTimeout ? (
        <Page>
          <TitleWrapper ref={titleRef} className="title-end-recruit">
            <Title>
              <span>{`${TEAM_NAME} ${recruitIndex}`}차 모집이</span>
              <span>종료되었습니다.</span>
            </Title>
            <TitleDescription>
              <span>지원자 분들의 많은 관심과 격려 감사합니다.</span>
              <span>빠른 시일 내에 지원 결과를 공고하겠습니다.</span>
            </TitleDescription>
          </TitleWrapper>
        </Page>
      ) : (
        <Page>
          <TitleWrapper ref={titleRef}>
            <Title>
              <span>{`${TEAM_NAME} ${recruitIndex}`}차 모집</span>
              <span>
                {`(${dayjs(startDate).format("MM-DD HH:mm")} ~ ${dayjs(
                  endDate
                ).format("MM-DD HH:mm")}`}
                )
              </span>
            </Title>
            <TitleDescription>
              <span>
                현재 {TEAM_NAME}에서는 다양한 분야에서 열정있는 분들을 모시고
                있습니다.
              </span>
              <span>많은 지원 바랍니다! :)</span>
            </TitleDescription>
          </TitleWrapper>
          <ContentWrapper ref={contentRef}>
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
      )}
    </PageWrapper>
  );
};

export default RecruitPage;
