import { createSlice } from "@reduxjs/toolkit";

export type Language = "en" | "ru" | string;
export type WindMeasure = "kph" | "mph" | "ms" | string;
export type TempMeasure = "celsius" | "fahrenheit" | string;
export type PressureMeasure = "hpa" | "mmhg" | string;

// export type Generic<T> = T extends string;

export type SettingsState = {
  language: Language;
  windMeasure: WindMeasure;
  tempMeasure: TempMeasure;
  pressureMeasure: PressureMeasure;
};

export const SETTINGS_SLICE_NAME = "settings";

// TODO: [future] favoriteCities logic
const initialState: SettingsState = {
  language: "en",
  tempMeasure: "celsius",
  windMeasure: "ms",
  pressureMeasure: "hpa",
};

const settingsSlice = createSlice({
  name: SETTINGS_SLICE_NAME,
  initialState,
  reducers: {
    setSettings: (state, action) => {
      const { windMeasure, tempMeasure, pressureMeasure, language } =
        action.payload;
      state.language = language;
      state.tempMeasure = tempMeasure;
      state.windMeasure = windMeasure;
      state.pressureMeasure = pressureMeasure;
    },
  },
});

export const { setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
