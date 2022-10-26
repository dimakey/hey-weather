import {
  formatISO,
  fromUnixTime,
  intervalToDuration,
  intlFormat,
  isDate,
  isToday,
  isTomorrow,
  isWeekend,
  isYesterday,
} from "date-fns";
import { LOCALE_DEFAULT } from "./locales";

type DateNum = Date | number;

type LocaleWeekdays = {
  tomorrow: string;
  today: string;
  yesterday: string;
};

export class FormatDate {
  constructor(
    readonly timezone: string,
    readonly locale: string = LOCALE_DEFAULT
  ) {}

  protected validateDate(date: DateNum) {
    if (isDate(date)) {
      return date;
    }
    return fromUnixTime(+date);
  }

  public isWeekend(date: DateNum): boolean {
    return isWeekend(this.validateDate(date));
  }

  public getWeekday(date: DateNum) {
    return intlFormat(
      this.validateDate(date),
      { weekday: "long", timeZone: this.timezone },
      { locale: this.locale }
    );
  }

  public getRelativeWeekday(date: DateNum, localeWeekdays?: LocaleWeekdays) {
    if (!localeWeekdays) {
      localeWeekdays = {
        tomorrow: "Tomorrow",
        today: "Today",
        yesterday: "Yesterday",
      };
    }

    const validateDate = this.validateDate(date);
    if (isYesterday(validateDate)) {
      return localeWeekdays.yesterday;
    }
    if (isToday(validateDate)) {
      return localeWeekdays.today;
    }
    if (isTomorrow(validateDate)) {
      return localeWeekdays.tomorrow;
    }

    return this.getWeekday(date);
  }

  public getISO(date: DateNum) {
    return formatISO(this.validateDate(date));
  }

  public getShortDate(date: DateNum) {
    return intlFormat(
      this.validateDate(date),
      { day: "2-digit", month: "short" },
      { locale: this.locale }
    );
  }

  public getHourMin(date: DateNum) {
    return intlFormat(
      this.validateDate(date),
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: this.timezone,
      },
      { locale: this.locale }
    );
  }

  public getDayDuration(date1: DateNum, date2: DateNum) {
    return intervalToDuration({
      start: this.validateDate(date1),
      end: this.validateDate(date2),
    });
  }

  public getLongDate(date: Date | number) {
    return intlFormat(
      this.validateDate(date),
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: this.timezone,
      },
      { locale: this.locale }
    );
  }
}
