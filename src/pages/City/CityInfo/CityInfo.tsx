import React from "react";
import { useTheme } from "styled-components";
import ShowWeatherIcon from "../../../components/ShowWeatherIcon/ShowWeatherIcon";
import { getWindDescription } from "../../../constants/wind-description";
import { useDailyWeather } from "../../../hooks/useDailyWeather";
import { useLocale } from "../../../hooks/useLocale";
import * as S from "./CityInfo.styled";

// Todo: [future] Next week: rain; +11…+19°; light winds at 4 m/s
const CityInfo = () => {
  const { data } = useLocale();
  const theme = useTheme();
  const daily = useDailyWeather();
  if (!daily) return null;

  const today = daily[0];
  const windDescriptionId = getWindDescription(today.windSpeed);
  const windDescription = data.windDescription[windDescriptionId];
  const weatherCondition = data.weatherCondition[today.weatherId];

  // Precipitation probability
  const popPercent = Math.round(today.pop * 100);
  const pop =
    popPercent >= 10
      ? `${data.weather.pop.toLowerCase()}: ${popPercent}%`
      : data.weather.noPop.toLowerCase();

  // Template day message
  const dayTemplate = `
  ${data.weekdays.today}: ${today.temp.min}...${
    today.temp.max
  }; ${weatherCondition.toLowerCase()}; ${pop};
  ${windDescription.toLowerCase()}: ${today.windSpeed} ${data.units.ms};`;

  return (
    <S.CityInfo>
      <S.Info>
        <ShowWeatherIcon iconId={today.icon} theme={theme.type} />
        <S.InfoMessage>{dayTemplate}</S.InfoMessage>
      </S.Info>
    </S.CityInfo>
  );
};

export default CityInfo;
