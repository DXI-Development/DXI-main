import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  & a {
    text-decoration: none;
  }
`;

export const PageMain = styled.main`
  display: flex;
  flex-direction: column;
`;

export const PageMainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerPage = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1920px;
`;
