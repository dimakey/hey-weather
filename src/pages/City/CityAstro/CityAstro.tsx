import React from "react";
import SunriseChart from "../../../components/SunriseChart/SunriseChart";
import WidgetHeader from "../../../components/WidgetHeader/WidgetHeader";
import { useFormatDate } from "../../../hooks/useFormatDate";
import { useLocale } from "../../../hooks/useLocale";
import { useCurrentWeather } from "../../../hooks/useCurrentWeather";
import { timeToPercent } from "../../../utils/helpers";
import * as S from "./CityAstro.styled";

const CityAstro = () => {
  const currentWeather = useCurrentWeather();
  if (!currentWeather) return null;

  const { data } = useLocale();
  const { dayDuration, coords } = currentWeather.astro;
  const fd = useFormatDate();

  const { percent, isSunPhase, sunrise, sunset, current } =
    timeToPercent(coords);

  const formatDayDuration = `${dayDuration.hours}${data.units.h} ${dayDuration.minutes}${data.units.m}`;

  return (
    <S.CityAstro>
      <WidgetHeader
        subtitle={data.widget.daylightHours}
        title={formatDayDuration}
      />

      <S.AstroGroup>
        <SunriseChart percent={percent} isSunPhase={isSunPhase} />

        <S.AstroFooter>
          <S.AstroTimeGroup>
            <S.AstroSubtitle>
              {isSunPhase ? data.weather.sunrise : data.weather.sunset}
            </S.AstroSubtitle>
            {isSunPhase ? (
              <S.AstroTime dateTime={fd.getISO(sunrise)}>
                {fd.getHourMin(sunrise)}
              </S.AstroTime>
            ) : (
              <S.AstroTime dateTime={fd.getISO(sunset)}>
                {fd.getHourMin(sunset)}
              </S.AstroTime>
            )}
          </S.AstroTimeGroup>
          <S.AstroTimeGroup>
            <S.AstroSubtitle>{data.other.now}</S.AstroSubtitle>
            <S.AstroTime dateTime={fd.getISO(new Date())}>
              {fd.getHourMin(current)}
            </S.AstroTime>
          </S.AstroTimeGroup>
          <S.AstroTimeGroup>
            <S.AstroSubtitle>
              {isSunPhase ? data.weather.sunset : data.weather.sunrise}
            </S.AstroSubtitle>
            {isSunPhase ? (
              <S.AstroTime dateTime={fd.getISO(sunset)}>
                {fd.getHourMin(sunset)}
              </S.AstroTime>
            ) : (
              <S.AstroTime dateTime={fd.getISO(sunrise)}>
                {fd.getHourMin(sunrise)}
              </S.AstroTime>
            )}
          </S.AstroTimeGroup>
        </S.AstroFooter>
      </S.AstroGroup>
    </S.CityAstro>
  );
};

export default CityAstro;
