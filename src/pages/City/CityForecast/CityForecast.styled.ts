import styled from "styled-components";
import { Widget } from "../../../styles/components";
import { paddings } from "../../../styles/variables";

export const Forecast = styled(Widget)`
  grid-area: forecast;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;
