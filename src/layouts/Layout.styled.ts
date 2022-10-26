import styled from "styled-components";
import { breakpoints } from "../styles/variables";

export const LayoutWrapper = styled.div`
  max-width: 1240px;
  padding: 0 32px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 16px;
  }
`;

export const PromoLayoutWrapper = styled(LayoutWrapper)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  //overflow: hidden;
`;

export const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0;
    //align-items: flex-start;
  }
`;
