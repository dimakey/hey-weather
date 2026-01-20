import { WeatherDaily } from "./responses";

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

// Define the type that matches what useHourlyWeather actually returns
export interface FormattedHourly {
  dt: {
    timestamp: number;
    iso: string;
    time: string;
    dayPart: string;
  };
  weatherId: number;
  icon: string;
  isItDay: boolean;
  humidity: number;
  temp: string;
  description: string;
}

export interface StoreWeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_kph: number;
    wind_degree: number;
    pressure_mb: number;
    humidity: number;
    feelslike_c: number;
    vis_km: number;
  };
  forecast: {
    forecastday: WeatherDaily[]; // Ensure WeatherDaily is defined as shown in previous steps
  };
  // Optional legacy fields if you manually calculate them in your fetch logic
  city?: string;
  country?: string;
  formatted?: string;
  timezone?: string;
  timezone_offset?: number;
}