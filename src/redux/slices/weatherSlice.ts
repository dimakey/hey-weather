import { createSlice } from "@reduxjs/toolkit";
import { StoreWeatherData } from "../../types/types";
import { fetchWeatherByGeo } from "../actions/weatherAction";

export const WEATHER_SLICE_NAME = "weather";

export type WeatherState = {
  data?: StoreWeatherData;
  loading: "idle" | "pending" | "succeeded" | "failed";
};

const initialState: WeatherState = {
  data: undefined,
  loading: "idle",
};

const weatherSlice = createSlice({
  name: WEATHER_SLICE_NAME,
  initialState,
  reducers: {
    setLoading: (state, action) => {
      const { loading } = action.payload;
      state.loading = loading;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherByGeo.pending, (state) => {
      state.loading = "pending";
    });

    builder.addCase(fetchWeatherByGeo.rejected, (state) => {
      state.loading = "failed";
    });

    builder.addCase(fetchWeatherByGeo.fulfilled, (state, action) => {
      state.data = { ...action.payload };
      state.loading = "succeeded";
    });
  },
});

export const { setLoading } = weatherSlice.actions;

export default weatherSlice.reducer;
