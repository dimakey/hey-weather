import { getWeatherIcon } from "../constants/weather-icons";
import { useSettings } from "../store/useSettings";
import { useWeather } from "../store/useWeather";
import { WeatherHourly } from "../types/responses";
import { formatTemperature } from "../utils/format-converter";
import { clamp } from "../utils/helpers";
import { useFormatDate } from "./useFormatDate";
import { useLocale } from "./useLocale";

export const useHourlyWeather = (numOfHours = 24) => {
  const hourly = useWeather((state) => state.data?.forecast?.forecastday[0].hour);
  const tempMeasure = useSettings((state) => state.tempMeasure);
  const formatDate = useFormatDate();
  const { data } = useLocale();

  /** Number of forecast hours. Max is 48 */
  const MAX_FORECAST_HOURS = 24;
  const MIN_FORECAST_HOURS = 1;
  const totalNumOfHours = clamp(
    numOfHours,
    MIN_FORECAST_HOURS,
    MAX_FORECAST_HOURS
  );

  return hourly?.slice(0, totalNumOfHours).map((hour: WeatherHourly) => ({
    dt: {
      timestamp: Number(hour["time_epoch"]),
      iso: formatDate.getISO(Number(hour["time_epoch"])),
      time: formatDate.getHourMin(Number(hour["time_epoch"])),
      dayPart: formatDate.getRelativeDayParts(Number(hour["time_epoch"]), data.dayParts)
    },
    weatherId: hour?.condition?.code,
    icon: getWeatherIcon(hour?.condition?.code),
    isItDay: Boolean(hour["is_day"]) || false,

    humidity: hour.humidity,
    temp: formatTemperature(hour["temp_c"], tempMeasure),
    description: data.weatherCondition[hour.condition.code]
    // description: capitalize(hour.weather[0].description)
  }));
};
