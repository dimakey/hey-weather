/**
 *  Estimating wind speeds
 */

export const windSpeedToDescription = [
  {
    id: 201, // calm
    min: 0,
    max: 0.2,
  },
  {
    id: 202, // light air
    min: 0.3,
    max: 1.5,
  },
  {
    id: 203, // light breeze
    min: 1.6,
    max: 3.3,
  },
  {
    id: 204, // gentle breeze
    min: 3.4,
    max: 5.5,
  },
  {
    id: 205, //moderate breeze
    min: 5.5,
    max: 7.9,
  },
  {
    id: 206, // fresh breeze
    min: 8,
    max: 10.7,
  },
  {
    id: 207, //strong breeze
    min: 10.8,
    max: 13.8,
  },
  {
    id: 208, //high wind
    min: 13.9,
    max: 17.1,
  },
  {
    id: 209, //gale
    min: 17.2,
    max: 20.7,
  },
  {
    id: 210, // strong/severe gale
    min: 20.8,
    max: 24.4,
  },
  {
    id: 211, // storm
    min: 24.5,
    max: 28.4,
  },
];

/**
 * Convert min & max wind speed to description id
 * @param windSpeed (m/s)
 *
 */

export const getWindDescription = (windSpeed: number): number => {
  for (let element of windSpeedToDescription) {
    if (windSpeed >= element.min && windSpeed <= element.max) {
      return element.id;
    }
  }

  // if nothing found get default 201 (calm wind)
  return windSpeedToDescription[0].id;
};
