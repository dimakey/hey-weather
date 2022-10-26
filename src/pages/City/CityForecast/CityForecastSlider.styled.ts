import styled from "styled-components";
import { base, breakpoints } from "../../../styles/variables";

type WeekdayProps = {
  isWeekend?: boolean;
};

export const ForecastDays = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;
`;

export const ForecastDay = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${base.radii};
  padding: 8px 12px;
  overflow: hidden;
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-basis: 116px;
  flex-direction: column;
  flex-shrink: 0;
  gap: 6px;

  @media (max-width: ${breakpoints.desktop}) {
    flex-basis: 50%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-basis: 116px;
  }
`;

export const Weekday = styled.span<WeekdayProps>`
  font-weight: 600;
  color: ${({ theme, isWeekend }) =>
    isWeekend ? theme.colors.danger : theme.colors.body900};
`;

export const Date = styled.time`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.body500};
`;

export const ImgTempGroup = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0 12px;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
`;

export const TempDescriptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TempGroup = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const TempMax = styled.em`
  color: ${({ theme }) => theme.colors.body900};
`;

export const TempMin = styled.span`
  //font-size: 14px;
  color: ${({ theme }) => theme.colors.body500};
`;

export const Description = styled.span`
  font-size: 14px;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.body500};
`;
