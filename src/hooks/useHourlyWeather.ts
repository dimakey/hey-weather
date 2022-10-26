import { formatTemperature } from "../utils/format-converter";
import { useAppSelector } from "../redux/store";
import { WeatherHourly } from "../types/responses";
import { capitalize, clamp } from "../utils/helpers";
import { useFormatDate } from "./useFormatDate";
import { useSettings } from "./useSettings";

export const useHourlyWeather = (numOfHours = 24) => {
  const hourly = useAppSelector((state) => state.weather.data?.hourly);
  const { tempMeasure } = useSettings();
  const formatDate = useFormatDate();

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
    },
    icon: hour.weather[0].icon,
    humidity: hour.humidity,
    temp: formatTemperature(hour.temp, tempMeasure),
    description: capitalize(hour.weather[0].description),
  }));
};
