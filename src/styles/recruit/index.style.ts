import styled from "styled-components";

import { COLORS } from "@consts/style";

import { PageMainWrapper, InnerPage } from "@styles/app.style";

export const PageWrapper = styled(PageMainWrapper)`
  background-color: ${COLORS.themeColor};
  padding: 32px;
`;

export const Page = styled(InnerPage)`
  row-gap: 24px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 24px 32px;
  background-color: ${COLORS.themeDarkColor};
  border-radius: 4px;
  color: ${COLORS.white};
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

export const TitleDescription = styled.span`
  margin-left: 16px;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  background-color: ${COLORS.light};
  border-radius: 4px;
`;

export const ContentTitle = styled.span`
  margin-bottom: 32px;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const RecruitList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;

  & > li:not(:last-child) {
    border-bottom: 2px solid ${COLORS.gray};
  }
`;
