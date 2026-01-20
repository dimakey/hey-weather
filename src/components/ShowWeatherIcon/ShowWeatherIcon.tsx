import React from "react";
import { useTheme } from "styled-components";
import { weatherIcons } from "../../utils/constants";

type ShowWeatherIconProps = {
  iconId: string | number;
  iconDescription?: string;
  isDay: boolean;
};

const ShowWeatherIcon = ({
                           iconId,
                           iconDescription,
                           isDay = true
                         }: ShowWeatherIconProps) => {

  const theme = useTheme();
  const suffix = isDay ? "d" : "n";
  const iconIdSuffixed = `${iconId}${suffix}`;

  return (
    <>
      {theme.type === "dark" && (
        <img src={weatherIcons.dark[iconIdSuffixed]} alt={iconDescription} />
      )}
      {theme.type === "light" && (
        <img src={weatherIcons.light[iconIdSuffixed]} alt={iconDescription} />
      )}
    </>
  );
};

export default ShowWeatherIcon;
