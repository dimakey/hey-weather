import React from "react";
import { useDailyWeather } from "../../../hooks/useDailyWeather";
import { useLocale } from "../../../hooks/useLocale";
import { icons } from "../../../utils/constants";
import * as S from "./CityForecastSlider.styled";

const CityForecastSlider = () => {
  const { data } = useLocale();
  const daily = useDailyWeather();

  return (
    <S.ForecastDays>
      {daily?.map((day) => (
        <S.ForecastDay key={day.dt.timestamp}>
          <S.TitleGroup>
            <S.Weekday isWeekend={day.dt.isWeekend}>{day.dt.weekday}</S.Weekday>
            <S.Date dateTime={day.dt.iso}>{day.dt.shortDate}</S.Date>
          </S.TitleGroup>

          <S.ImgTempGroup>
            <S.Img
              src={icons.weather[day.icon]}
              alt={data.weatherCondition[day.weatherId]}
            />
            <S.TempDescriptionGroup>
              <S.TempGroup>
                <S.TempMax>{day.temp.max}</S.TempMax>
                <S.TempMin>/</S.TempMin>
                <S.TempMin>{day.temp.min}</S.TempMin>
              </S.TempGroup>
              <S.Description>
                {data.weatherCondition[day.weatherId]}
              </S.Description>
            </S.TempDescriptionGroup>
          </S.ImgTempGroup>
        </S.ForecastDay>
      ))}
    </S.ForecastDays>
  );
};

export default CityForecastSlider;
