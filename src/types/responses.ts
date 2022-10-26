/** FetchIP */
export interface FetchAutoCompleteData {
  city: string;
  country: string;
  lat: number;
  lon: number;
  address_line2?: string;
}

/** Openweather oneCall response type */
export interface TempData {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface FeelsLikeData {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface WeatherInfoData {
  id: number;
  main: string;
  description: string;
  icon: number;
}

export interface WeatherData {
  dt: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: WeatherInfoData[];
}

export interface WeatherCurrent extends WeatherData {
  temp: number;
  feels_like: number;
  sunrise: number;
  sunset: number;
  uvi: number;
  clouds: number;
  visibility: number;
  weather: WeatherInfoData[];
}

export interface WeatherHourly extends WeatherData, WeatherCurrent {
  pop: number;
}

export interface WeatherDaily extends WeatherData {
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  temp: TempData;
  feels_like: FeelsLikeData;
  pop: number;
  rain: number;
  uvi: number;
}
