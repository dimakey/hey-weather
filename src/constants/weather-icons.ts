// Map the NEW codes to the OLD base icon numbers (without 'd' or 'n')
const weatherIconMap: { [key: number]: string } = {
  // Group 800: Clear
  1000: "01", // Sunny / Clear

  // Group 80x: Clouds
  1003: "02", // Partly cloudy
  1006: "03", // Cloudy
  1009: "04", // Overcast

  // Group 7xx: Atmosphere (Mist, Fog, etc.)
  1030: "50", // Mist
  1135: "50", // Fog
  1147: "50", // Freezing fog

  // Group 5xx: Rain (Standard Rain, Patchy Rain) -> Icon 10 usually has Sun+Rain
  1063: "10", // Patchy rain possible
  1180: "10", // Patchy light rain
  1183: "10", // Light rain
  1186: "10", // Moderate rain at times
  1189: "10", // Moderate rain
  1192: "10", // Heavy rain at times
  1195: "10", // Heavy rain
  1273: "11", // Patchy light rain with thunder (Group 2xx logic)
  1276: "11", // Moderate or heavy rain with thunder

  // Group 3xx: Drizzle & Showers -> Icon 09 usually just Cloud+Rain
  1150: "09", // Patchy light drizzle
  1153: "09", // Light drizzle
  1240: "09", // Light rain shower
  1243: "09", // Moderate or heavy rain shower
  1246: "09", // Torrential rain shower

  // Group 6xx: Snow & Ice
  1066: "13", // Patchy snow possible
  1069: "13", // Patchy sleet possible
  1072: "13", // Patchy freezing drizzle possible
  1114: "13", // Blowing snow
  1117: "13", // Blizzard
  1168: "13", // Freezing drizzle
  1171: "13", // Heavy freezing drizzle
  1198: "13", // Light freezing rain
  1201: "13", // Moderate or heavy freezing rain
  1204: "13", // Light sleet
  1207: "13", // Moderate or heavy sleet
  1210: "13", // Patchy light snow
  1213: "13", // Light snow
  1216: "13", // Patchy moderate snow
  1219: "13", // Moderate snow
  1222: "13", // Patchy heavy snow
  1225: "13", // Heavy snow
  1237: "13", // Ice pellets
  1249: "13", // Light sleet showers
  1252: "13", // Moderate or heavy sleet showers
  1255: "13", // Light snow showers
  1258: "13", // Moderate or heavy snow showers
  1261: "13", // Light showers of ice pellets
  1264: "13", // Moderate or heavy showers of ice pellets
  1279: "13", // Patchy light snow with thunder (Could be 11, but usually Snow preference)
  1282: "13", // Moderate or heavy snow with thunder

  // Group 2xx: Thunderstorm
  1087: "11" // Thundery outbreaks possible
};

/**
 * Translates the new numeric code into your old icon string (e.g., "01d", "11n").
 * @param code - The weather code (e.g., 1000)
 */
export const getWeatherIcon = (code: number): string => {
  const iconBase = weatherIconMap[code];
  if (!iconBase) return "03";
  return `${iconBase}`;
};