import { useAppSelector } from "../redux/store";

export const useTimeZone = () => {
  const yourTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timeZone = useAppSelector((state) => state.weather.data?.timezone);
  return timeZone ? timeZone : yourTimeZone;
};
