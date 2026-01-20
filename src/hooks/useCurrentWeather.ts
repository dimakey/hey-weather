import { getWeatherIcon } from "../constants/weather-icons";
import { useSettings } from "../store/useSettings";
import { useWeather } from "../store/useWeather";
import {
  formatPressure,
  formatTemperature,
  formatWind
} from "../utils/format-converter";
import { capitalize } from "../utils/helpers";
import { useFormatDate } from "./useFormatDate";

export const useCurrentWeather = () => {
  const weatherData = useWeather((state) => state.data);
  const tempMeasure = useSettings((state) => state.tempMeasure);
  const windMeasure = useSettings((state) => state.windMeasure);
  const pressureMeasure = useSettings((state) => state.pressureMeasure);
  const formatDate = useFormatDate();

  const sunrise = formatDate.getTimeAsEpoch(weatherData?.forecast?.forecastday[0].astro.sunrise);
  const sunset = formatDate.getTimeAsEpoch(weatherData?.forecast?.forecastday[0].astro.sunset);

  const dayDuration = formatDate.getDayDuration(
    sunset ?? 0,
    sunrise ?? 0
  );

  if (!weatherData) return null;
  const { current, country, city, formatted, ...weather } = weatherData;

  return {
    country: country,
    city: city,
    formatted: formatted ?? "",
    currentTime: current["last_updated_epoch"]
      ? capitalize(formatDate.getLongDate(current["last_updated_epoch"]))
      : "",
    dateUtc: current["last_updated_epoch"] ?? 0,

    astro: {
      tzOffset: weather["timezone_offset"] ?? 0,
      coords: {
        lat: weather.lat ?? 0,
        lon: weather.lon ?? 0
      },
      sunrise: sunrise ?? 0,
      sunset: sunset ?? 0,
      dayDuration: dayDuration
    },

    weather: {
      temp: formatTemperature(current.temp ?? 0, tempMeasure),
      formatTemp: formatTemperature(current["temp_c"] ?? 0, tempMeasure),
      feelsLike: formatTemperature(current["feelslike_c"] ?? 0, tempMeasure),

      // Fallback ID 800 usually represents "Clear" in OpenWeatherMap
      weatherId: current?.condition?.code,
      icon: getWeatherIcon(current?.condition?.code),
      isItDay: formatDate.isItDay(),

      pressure: formatPressure(current["pressure_mb"] ?? 0, pressureMeasure),
      humidity: current["humidity"] ?? 0,
      visibility: current["vis_km"] ?? 0,

      wind: {
        speed: formatWind(current["wind_kph"] ?? 0, windMeasure),
        degree: current["wind_degree"] ?? 0
      }
    }
  };
};