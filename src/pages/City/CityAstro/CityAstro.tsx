import React from "react";
import SunriseChart from "../../../components/SunriseChart/SunriseChart";
import WidgetHeader from "../../../components/WidgetHeader/WidgetHeader";
import { useLocale } from "../../../hooks/useLocale";
import { useCurrentWeather } from "../../../hooks/useCurrentWeather";
import { timeToPercent } from "../../../utils/helpers";
import * as S from "./CityAstro.styled";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

const CityAstro = () => {
  const currentWeather = useCurrentWeather();
  const { data } = useLocale();
  if (!currentWeather) return null;

  const { dayDuration, coords, sunrise, sunset } = currentWeather.astro;
  const { timeZone } = currentWeather;

  // Use the helper to get sun position
  const { percent, isSunPhase, current } = timeToPercent(coords);

  // Fallbacks to prevent "number | null" errors
  const sunriseVal = sunrise ?? 0;
  const sunsetVal = sunset ?? 0;
  const currentVal = current ?? Date.now(); // Fallback to now if current is null

  const formatDayDuration = `${dayDuration.hours}${data.units.h} ${dayDuration.minutes}${data.units.m}`;

  const sunriseZoned = new Date(sunriseVal * 1000);
  const sunsetZoned = new Date(sunsetVal * 1000);
  const currentZoned = toZonedTime(new Date(currentVal * 1000), timeZone);

  const formattedNow = format(currentZoned, "HH:mm");
  const formattedSunrise = format(sunriseZoned, "HH:mm");
  const formattedSunset = format(sunsetZoned, "HH:mm");

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
              <S.AstroTime dateTime={formattedSunrise}>
                {formattedSunrise}
              </S.AstroTime>
            ) : (
              <S.AstroTime dateTime={formattedSunset}>
                {formattedSunset}
              </S.AstroTime>
            )}
          </S.AstroTimeGroup>

          <S.AstroTimeGroup>
            <S.AstroSubtitle>{data.other.now}</S.AstroSubtitle>
            {/* Fix: use currentVal and ensure fd.getISO gets a number/timestamp */}
            <S.AstroTime>
              {formattedNow}
            </S.AstroTime>
          </S.AstroTimeGroup>

          <S.AstroTimeGroup>
            <S.AstroSubtitle>
              {isSunPhase ? data.weather.sunset : data.weather.sunrise}
            </S.AstroSubtitle>
            {isSunPhase ? (
              <S.AstroTime dateTime={formattedSunset}>
                {formattedSunset}
              </S.AstroTime>
            ) : (
              <S.AstroTime dateTime={formattedSunrise}>
                {formattedSunrise}
              </S.AstroTime>
            )}
          </S.AstroTimeGroup>
        </S.AstroFooter>
      </S.AstroGroup>
    </S.CityAstro>
  );
};

export default CityAstro;
