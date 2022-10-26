import { FormatDate } from "../utils/dates";
import { useLocale } from "./useLocale";
import { useTimeZone } from "./useTimeZone";

export const useFormatDate = () => {
  const { locale } = useLocale();
  const timezone = useTimeZone();

  return new FormatDate(timezone, locale);
};
