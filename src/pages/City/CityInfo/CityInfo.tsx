import React from "react";
import InfoIcon from "../../../components/InfoIcon/InfoIcon";
import { getWindDescription } from "../../../constants/wind-description";
import { useDailyWeather } from "../../../hooks/useDailyWeather";
import { useLocale } from "../../../hooks/useLocale";
import { icons } from "../../../utils/constants";
import * as S from "./CityInfo.styled";

/**
 * Today: +5…+15°; clear, no precipitation; light winds at 3–5 m/s
 * Todo: [future] Next week: rain; +11…+19°; light winds at 4 m/s
 */

// TODO: Refactor and typify this!
const CityInfo = () => {
  const { data } = useLocale();
  const daily = useDailyWeather();

  if (!daily) return null;

  const today = daily[0];
  const windDescriptionId = getWindDescription(today.windSpeed);
  const windDescription = data.windDescription[windDescriptionId];
  const weatherCondition = data.weatherCondition[today.weatherId];

  // Precipitation probability
  const popPercent = Math.round(today.pop * 100);
  const pop =
    popPercent >= 10
      ? `${data.weather.pop.toLowerCase()}: ${popPercent}%`
      : data.weather.noPop.toLowerCase();

  // Template day message
  const dayTemplate = `
  ${data.weekdays.today}: ${today.temp.min}...${
    today.temp.max
  }; ${weatherCondition.toLowerCase()}; ${pop};
  ${windDescription.toLowerCase()}: ${today.windSpeed} ${data.units.ms};`;

  return (
    <S.CityInfo>
      <S.Info>
        <InfoIcon icon={icons.weather[today.icon]} size="md" />
        <S.InfoMessage>{dayTemplate}</S.InfoMessage>
      </S.Info>
    </S.CityInfo>
  );
};

export default CityInfo;
