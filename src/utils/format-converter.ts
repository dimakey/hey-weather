import {
  PressureMeasure,
  TempMeasure,
  WindMeasure,
} from "../store/useSettings";
import { Converter } from "./unit-converter";

const convert = new Converter();

/** Functions for converting between values */
export const formatWind = (
  speed: number,
  windMeasure: WindMeasure,
  baseWindMeasure: WindMeasure = "ms"
) => {
  return convert
    .from(speed, baseWindMeasure)
    .to(windMeasure)
    .format({ isRound: false, fractionDigits: 1 });
};

export const formatTemperature = (
  temp: number,
  tempMeasure: TempMeasure,
  baseTempMeasure: TempMeasure = "celsius"
) => {
  return convert
    .from(temp, baseTempMeasure)
    .to(tempMeasure)
    .format({ isPlus: true });
};

export const formatPressure = (
  pressure: number,
  pressureMeasure: PressureMeasure,
  basePressureMeasure: PressureMeasure = "hpa"
) => {
  return convert
    .from(pressure, basePressureMeasure)
    .to(pressureMeasure)
    .format();
};
