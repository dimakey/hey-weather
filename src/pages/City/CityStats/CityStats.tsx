import React from "react";
import { useLocale } from "../../../hooks/useLocale";
import { useCurrentWeather } from "../../../hooks/useCurrentWeather";
import { statsIcons } from "../../../utils/constants";
import * as S from "./CityStats.styled";

const CityStats = () => {
  const currentWeather = useCurrentWeather();
  if (!currentWeather) return null;
  const { data } = useLocale();
  const { weather } = currentWeather;

  return (
    <S.CityStats>
      <S.Item>
        <S.Icon>
          <img src={statsIcons.humidity} alt={data.weather.humidity} />
        </S.Icon>
        <S.TitleGroup>
          <S.Subtitle>{data.weather.humidity}</S.Subtitle>
          <S.Title>{weather.humidity}%</S.Title>
        </S.TitleGroup>
      </S.Item>
      <S.Item>
        <S.Icon>
          <img src={statsIcons.wind} alt={data.weather.wind} />
        </S.Icon>
        <S.TitleGroup>
          <S.Subtitle>{data.weather.wind}</S.Subtitle>
          <S.Title>{weather.wind.speed}</S.Title>
        </S.TitleGroup>
      </S.Item>
      <S.Item>
        <S.Icon>
          <img src={statsIcons.pressure} alt={data.weather.pressure} />
        </S.Icon>
        <S.TitleGroup>
          <S.Subtitle>{data.weather.pressure}</S.Subtitle>
          <S.Title>{weather.pressure}</S.Title>
        </S.TitleGroup>
      </S.Item>
      <S.Item>
        <S.Icon>
          <img src={statsIcons.visibility} alt={data.weather.visibility} />
        </S.Icon>
        <S.TitleGroup>
          <S.Subtitle>{data.weather.visibility}</S.Subtitle>
          <S.Title>{weather.visibility / 1000} km</S.Title>
        </S.TitleGroup>
      </S.Item>
    </S.CityStats>
  );
};

export default CityStats;
