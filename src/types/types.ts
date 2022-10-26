import { WeatherCurrent, WeatherDaily, WeatherHourly } from "./responses";

export interface GeoCoords {
  lat: number;
  lon: number;
}

/** SettingsModal [radix] radio group component */
export type RadioGroupItem = {
  value: string;
  label: string;
};

/** React-select types */
export type SelectOption = {
  readonly value: string;
  readonly label: string;
  readonly lat: number;
  readonly lon: number;
};

export type SelectSize = "large" | "small";

/** Openweather data fetch  */
export interface StoreWeatherData {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: WeatherCurrent;
  hourly: WeatherHourly[];
  daily: WeatherDaily[];
  city: string;
  country: string;
  formatted: string;
}
