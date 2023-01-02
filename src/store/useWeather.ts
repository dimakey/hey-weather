import create from "zustand";
import { devtools } from "zustand/middleware";
import { cityAPI } from "../api/city";
import { weatherAPI } from "../api/weather";
import { StoreWeatherData } from "../types/types";

type WeatherRequestPayload = {
  cityName: string | null;
  lat: number;
  lon: number;
};

type WeatherState = {
  data?: StoreWeatherData;
  status: "idle" | "loading" | "success" | "error";
  error: string | {} | unknown;
  fetchWeather: (payload: WeatherRequestPayload) => void;
};

export const useWeather = create<WeatherState>()(
  devtools((set) => ({
    data: undefined,
    status: "idle",
    error: "",
    fetchWeather: async (payload) => {
      try {
        const { cityName, lat, lon } = payload;
        set({ status: "loading" });
        let weatherResponse;
        let geoResponse;
        let hasCityData;

        // checking correct city name
        if (cityName) {
          // city, country, lat, lon
          geoResponse = await cityAPI.fetchNameToGeo(cityName);
          hasCityData = geoResponse.data.results.length > 0;

          if (!hasCityData && !lat && !lon) {
            set({
              status: "error",
              error: "No data was provided(cityName, lat & lon)",
            });
          }

          if (!lat && !lon) {
            weatherResponse = await weatherAPI.fetchCityByCoords({
              lat: geoResponse.data.results[0].lat,
              lon: geoResponse.data.results[0].lon,
            });
          }
        }

        // Check lat & lon
        if (lat && lon) {
          weatherResponse = await weatherAPI.fetchCityByCoords({ lat, lon });

          if (!hasCityData) {
            geoResponse = await cityAPI.fetchGeoCoordsToCity({ lat, lon });
          }
        }

        const { city, country, address_line2 } = geoResponse?.data?.results[0];

        set({
          data: {
            ...weatherResponse?.data,
            city,
            country,
            formatted: address_line2,
          },
          status: "success",
        });
      } catch (e) {
        set({ status: "error", error: e });
      }
    },
  }))
);
