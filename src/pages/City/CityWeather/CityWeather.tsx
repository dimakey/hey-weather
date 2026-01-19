import React from "react";
import { useTheme } from "styled-components";
import ShowWeatherIcon from "../../../components/ShowWeatherIcon/ShowWeatherIcon";
import { useCurrentWeather } from "../../../hooks/useCurrentWeather";
import { useLocale } from "../../../hooks/useLocale";
import CityStats from "../CityStats/CityStats";
import * as S from "./CityWeather.styled";

const CityWeather = () => {
  const currentWeather = useCurrentWeather();
  if (!currentWeather) return null;
  const { weather, currentTime } = currentWeather;

  const { data } = useLocale();
  const theme = useTheme();
  const description = data.weatherCondition[weather.weatherId];
  const currentIsoDate = new Date().toISOString();

  return (
    <S.Weather>
      <S.CurrentTime dateTime={currentIsoDate}>{currentTime}</S.CurrentTime>
      <S.InfoWeather>
        <S.WeatherHeader>
          <ShowWeatherIcon
            iconId={weather.icon}
            iconDescription={"weather icon"}
            theme={theme.type}
          />

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
