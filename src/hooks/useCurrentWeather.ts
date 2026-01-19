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

  // 1. EARLY EXIT: If top-level data is missing, return null immediately.
  // This prevents the component from trying to destructure undefined.
  if (!weatherData || !weatherData.current) return null;

  const { current, country, city, formatted, ...weather } = weatherData;

  // 2. SAFE ARRAY ACCESS: The API might return an empty weather array.
  // We grab the first item safely or default to an empty object.
  const weatherCondition = current.weather?.[0] ?? {};

  // 3. DEFENSIVE VALUES: Use '??' to provide fallbacks for formatters.
  // We use 0 for numbers to prevent formatters from calculating "undefined".
  return {
    country: country ?? "Unknown Location",
    city: city ?? "",
    formatted: formatted ?? "",
    // Check if dt exists before formatting, otherwise return empty string
    currentTime: current.dt
      ? capitalize(formatDate.getLongDate(current.dt))
      : "",
    dateUtc: current.dt ?? 0,

    astro: {
      tzOffset: weather["timezone_offset"] ?? 0,
      coords: {
        lat: weather.lat ?? 0,
        lon: weather.lon ?? 0
      },
      dayDuration: formatDate.getDayDuration(
        current.sunset ?? 0,
        current.sunrise ?? 0
      )
    },

    weather: {
      // Pass 0 instead of undefined so math inside formatters doesn't produce NaN
      temp: formatTemperature(current.temp ?? 0, tempMeasure),
      formatTemp: formatTemperature(current.temp ?? 0, tempMeasure),
      feelsLike: formatTemperature(current.feels_like ?? 0, tempMeasure),

      // Fallback ID 800 usually represents "Clear" in OpenWeatherMap
      weatherId: weatherCondition.id ?? 800,
      icon: weatherCondition.icon ?? "01d", // Default icon

      pressure: formatPressure(current.pressure ?? 0, pressureMeasure),
      humidity: current.humidity ?? 0,
      visibility: current.visibility ?? 0,

      wind: {
        speed: formatWind(current.wind_speed ?? 0, windMeasure),
        degree: current.wind_deg ?? 0
      }
    }
  };
};