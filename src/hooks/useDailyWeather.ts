import { formatTemperature } from "../utils/format-converter";
import { useAppSelector } from "../redux/store";
import { WeatherDaily } from "../types/responses";
import { capitalize, clamp } from "../utils/helpers";
import { useFormatDate } from "./useFormatDate";
import { useLocale } from "./useLocale";
import { useSettings } from "./useSettings";

export const useDailyWeather = (numOfDays = 6) => {
  const forecast = useAppSelector((state) => state.weather.data?.daily);
  const formatDate = useFormatDate();
  const { tempMeasure } = useSettings();
  const { data } = useLocale();

  /** Number of forecast days. Max is 10 */
  const MIN_FORECAST_DAYS = 1;
  const MAX_FORECAST_DAYS = 10;
  const totalNumOfDays = clamp(numOfDays, MIN_FORECAST_DAYS, MAX_FORECAST_DAYS);

  return forecast?.slice(0, totalNumOfDays).map((day: WeatherDaily) => ({
    dt: {
      timestamp: day.dt,
      iso: formatDate.getISO(day.dt),
      shortDate: formatDate.getShortDate(day.dt),
      weekday: capitalize(formatDate.getRelativeWeekday(day.dt, data.weekdays)),
      isWeekend: formatDate.isWeekend(day.dt),
    },
    weatherId: day.weather[0].id,
    icon: day.weather[0].icon,
    temp: {
      max: formatTemperature(day.temp.max, tempMeasure),
      min: formatTemperature(day.temp.min, tempMeasure),
    },
    windSpeed: Number(day["wind_speed"].toFixed(1)),
    pop: day.pop,
  }));
};
