import dark01n from "../assets/icons/dark/01n.svg";
import dark01d from "../assets/icons/dark/01d.svg";
import dark02d from "../assets/icons/dark/02d.svg";
import dark02n from "../assets/icons/dark/02n.svg";
import dark03d from "../assets/icons/dark/03d.svg";
import dark03n from "../assets/icons/dark/03n.svg";
import dark04d from "../assets/icons/dark/04d.svg";
import dark04n from "../assets/icons/dark/04n.svg";
import dark09d from "../assets/icons/dark/09d.svg";
import dark09n from "../assets/icons/dark/09n.svg";
import dark10d from "../assets/icons/dark/10d.svg";
import dark10n from "../assets/icons/dark/10n.svg";
import dark11d from "../assets/icons/dark/11d.svg";
import dark11n from "../assets/icons/dark/11n.svg";
import dark13d from "../assets/icons/dark/13d.svg";
import dark13n from "../assets/icons/dark/13n.svg";
import dark50d from "../assets/icons/dark/50d.svg";
import dark50n from "../assets/icons/dark/50n.svg";
import light01n from "../assets/icons/light/01n.svg";
import light01d from "../assets/icons/light/01d.svg";
import light02d from "../assets/icons/light/02d.svg";
import light02n from "../assets/icons/light/02n.svg";
import light03d from "../assets/icons/light/03d.svg";
import light03n from "../assets/icons/light/03n.svg";
import light04d from "../assets/icons/light/04d.svg";
import light04n from "../assets/icons/light/04n.svg";
import light09d from "../assets/icons/light/09d.svg";
import light09n from "../assets/icons/light/09n.svg";
import light10d from "../assets/icons/light/10d.svg";
import light10n from "../assets/icons/light/10n.svg";
import light11d from "../assets/icons/light/11d.svg";
import light11n from "../assets/icons/light/11n.svg";
import light13d from "../assets/icons/light/13d.svg";
import light13n from "../assets/icons/light/13n.svg";
import light50d from "../assets/icons/light/50d.svg";
import light50n from "../assets/icons/light/50n.svg";
import humidity from "../assets/humidity.svg";
import humiditySm from "../assets/humidity-sm.svg";
import pressure from "../assets/pressure.svg";
import visibility from "../assets/visibility.svg";
import wind from "../assets/wind.svg";

type Icons = Record<string, Record<string, string>>;

/**
 * Custom condition openweather icons
 * [Openweather](https://openweathermap.org/weather-conditions)
 */

export const weatherIcons: Icons = {
  dark: {
    "01d": dark01d,
    "02d": dark02d,
    "03d": dark03d,
    "04d": dark04d,
    "09d": dark09d,
    "10d": dark10d,
    "11d": dark11d,
    "13d": dark13d,
    "50d": dark50d,
    "01n": dark01n,
    "02n": dark02n,
    "03n": dark03n,
    "04n": dark04n,
    "09n": dark09n,
    "10n": dark10n,
    "11n": dark11n,
    "13n": dark13n,
    "50n": dark50n,
  },
  light: {
    "01d": light01d,
    "02d": light02d,
    "03d": light03d,
    "04d": light04d,
    "09d": light09d,
    "10d": light10d,
    "11d": light11d,
    "13d": light13d,
    "50d": light50d,
    "01n": light01n,
    "02n": light02n,
    "03n": light03n,
    "04n": light04n,
    "09n": light09n,
    "10n": light10n,
    "11n": light11n,
    "13n": light13n,
    "50n": light50n,
  },
};

export const statsIcons = {
  visibility,
  pressure,
  wind,
  humidity,
  humiditySm,
};
