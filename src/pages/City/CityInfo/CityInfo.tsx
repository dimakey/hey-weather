import React from "react";
import ShowWeatherIcon from "../../../components/ShowWeatherIcon/ShowWeatherIcon";
import { getWindDescription } from "../../../constants/wind-description";
import { useDailyWeather } from "../../../hooks/useDailyWeather";
import { useFormatDate } from "../../../hooks/useFormatDate";
import { useLocale } from "../../../hooks/useLocale";
import * as S from "./CityInfo.styled";

// Todo: [future] Next week: rain; +11…+19°; light winds at 4 m/s
const CityInfo = () => {
  const { data } = useLocale();
  const daily = useDailyWeather();
  const fd = useFormatDate();

  const today = daily[0];
  const windDescriptionId = getWindDescription(today.windSpeed);
  const windDescription = data.windDescription[windDescriptionId];
  const weatherCondition = data.weatherCondition[today.weatherId];

  // Template day message
  const dayTemplate = `
  ${data.weekdays.today}: ${today.temp.min}... ${
    today.temp.max
  }; ${weatherCondition.toLowerCase()}; ${data.weather.pop.toLowerCase()}: ${today.pop}%;
  ${windDescription.toLowerCase()}`;


  return (
    <S.CityInfo>
      <S.Info>
        <ShowWeatherIcon iconId={today.icon} isDay={fd.isItDay()} />
        <S.InfoMessage>{dayTemplate}</S.InfoMessage>
      </S.Info>
    </S.CityInfo>
  );
};

export default CityInfo;
