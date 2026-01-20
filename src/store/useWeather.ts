import create from "zustand";
import { devtools } from "zustand/middleware";
import { cityAPI } from "../api/city";
import { weatherAPI } from "../api/weather";
import { StoreWeatherData } from "../types/types";

type FetchWeatherPayload = {
  cityName?: string | null;
  lat?: number;
  lon?: number;
};

type WeatherState = {
  data?: StoreWeatherData;
  status: "idle" | "loading" | "success" | "error";
  error: string | object | unknown;
};

type WeatherActions = {
  fetchWeather: (payload: FetchWeatherPayload) => void;
};

export const useWeather = create<WeatherState & WeatherActions>()(
  devtools((set) => ({
    data: undefined,
    status: "idle",
    error: null, // Initialize as null
    fetchWeather: async ({ cityName, lat, lon }) => {
      set({ status: "loading", error: null });

      try {
        let finalLat = lat;
        let finalLon = lon;
        let locationData = null;

        // --- PHASE 1: Resolve Coordinates & Location Info ---
        // If a City Name is provided, we must resolve it to Lat/Lon first
        if (cityName) {
          const geoResponse = await cityAPI.fetchNameToGeo(cityName);
          const results = geoResponse?.data?.results;

          if (!results || results.length === 0) {
            set({
              status: "error",
              error: `City "${cityName}" not found.`
            });
            return; // 🛑 CRITICAL: Stop execution here
          }

          // Use the coordinates from the API
          finalLat = results[0].lat;
          finalLon = results[0].lon;
          locationData = results[0];
        }

        // --- PHASE 2: Validation ---

        // Ensure we actually have coordinates before calling the Weather API
        if (finalLat === undefined || finalLon === undefined) {
          set({
            status: "error",
            error: "Unable to determine location coordinates."
          });
          return;
        }

        // --- PHASE 3: Fetch Data ---

        // Prepare promises. If we didn't get locationData from Phase 1 (because we started with GPS),
        // we need to Reverse Geocode now.
        const weatherPromise = weatherAPI.fetchCityByCoords({
          lat: finalLat,
          lon: finalLon
        });

        const locationPromise = !locationData
          ? cityAPI.fetchGeoCoordsToCity({ lat: finalLat, lon: finalLon })
          : Promise.resolve(null); // No need to fetch if we already have it

        // Run fetches in parallel for speed
        const [weatherResponse, reverseGeoResponse] = await Promise.all([
          weatherPromise,
          locationPromise
        ]);

        // If we needed reverse geocoding, update locationData now
        if (reverseGeoResponse) {
          const results = reverseGeoResponse.data?.results;
          if (results && results.length > 0) {
            locationData = results[0];
          }
        }

        set({
          status: "success",
          data: {
            ...weatherResponse.data,
            // current: {},
            city: locationData?.city ?? locationData?.state ?? "Unknown City",
            country: locationData?.country ?? "Unknown Country",
            formatted: locationData?.address_line2 ?? locationData?.formatted ?? ""
          }
        });

      } catch (e: any) {
        console.error("Weather Store Error:", e);
        set({
          status: "error",
          error: e.message || "An unexpected error occurred"
        });
      }
    }
  }))
);