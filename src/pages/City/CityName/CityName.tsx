import React from "react";
import { useCurrentWeather } from "../../../hooks/useCurrentWeather";
import * as S from "./CityName.styled";

const CityName = () => {
  const currentWeather = useCurrentWeather();
  console.log(currentWeather);
  if (!currentWeather) return null;

  const { city, formatted } = currentWeather;

  return (
    <S.CityName>
      <S.CityNameGroup>
        <S.City>{city}</S.City>
        <S.Country>{formatted}</S.Country>
      </S.CityNameGroup>
    </S.CityName>
  );
};

export default CityName;
