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

  if (!weatherData) return null;

  const current = weatherData.current;
  const location = weatherData.location;
  const firstDay = weatherData.forecast.forecastday[0];

  const sunrise = formatDate.getTimeAsEpoch(firstDay.astro.sunrise);
  const sunset = formatDate.getTimeAsEpoch(firstDay.astro.sunset);

  return {
    country: location.country,
    city: location.name,
    formatted: weatherData.formatted ?? `${location.name}, ${location.country}`,
    currentTime: current.last_updated_epoch
      ? capitalize(formatDate.getLongDate(current.last_updated_epoch))
      : "",
    dateUtc: current.last_updated_epoch ?? 0,

    astro: {
      tzOffset: weatherData.timezone_offset ?? 0,
      coords: { lat: location.lat, lon: location.lon },
      sunrise,
      sunset,
      dayDuration: formatDate.getDayDuration(sunset ?? 0, sunrise ?? 0)
    },

    weather: {
      temp: formatTemperature(current.temp_c, tempMeasure),
      formatTemp: formatTemperature(current.temp_c, tempMeasure),
      feelsLike: formatTemperature(current.feelslike_c, tempMeasure),
      weatherId: current.condition.code,
      icon: getWeatherIcon(current.condition.code),
      isItDay: formatDate.isItDay(),
      pressure: formatPressure(current.pressure_mb, pressureMeasure),
      humidity: current.humidity,
      visibility: current.vis_km,
      wind: {
        speed: formatWind(current.wind_kph, windMeasure),
        degree: current.wind_degree
      }
    }
  };
};