import React from "react";
import { ThemeMeasure } from "../../store/useSettings";
import { weatherIcons } from "../../utils/constants";

type ShowWeatherIconProps = {
  iconId: string | number;
  iconDescription?: string;
  theme: ThemeMeasure;
};

const ShowWeatherIcon = ({
  iconId,
  iconDescription,
  theme,
}: ShowWeatherIconProps) => {
  return (
    <>
      {theme === "dark" && (
        <img src={weatherIcons.dark[iconId]} alt={iconDescription} />
      )}
      {theme === "light" && (
        <img src={weatherIcons.light[iconId]} alt={iconDescription} />
      )}
    </>
  );
};

export default ShowWeatherIcon;
