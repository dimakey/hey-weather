import axios from "axios";
import { GeoCoords } from "../types/types";

const axiosWeatherApi = axios.create({
  baseURL: "http://api.weatherapi.com/v1/forecast.json",
  params: {
    key: import.meta.env.VITE_WEATHERS_API,
    days: "7",
    aqi: "no",
    alerts: "no"
  }
});

export const weatherAPI = {
  fetchCityByCoords: ({ lat, lon }: GeoCoords) => {
    const q = `${lat},${lon}`;

    return axiosWeatherApi.get("", {
      params: {
        q
      }
    });
  }
};