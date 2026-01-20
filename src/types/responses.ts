export interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

export interface WeatherHourly {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCondition;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  vis_km: number;
}

export interface WeatherDay {
  maxtemp_c: number;
  mintemp_c: number;
  avgtemp_c: number;
  maxwind_mph: number;
  totalprecip_mm: number;
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  condition: WeatherCondition;
}

export interface WeatherDaily {
  date: string;
  date_epoch: number;
  day: WeatherDay;
  astro: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
  };
  hour: WeatherHourly[];
}

export interface FetchAutoCompleteData {
  city: string;
  country: string;
  lat: number;
  lon: number;
  address_line2?: string;
  rank?: {
    importance: number;
  };
}
