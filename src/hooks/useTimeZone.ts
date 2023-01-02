import { useWeather } from "../store/useWeather";

export const useTimeZone = () => {
  const yourTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timeZone = useWeather((state) => state.data?.timezone);
  return timeZone ? timeZone : yourTimeZone;
};
