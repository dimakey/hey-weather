import styled from "styled-components";
import { Widget } from "../../../styles/components";
import { breakpoints } from "../../../styles/variables";

export const CityInfo = styled(Widget)`
  grid-area: info;
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
  }
`;

export const InfoMessage = styled.p`
  font-size: 20px;
  line-height: 1.15;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`;
