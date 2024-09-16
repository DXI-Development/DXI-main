import styled from "styled-components";

import { COLORS } from "@consts/style";

import { tablet, mobile } from "@utils/style.util";

export const TeamItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
`;

export const TeamName = styled.span`
  margin-bottom: 24px;
  color: ${COLORS.dark};
  font-size: 2rem;
  font-weight: 700;

  ${mobile`{
    text-align: center;
  }`}

  @media screen and (max-width: 425px) {
    font-size: 1.4rem;
  }
`;

export const PositionList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  list-style-type: none;

  ${mobile`{
    row-gap: 24px;  
  }`}

  @media screen and (max-width: 425px) {
    row-gap: 16px;
  }
`;

export const PositionItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const PositionDetails = styled.details`
  padding: 16px;
  overflow: hidden;
  box-shadow: 1px 1px 5px ${COLORS.gray};

  & > summary {
    font-size: 1.3rem;
    font-weight: 700;
    cursor: pointer;

    ${mobile`{
      font-size: 1.2rem;  
    }`}

    @media screen and (max-width: 425px) {
      font-size: 0.8rem;
    }
  }

  &[open] > summary {
  }

  & > summary::before {
    content: "";
  }

  & > summary + div.description-wrapper {
    max-width: 0;
    max-height: 0;
    opacity: 0;
    transition: all 1s ease-out;
  }

  &[open] > summary + div.description-wrapper {
    max-width: 1920px;
    max-height: 1080px;
    opacity: 1;
    transition: all 1s ease-out;
  }
`;

export const PositionDescriptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  margin-top: 32px;
  margin-left: 16px;
  overflow: hidden;
  word-break: keep-all;

  ${tablet`{
    row-gap: 24px;
  }`}

  ${mobile`{
    row-gap: 24px;
    margin-top: 16px;
    margin-left: 12px;  
  }`}
`;

export const PositionDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  ${mobile`{
    row-gap: 8px;  
  }`}
`;

export const PositionDescriptionSummary = styled.summary``;

export const PositionDescriptionTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 700;

  ${mobile`{
    font-size: 1.3rem;  
  }`}

  @media screen and (max-width: 425px) {
    font-size: 1.1rem;
  }
`;

export const PositionDescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  list-style: inside;
  list-style-type: "-";

  ${mobile`{
    row-gap: 4px;
  }`}
`;

export const PositionDescriptionItem = styled.li``;

export const PositionDescriptionItemText = styled.span`
  margin-left: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 28px;

  ${mobile`{
    font-size: 1rem;  
  }`}

  @media screen and (max-width: 425px) {
    font-size: 0.8rem;
    line-height: 20px;
  }
`;

export const PositionApplyButtonWrapper = styled.div`
  display: flex;
  margin-top: 16px;

  & > a {
    margin-left: auto;

    ${mobile`{
      margin-right: auto;
    }`}
  }
`;
