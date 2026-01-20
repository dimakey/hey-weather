import { addDays } from "date-fns";
import slugify from "slugify";
import { getSunrise, getSunset } from "sunrise-sunset-js";
import { ROUTES } from "../constants/routes";
import { GeoCoords, RadioGroupItem } from "../types/types";

/** Clamp between values (min, max) */
export const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

/** Convert city name to slugify variant */
export const slugCity = (city: string) => {
  return slugify(city || "", {
    lower: true,
    replacement: "-",
    remove: /[*+~.()'"!:@ь]/g
  });
};

/** Helper to find default radio value */
export const findDefaultRadioValue = (items: RadioGroupItem[], value: string) =>
  items.find((item) => item.value.includes(value))?.value;

/** Create navigation link based on GeoCoords & city name */
export const createNavLink = (coords: GeoCoords, cityName?: string) => {
  const { lat, lon } = coords;
  const sluggedCity = slugCity(cityName || "weather-by-coords");

  return `${ROUTES.city}?name=${sluggedCity}&lat=${lat}&lon=${lon}`;
};

/** Capitalize string */
export const capitalize = (str: string) => {
  const [first, ...rest] = str;
  return first.toUpperCase() + rest.join("").toLowerCase();
};

/** Convert temp number to rounded string (with the addition
 * of a plus sign at the beginning */
export const addPlusToTemp = (temp: number) => {
  if (temp > 0) {
    return `+${Math.round(temp)}`;
  }
  return Math.round(temp).toString();
};

/** toPercent */
const toPercent = (value: number, maxValue: number) =>
  Math.abs(Math.round((value * 100) / maxValue));

/**
 * Convert geoCoords to astro stats: isSunPhase, percent from dusk to dawn,
 * sunrise and sunset times
 * @param {Object} coords - Geo coordinates
 * @param {number} coords.lat - latitude
 * @param {number} coords.lon - longitude
 * @returns {Object} -
 */

export const timeToPercent = (coords: GeoCoords) => {
  let isSunPhase: boolean;

  const sunrise = Math.round(
    getSunrise(coords.lat, coords.lon).getTime() / 1000
  );

  const sunset = Math.round(getSunset(coords.lat, coords.lon).getTime() / 1000);
  const current = Math.round(new Date().getTime() / 1000);

  let currentValue: number;
  let maxValue: number;
  let nextDaySunrise: number;

  if (current > sunrise && current < sunset) {
    // Sun phase
    isSunPhase = true;

    maxValue = sunset - sunrise;
    currentValue = sunset - current;
  } else {
    isSunPhase = false;

    if (current > sunrise && current > sunset) {
      // Moon phase (this day)
      nextDaySunrise =
        getSunrise(coords.lat, coords.lon, addDays(new Date(), 1)).getTime() /
        1000;
    } else {
      // Moon phase (next day)
      nextDaySunrise =
        getSunrise(coords.lat, coords.lon, new Date()).getTime() / 1000;
    }
    maxValue = nextDaySunrise - sunset;
    currentValue = nextDaySunrise - current;
  }

  const percent = 100 - toPercent(currentValue, maxValue);
  return { percent, isSunPhase, sunrise, sunset, current };
};


export const calculatePrecipProbability = (dailyChanceOfRain: number, dailyChanceOfSnow: number): number => {
  if (!dailyChanceOfRain && !dailyChanceOfSnow) return 0;

  // For daily data, use daily_ fields; for hourly, use standard fields
  const rain = dailyChanceOfRain || dailyChanceOfRain || 0;
  const snow = dailyChanceOfSnow || dailyChanceOfSnow || 0;

  // Returns the higher value as the general "Precipitation Probability"
  return Math.max(rain, snow);
};