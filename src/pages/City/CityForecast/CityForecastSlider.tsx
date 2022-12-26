import React from "react";
import { useTheme } from "styled-components";
import ShowWeatherIcon from "../../../components/ShowWeatherIcon/ShowWeatherIcon";
import { useDailyWeather } from "../../../hooks/useDailyWeather";
import { useLocale } from "../../../hooks/useLocale";
import * as S from "./CityForecastSlider.styled";

const CityForecastSlider = () => {
  const { data } = useLocale();
  const theme = useTheme();
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
            <ShowWeatherIcon
              iconId={day.icon}
              iconDescription={data.weatherCondition[day.weatherId]}
              theme={theme.type}
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
