import { useAppSelector } from "../redux/store";

export const useSettings = () => {
  return {
    language: useAppSelector((state) => state.settings.language),
    windMeasure: useAppSelector((state) => state.settings.windMeasure),
    tempMeasure: useAppSelector((state) => state.settings.tempMeasure),
    pressureMeasure: useAppSelector((state) => state.settings.pressureMeasure),
  };
};
