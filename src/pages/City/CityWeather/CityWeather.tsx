import React from "react";
import ShowWeatherIcon from "../../../components/ShowWeatherIcon/ShowWeatherIcon";
import { useCurrentWeather } from "../../../hooks/useCurrentWeather";
import { useLocale } from "../../../hooks/useLocale";
import CityStats from "../CityStats/CityStats";
import * as S from "./CityWeather.styled";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

const CityWeather = () => {
  const currentWeather = useCurrentWeather();
  if (!currentWeather) return null;
  const { weather, dateUtc, timeZone } = currentWeather;

  const { data } = useLocale();
  const description = data.weatherCondition[weather.weatherId];

  const date = new Date(dateUtc * 1000);
  const zonedDate = toZonedTime(date, timeZone);
  const formattedTime = format(zonedDate, "EEE, MMM d  HH:mm");


  return (
    <S.Weather>
      <S.CurrentTime>{formattedTime}</S.CurrentTime>
      <S.InfoWeather>
        <S.WeatherHeader>
          <ShowWeatherIcon
            iconId={weather.icon}
            iconDescription={description}
            isDay={weather.isItDay}
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
