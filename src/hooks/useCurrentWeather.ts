import {
  formatPressure,
  formatTemperature,
  formatWind,
} from "../utils/format-converter";
import { useAppSelector } from "../redux/store";
import { capitalize } from "../utils/helpers";
import { useFormatDate } from "./useFormatDate";
import { useSettings } from "./useSettings";

export const useCurrentWeather = () => {
  const weatherData = useAppSelector(
    (state) => state.weather.data
  );

  if (!weatherData) return;

  const { current, country, city, formatted, ...weather } = weatherData;

  const { tempMeasure, windMeasure, pressureMeasure } = useSettings();
  const formatDate = useFormatDate();

  return {
    country,
    city,
    formatted,
    currentTime: capitalize(formatDate.getLongDate(current.dt)),
    dateUtc: current.dt,

    astro: {
      tzOffset: weather["timezone_offset"],
      coords: {
        lat: weather.lat,
        lon: weather.lon,
      },
      dayDuration: formatDate.getDayDuration(current.sunset, current.sunrise),
    },

    weather: {
      temp: formatTemperature(current.temp, tempMeasure),
      formatTemp: formatTemperature(current.temp, tempMeasure),
      feelsLike: formatTemperature(current.feels_like, tempMeasure),
      weatherId: current.weather[0].id,
      icon: current.weather[0].icon,
      pressure: formatPressure(current.pressure, pressureMeasure),
      humidity: current.humidity,
      visibility: current.visibility,
      wind: {
        speed: formatWind(current.wind_speed, windMeasure),
        degree: current.wind_deg,
      },
    },
  };
};
