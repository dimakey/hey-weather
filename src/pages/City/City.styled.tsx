import styled from "styled-components";
import { breakpoints } from "../../styles/variables";

export const City = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: auto;
  grid-gap: 16px;
  grid-template-areas:
    "name info info"
    "weather duringday forecast"
    "weather astro forecast";

  @media (max-width: ${breakpoints.desktop}) {
    grid-gap: 12px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-areas:
      "name info"
      "weather duringday"
      "weather astro"
      "forecast forecast";
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "name"
      "info"
      "weather"
      "duringday"
      "astro"
      "forecast";
  }
`;
