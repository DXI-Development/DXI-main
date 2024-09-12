import styled from "styled-components";

import { COLORS } from "@consts/style";

export const TeamWrapper = styled.li`
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
`;

export const TeamName = styled.span`
  margin-bottom: 24px;
  color: ${COLORS.dark};
  font-size: 2rem;
  font-weight: 700;
`;

export const PositionList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  list-style-type: none;
`;

export const PositionWrapper = styled.li`
  display: flex;
  flex-direction: column;
`;

export const PositionDetails = styled.details`
  padding: 16px;
  box-shadow: 1px 1px 5px ${COLORS.gray};

  & > summary {
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
  }

  &[open] > summary {
  }

  & > summary::before {
    content: "";
  }

  &[open] > div {
    margin-top: 16px;
    margin-left: 16px;
  }
`;
