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
  const { data } = useLocale();
  const fd = useFormatDate();

  if (!currentWeather) return null;

  const { dayDuration, coords, sunrise, sunset } = currentWeather.astro;

  // Use the helper to get sun position
  const { percent, isSunPhase, current } = timeToPercent(coords);

  // Fallbacks to prevent "number | null" errors
  const sunriseVal = sunrise ?? 0;
  const sunsetVal = sunset ?? 0;
  const currentVal = current ?? Date.now(); // Fallback to now if current is null

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
              <S.AstroTime dateTime={fd.getISO(sunriseVal)}>
                {fd.getHourMin(sunriseVal)}
              </S.AstroTime>
            ) : (
              <S.AstroTime dateTime={fd.getISO(sunsetVal)}>
                {fd.getHourMin(sunsetVal)}
              </S.AstroTime>
            )}
          </S.AstroTimeGroup>

          <S.AstroTimeGroup>
            <S.AstroSubtitle>{data.other.now}</S.AstroSubtitle>
            {/* Fix: use currentVal and ensure fd.getISO gets a number/timestamp */}
            <S.AstroTime dateTime={fd.getISO(Date.now())}>
              {fd.getHourMin(currentVal)}
            </S.AstroTime>
          </S.AstroTimeGroup>

          <S.AstroTimeGroup>
            <S.AstroSubtitle>
              {isSunPhase ? data.weather.sunset : data.weather.sunrise}
            </S.AstroSubtitle>
            {isSunPhase ? (
              <S.AstroTime dateTime={fd.getISO(sunsetVal)}>
                {fd.getHourMin(sunsetVal)}
              </S.AstroTime>
            ) : (
              <S.AstroTime dateTime={fd.getISO(sunriseVal)}>
                {fd.getHourMin(sunriseVal)}
              </S.AstroTime>
            )}
          </S.AstroTimeGroup>
        </S.AstroFooter>
      </S.AstroGroup>
    </S.CityAstro>
  );
};

export default CityAstro;
