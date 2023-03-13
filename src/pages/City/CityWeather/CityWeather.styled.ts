import styled from "styled-components";
import { Widget } from "../../../styles/components";
import { breakpoints, paddings } from "../../../styles/variables";

export const Weather = styled(Widget)`
  grid-area: weather;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 16px;
  }
`;

/* Info weather */
export const InfoWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 16px 0;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 8px;
  }
`;

export const CurrentTime = styled.time`
  color: ${({ theme }) => theme.colors.body500};
  text-align: center;
  padding: 6px 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.surfaceSecondary};
`;

export const WeatherHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 4px;

  img {
    width: 88px;
    height: 88px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: row;
  }
`;

export const WeatherTemp = styled.div`
  font-size: 64px;
  font-weight: 500;
`;

export const WeatherMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
`;

export const WeatherFeels = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.body500};
`;

export const WeatherDescription = styled.div`
  font-size: 24px;
  font-weight: 500;
`;
