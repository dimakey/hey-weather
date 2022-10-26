import React from "react";
import { useLocale } from "../../../hooks/useLocale";
import { useCurrentWeather } from "../../../hooks/useCurrentWeather";
import { icons } from "../../../utils/constants";
import CityStats from "../CityStats/CityStats";
import * as S from "./CityWeather.styled";

const CityWeather = () => {
  // const { weather, currentTime } = useCurrentWeather();
  const currentWeather = useCurrentWeather();
  if (!currentWeather) return null;

  const { weather, currentTime } = currentWeather;

  const { data } = useLocale();
  const description = data.weatherCondition[weather.weatherId];
  const currentIsoDate = new Date().toISOString();

  return (
    <S.Weather>
      <S.CurrentTime dateTime={currentIsoDate}>{currentTime}</S.CurrentTime>
      <S.InfoWeather>
        <S.WeatherHeader>
          <S.WeatherIcon src={icons.weather[weather.icon]} alt="weather icon" />
          <S.WeatherTemp>{weather.formatTemp}</S.WeatherTemp>
        </S.WeatherHeader>
        <S.WeatherMain>
          <S.WeatherFeels>
            {data.weather.feels} {weather.feelsLike}
          </S.WeatherFeels>
          <S.WeatherDescription>{description}</S.WeatherDescription>
        </S.WeatherMain>
      </S.InfoWeather>
      <CityStats />
    </S.Weather>
  );
};

export default CityWeather;
