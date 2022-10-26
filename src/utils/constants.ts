import humidity from "../assets/humidity.svg";
import humiditySm from "../assets/humidity-sm.svg";
import i01d from "../assets/icons/01d.svg";
import i01n from "../assets/icons/01n.svg";
import i02d from "../assets/icons/02d.svg";
import i02n from "../assets/icons/02n.svg";
import i03d from "../assets/icons/03d.svg";
import i03n from "../assets/icons/03n.svg";
import i04d from "../assets/icons/04d.svg";
import i04n from "../assets/icons/04n.svg";
import i09d from "../assets/icons/09d.svg";
import i09n from "../assets/icons/09n.svg";
import i10d from "../assets/icons/10d.svg";
import i10n from "../assets/icons/10n.svg";
import i11d from "../assets/icons/11d.svg";
import i11n from "../assets/icons/11n.svg";
import i13d from "../assets/icons/13d.svg";
import i13n from "../assets/icons/13n.svg";
import i50d from "../assets/icons/50d.svg";
import i50n from "../assets/icons/50n.svg";
import pressure from "../assets/pressure.svg";
import visibility from "../assets/visibility.svg";
import wind from "../assets/wind.svg";

type Icons = Record<string, Record<string, string>>;

/**
 * Custom condition openweather icons
 * [Openweather](https://openweathermap.org/weather-conditions)
 */

const weatherIcons = {
  "01d": i01d,
  "02d": i02d,
  "03d": i03d,
  "04d": i04d,
  "09d": i09d,
  "10d": i10d,
  "11d": i11d,
  "13d": i13d,
  "50d": i50d,
  "01n": i01n,
  "02n": i02n,
  "03n": i03n,
  "04n": i04n,
  "09n": i09n,
  "10n": i10n,
  "11n": i11n,
  "13n": i13n,
  "50n": i50n,
};

export const icons: Icons = {
  stats: {
    visibility,
    pressure,
    wind,
    humidity,
    humiditySm,
  },
  weather: {
    ...weatherIcons,
  },
};
