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
  parse,
  format
} from "date-fns";
import { dayPartIntervals, isNumInInterval } from "./date-helpers";
import { LOCALE_DEFAULT } from "./locales";

import { fromZonedTime, formatInTimeZone } from "date-fns-tz";

type DateNum = Date | number;

type LocaleWeekdays = {
  tomorrow: string;
  today: string;
  yesterday: string;
};

type LocaleDayParts = {
  morning: string;
  day: string;
  evening: string;
  night: string;
};


export class FormatDate {
  constructor(
    readonly timezone: string,
    readonly locale: string = LOCALE_DEFAULT
  ) {
  }

  protected validateDate(date: DateNum) {
    if (isDate(date)) {
      return date;
    }
    return fromUnixTime(+date);
  }

  public isWeekend(date: DateNum): boolean {
    return isWeekend(this.validateDate(date));
  }

  public getTimeAsEpoch(
    timeString: string,
    baseDate: DateNum = new Date()
  ): number | null {
    try {
      const validBaseDate = this.validateDate(baseDate);

      // 1. Get the date part in the target timezone (e.g., "2023-12-19")
      const datePart = formatInTimeZone(validBaseDate, this.timezone, "yyyy-MM-dd");

      // 2. Parse the input "05:15 PM" into a temporary Date object
      //    We use 'hh:mm a' to tell date-fns exactly how to read "05:15 PM"
      const parsedTime = parse(timeString, "hh:mm a", new Date());

      // 3. Check if parsing worked
      if (isNaN(parsedTime.getTime())) {
        console.error("Invalid time format. Expected format like '05:15 PM'");
        return null;
      }

      // 4. Convert that time to 24-hour format (e.g., "17:15")
      const timePart = format(parsedTime, "HH:mm:ss");

      // 5. Combine to create an ISO-like string: "2023-12-19 17:15:00"
      //    fromZonedTime handles this format perfectly.
      const fullDateTimeString = `${datePart} ${timePart}`;

      // 6. Convert to Zoned Time
      const dateObject = fromZonedTime(fullDateTimeString, this.timezone);

      return Math.floor(dateObject.getTime() / 1000);
    } catch (error) {
      console.error(`Failed to parse time string: "${timeString}"`, error);
      return null;
    }
  }

  public isItDay(
    date: DateNum = new Date(), // Defaults to 'now' if not provided
    dayStartHour: number = 6,   // Defaults to 6:00 AM
    dayEndHour: number = 18     // Defaults to 6:00 PM
  ): boolean {
    // 1. Get the numeric hour (0-23) in the class's Timezone
    const hour = +intlFormat(
      this.validateDate(date),
      {
        hour: "2-digit",
        hour12: false,
        timeZone: this.timezone
      },
      // Force en-US so we get standard digits for calculation
      { locale: "en-US" }
    );

    // 2. Return true if between start (inclusive) and end (exclusive)
    return hour >= dayStartHour && hour < dayEndHour;
  }

  public getWeekday(date: DateNum) {
    return intlFormat(
      this.validateDate(date),
      { weekday: "long", timeZone: this.timezone },
      { locale: this.locale }
    );
  }

  public getRelativeDayParts(
    date: DateNum,
    localeDayParts: LocaleDayParts,
    dayIntervals = dayPartIntervals
  ) {
    let hour = +intlFormat(
      this.validateDate(date),
      {
        hour: "2-digit",
        hour12: false,
        timeZone: this.timezone
      },
      { locale: this.locale }
    );

    if (
      isNumInInterval(
        hour,
        dayIntervals?.morning?.from,
        dayIntervals?.morning?.to
      )
    ) {
      return localeDayParts?.morning;
    }

    if (isNumInInterval(hour, dayIntervals?.day?.from, dayIntervals?.day?.to)) {
      return localeDayParts?.day;
    }

    if (
      isNumInInterval(
        hour,
        dayIntervals?.evening?.from,
        dayIntervals?.evening?.to
      )
    ) {
      return localeDayParts?.evening;
    }

    if (
      isNumInInterval(hour, dayIntervals?.night?.from, dayIntervals?.night?.to)
    ) {
      return localeDayParts?.night;
    }
  }

  public getRelativeWeekday(date: DateNum, localeWeekdays?: LocaleWeekdays) {
    if (!localeWeekdays) {
      localeWeekdays = {
        tomorrow: "Tomorrow",
        today: "Today",
        yesterday: "Yesterday"
      };
    }

    const validateDate = this.validateDate(date);

    if (isYesterday(validateDate)) {
      return localeWeekdays?.yesterday;
    }
    if (isToday(validateDate)) {
      return localeWeekdays?.today;
    }
    if (isTomorrow(validateDate)) {
      return localeWeekdays?.tomorrow;
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
        timeZone: this.timezone
      },
      { locale: this.locale }
    );
  }

  public getDayDuration(date1: DateNum, date2: DateNum) {
    return intervalToDuration({
      start: this.validateDate(date1),
      end: this.validateDate(date2)
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
        timeZone: this.timezone
      },
      { locale: this.locale }
    );
  }
}
