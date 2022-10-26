import { createAsyncThunk } from "@reduxjs/toolkit";
import { cityAPI } from "../../api/city";
import { weatherAPI } from "../../api/weather";

/**
 * Get lat, lon information to fetch weather data & city geoData
 * (cityName, formattedCityName)
 *
 */

type PayloadType = {
  cityName: string | null;
  lat: number;
  lon: number;
};

export const fetchWeatherByGeo = createAsyncThunk(
  "weather/fetchByGeo",
  async ({ cityName, lat, lon }: PayloadType, { rejectWithValue }) => {
    try {
      let weatherResponse;
      let geoResponse;
      let hasCityData;

      // checking correct city name
      if (cityName) {
        // city, country, lat, lon
        geoResponse = await cityAPI.fetchNameToGeo(cityName);
        hasCityData = geoResponse.data.results.length > 0;

        if (!hasCityData && !lat && !lon) {
          return rejectWithValue("No data was provided(cityName, lat & lon)");
        }

        if (!lat && !lon) {
          weatherResponse = await weatherAPI.fetchCityByCoords({
            lat: geoResponse.data.results[0].lat,
            lon: geoResponse.data.results[0].lon,
          });
        }
      }

      // check lat & lon
      if (lat && lon) {
        weatherResponse = await weatherAPI.fetchCityByCoords({ lat, lon });

        if (!hasCityData) {
          geoResponse = await cityAPI.fetchGeoCoordsToCity({ lat, lon });
        }
      }

      const { city, country, address_line2 } = geoResponse?.data?.results[0];

      return {
        ...weatherResponse?.data,
        city,
        country,
        formatted: address_line2,
      };
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
