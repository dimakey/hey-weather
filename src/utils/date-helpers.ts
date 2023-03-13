export const dayPartIntervals = {
  morning: {
    from: 6,
    to: 11,
  },
  day: {
    from: 12,
    to: 17,
  },
  evening: {
    from: 18,
    to: 23,
  },
  night: {
    from: 0,
    to: 5,
  },
};

export const isNumInInterval = (num: number, fromNum: number, toNum: number) =>
  num >= fromNum && num <= toNum;
