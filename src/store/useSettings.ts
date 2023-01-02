import create from "zustand";
import { persist } from "zustand/middleware";

export type Language = "en" | "ru" | string;
export type WindMeasure = "kph" | "mph" | "ms" | string;
export type TempMeasure = "celsius" | "fahrenheit" | string;
export type PressureMeasure = "hpa" | "mmhg" | string;
export type ThemeMeasure = "dark" | "light" | string;

type SetSettingsPayload = {
  language: Language;
  windMeasure: WindMeasure;
  tempMeasure: TempMeasure;
  pressureMeasure: PressureMeasure;
  siteTheme: ThemeMeasure;
};

export type SettingsState = {
  language: Language;
  siteTheme: ThemeMeasure;
  windMeasure: WindMeasure;
  tempMeasure: TempMeasure;
  pressureMeasure: PressureMeasure;
  setSettings: (payload: SetSettingsPayload) => void;
};

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      language: "en",
      siteTheme: "dark",
      tempMeasure: "celsius",
      windMeasure: "ms",
      pressureMeasure: "hpa",
      setSettings: (payload: SetSettingsPayload) =>
        set(() => ({
          ...payload,
        })),
    }),
    { name: "settings-storage" }
  )
);
