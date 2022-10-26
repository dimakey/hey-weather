import { addPlusToTemp } from "./helpers";

type Unit = string;

interface FormatOptions {
  isRound?: boolean;
  fractionDigits?: number;
  isPlus?: boolean;
}

/** Implementing conversion functions */
/**: Todo: typify this */
class Base {
  private _functions: any = {
    // Temperature
    celsius: {
      format: "°",
      fahrenheit: {
        fn: (C: number) => (C * 9) / 5 + 32,
        format: "°",
      },
    },
    fahrenheit: {
      format: "°",
      celsius: {
        fn: (F: number) => ((F - 32) * 5) / 9,
        format: "°",
      },
    },
    // Wind speed
    kph: {
      format: " kph",
      mph: {
        fn: (kph: number) => kph / 0.621371,
        format: " mph",
      },
      ms: {
        fn: (kph: number) => kph / 0.27777,
        format: " m/s",
      },
    },
    mph: {
      format: " mph",
      kph: {
        fn: (mph: number) => mph * 0.621371,
        format: " kph",
      },
      ms: {
        fn: (mph: number) => mph * 0.44704,
        format: " m/s",
      },
    },
    ms: {
      format: " m/s",
      kph: {
        fn: (ms: number) => ms * 3.6,
        format: " kph",
      },
      mph: {
        fn: (ms: number) => ms * 2.237,
        format: " mph",
      },
    },
    // Pressure
    hpa: {
      format: " hPa",
      mmhg: {
        fn: (hpa: number) => hpa * 0.75,
        format: " mmHg",
      },
    },
    mmhg: {
      format: " mmHg",
      hpa: {
        fn: (mmhg: number) => mmhg * 1.33,
        format: " hPa",
      },
    },
  };

  protected getFormat(fromUnit: Unit, toUnit: Unit) {
    fromUnit = fromUnit.toLowerCase();
    toUnit = toUnit.toLowerCase();

    if (!this._functions[fromUnit]) {
      throw new Error(
        `Cannot convert, cause ${fromUnit} or ${toUnit} function doesnt exist`
      );
    }
    if (fromUnit === toUnit) {
      return this._functions[fromUnit].format;
    }

    return this._functions[fromUnit][toUnit].format;
  }

  protected getFunction(fromUnit: Unit, toUnit: Unit) {
    fromUnit = fromUnit.toLowerCase();
    toUnit = toUnit.toLowerCase();

    if (!this._functions[fromUnit] || !this._functions[fromUnit][toUnit]) {
      throw new Error("Cannot convert, cause this function doesnt exist");
    }

    return this._functions[fromUnit][toUnit].fn;
  }
}

/**
 * Converting
 */

export class Converter extends Base {
  private _value: number = 0;
  private _computedValue: number = 0;
  private _formatTemplate: string = "";
  private _fromUnit: Unit = "celsius";
  private _toUnit: Unit = "";

  public from(value: number, fromUnit: Unit) {
    this._value = value;
    this._fromUnit = fromUnit;
    return this;
  }

  public to(toUnit: Unit) {
    this._formatTemplate = "celsius";
    this._toUnit = toUnit;

    if (this._fromUnit === toUnit) {
      this._computedValue = this._value;
    } else {
      const transformFn = this.getFunction(this._fromUnit, toUnit);
      this._computedValue = transformFn(this._value);
    }

    return this;
  }

  /**
   * Formatted string from convert functions return
   * @param {Object} options
   * @param {boolean} [options.isRound = true] - round the number
   * @param {number} [options.fractionDigits = 1] - rounding to specific count of numbers
   * @param {number} [options.isPlus =  false] - For temp conversion, add a plus sign (+27°)
   * @returns {string} - formatted string
   *
   */

  public format(
    options: FormatOptions = { isRound: true, fractionDigits: 1, isPlus: false }
  ) {
    // Get format string for a particular convert formula
    const formatStr = this.getFormat(this._fromUnit, this._toUnit);

    let resultValue: number | string = Number(
      this._computedValue.toFixed(options.fractionDigits)
    );

    if (options.isRound) {
      resultValue = Math.round(resultValue);
    }

    if (options.isPlus) {
      resultValue = addPlusToTemp(resultValue);
    }

    return `${resultValue}${formatStr}`;
  }
}
