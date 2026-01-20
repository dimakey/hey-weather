import { useSettings } from "../store/useSettings";
import { useWeather } from "../store/useWeather";
import { WeatherDaily } from "../types/responses";
import { formatTemperature } from "../utils/format-converter";
import { calculatePrecipProbability, capitalize, clamp } from "../utils/helpers";
import { useFormatDate } from "./useFormatDate";
import { useLocale } from "./useLocale";
import { getWeatherIcon } from "../constants/weather-icons";

export const useDailyWeather = (numOfDays = 6) => {
  const forecast = useWeather((state) => state.data?.forecast?.forecastday);
  const formatDate = useFormatDate();
  const tempMeasure = useSettings((state) => state.tempMeasure);
  const { data } = useLocale();

  if (!forecast) return [];

  const totalNumOfDays = clamp(numOfDays, 1, forecast.length);

  return forecast.slice(0, totalNumOfDays).map((forecastDay: WeatherDaily) => ({
    dt: {
      timestamp: forecastDay.date_epoch,
      iso: formatDate.getISO(forecastDay.date_epoch),
      shortDate: formatDate.getShortDate(forecastDay.date_epoch),
      weekday: capitalize(formatDate.getRelativeWeekday(forecastDay.date_epoch, data.weekdays)),
      isWeekend: formatDate.isWeekend(forecastDay.date_epoch)
    },
    weatherId: forecastDay.day.condition.code,
    icon: getWeatherIcon(forecastDay.day.condition.code),
    temp: {
      max: formatTemperature(forecastDay.day.maxtemp_c, tempMeasure),
      min: formatTemperature(forecastDay.day.mintemp_c, tempMeasure)
    },
    windSpeed: Number(forecastDay.day.maxwind_mph.toFixed(1)),
    pop: calculatePrecipProbability(
      forecastDay.day.daily_chance_of_rain,
      forecastDay.day.daily_chance_of_snow
    )
  }));
};