import create from "zustand";
import { persist } from "zustand/middleware";

export type Language = "en" | "ru" | string;
export type WindMeasure = "kph" | "mph" | "ms" | string;
export type TempMeasure = "celsius" | "fahrenheit" | string;
export type PressureMeasure = "hpa" | "mmhg" | string;
export type ThemeMeasure = "dark" | "light" | string;
export type DuringDaySwitcherValues = "short" | "24h" | string;

type SetSettingsPayload = {
  language: Language;
  windMeasure: WindMeasure;
  tempMeasure: TempMeasure;
  pressureMeasure: PressureMeasure;
  siteTheme: ThemeMeasure;
};

type SetDuringDaySwitcherPayload = {
  duringDaySwitcher: DuringDaySwitcherValues;
};

type SettingsState = {
  language: Language;
  siteTheme: ThemeMeasure;
  windMeasure: WindMeasure;
  tempMeasure: TempMeasure;
  pressureMeasure: PressureMeasure;
  duringDaySwitcher: DuringDaySwitcherValues;
};

type SettingsActions = {
  setDuringDaySwitcher: (payload: SetDuringDaySwitcherPayload) => void;
  setSettings: (payload: SetSettingsPayload) => void;
};

const browserLanguage: Language = navigator?.language?.match(/[rR][uU]/)
  ? "ru"
  : "en";

export const useSettings = create<SettingsState & SettingsActions>()(
  persist(
    (set) => ({
      language: browserLanguage,
      siteTheme: "dark",
      tempMeasure: "celsius",
      windMeasure: "ms",
      pressureMeasure: "hpa",
      duringDaySwitcher: "24h",
      setDuringDaySwitcher: (payload) =>
        set(() => ({
          ...payload,
        })),
      setSettings: (payload) =>
        set(() => ({
          ...payload,
        })),
    }),
    { name: "settings-storage" }
  )
);
