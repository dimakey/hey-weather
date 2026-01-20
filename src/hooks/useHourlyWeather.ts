import { getWeatherIcon } from "../constants/weather-icons";
import { useSettings } from "../store/useSettings";
import { useWeather } from "../store/useWeather";
import { WeatherHourly } from "../types/responses";
import { formatTemperature } from "../utils/format-converter";
import { clamp } from "../utils/helpers";
import { useFormatDate } from "./useFormatDate";
import { useLocale } from "./useLocale";

export const useHourlyWeather = (numOfHours = 24) => {
  const hourly = useWeather((state) => state.data?.forecast?.forecastday[0]?.hour);
  const tempMeasure = useSettings((state) => state.tempMeasure);
  const formatDate = useFormatDate();
  const { data } = useLocale();

  const totalNumOfHours = clamp(numOfHours, 1, 24);

  // Use the WeatherHourly interface here
  return hourly?.slice(0, totalNumOfHours).map((hour: WeatherHourly) => ({
    dt: {
      timestamp: hour.time_epoch,
      iso: formatDate.getISO(hour.time_epoch),
      time: formatDate.getHourMin(hour.time_epoch),
      dayPart: formatDate.getRelativeDayParts(hour.time_epoch, data.dayParts)
    },
    weatherId: hour.condition.code,
    icon: getWeatherIcon(hour.condition.code),
    isItDay: Boolean(hour.is_day),
    humidity: hour.humidity,
    temp: formatTemperature(hour.temp_c, tempMeasure),
    description: data.weatherCondition[hour.condition.code] || hour.condition.text
  }));
};