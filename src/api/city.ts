import axios from "axios";
import { GeoCoords } from "../types/types";

axios.defaults.timeout = 5000;

const axiosGeoApi = axios.create({
  baseURL: "https://api.geoapify.com/v1/geocode",
  params: {
    apiKey: import.meta.env.VITE_GEOAPIFY_API,
    format: "json",
    limit: 5,
  },
});

export const cityAPI = {
  fetchCitySuggestions: (citySuggestion: string) => {
    return axiosGeoApi.get("/autocomplete", {
      params: { type: "city", text: citySuggestion },
    });
  },

  fetchNameToGeo: (cityName: string) => {
    return axiosGeoApi.get("/search", {
      params: {
        type: "city",
        text: cityName,
      },
    });
  },

  fetchGeoCoordsToCity: ({ lat, lon }: GeoCoords) => {
    return axiosGeoApi.get("/reverse", {
      params: {
        lat,
        lon,
        type: "city",
        // limit: 1,
      },
    });
  },
};
