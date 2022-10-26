import axios from "axios";
import { GeoCoords } from "../types/types";

const axiosOpenWeather = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: import.meta.env.VITE_OPENWEATHER_API,
    units: "metric",
  },
});

export const weatherAPI = {
  fetchCityByCoords: ({ lat, lon }: GeoCoords) => {
    return axiosOpenWeather.get("onecall", {
      params: {
        lat,
        lon,
      },
    });
  },
};
