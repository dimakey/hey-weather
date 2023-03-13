import { useSettings } from "../store/useSettings";
import { useWeather } from "../store/useWeather";
import { WeatherHourly } from "../types/responses";
import { formatTemperature } from "../utils/format-converter";
import { capitalize, clamp } from "../utils/helpers";
import { useFormatDate } from "./useFormatDate";
import { useLocale } from "./useLocale";

export const useHourlyWeather = (numOfHours = 24) => {
  const hourly = useWeather((state) => state.data?.hourly);
  const tempMeasure = useSettings((state) => state.tempMeasure);
  const formatDate = useFormatDate();
  const { data } = useLocale();

  /** Number of forecast hours. Max is 48 */
  const MAX_FORECAST_HOURS = 48;
  const MIN_FORECAST_HOURS = 1;
  const totalNumOfHours = clamp(
    numOfHours,
    MIN_FORECAST_HOURS,
    MAX_FORECAST_HOURS
  );

  return hourly?.slice(0, totalNumOfHours).map((hour: WeatherHourly) => ({
    dt: {
      timestamp: hour.dt,
      iso: formatDate.getISO(hour.dt),
      time: formatDate.getHourMin(hour.dt),
      dayPart: formatDate.getRelativeDayParts(hour.dt, data.dayParts),
    },
    icon: hour.weather[0].icon,
    humidity: hour.humidity,
    temp: formatTemperature(hour.temp, tempMeasure),
    description: capitalize(hour.weather[0].description),
  }));
};
