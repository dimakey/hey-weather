interface IndexType {
  [key: string]: { [key: string]: string };
}

export const windDescription: IndexType = {
  ru: {
    201: "Безветренно",
    202: "Почти безветренно",
    203: "Лёгкий ветер",
    204: "Слабый ветер",
    205: "Умеренный ветер",
    206: "Свежий ветер",
    207: "Сильный ветер",
    208: "Очень сильный ветер",
    209: "Буря",
    210: "Сильная буря",
    211: "Сильный шторм",
  },
  en: {
    201: "Calm",
    202: "Light air",
    203: "Light breeze",
    204: "Gentle breeze",
    205: "Moderate breeze",
    206: "Fresh breeze",
    207: "Strong breeze",
    208: "High wind",
    209: "Gale",
    210: "Strong/severe gale",
    211: "Storm",
  },
};

export const weatherCondition: IndexType = {
  ru: {
    200: "Гроза со слабым дождем",
    201: "Гроза с дождем ",
    202: "Гроза с сильным дождем ",
    210: "Лёгкая гроза ",
    211: "Гроза",
    221: "Сильная гроза ",
    230: "Рваная гроза ",
    231: "Гроза с легким моросящим дождем ",
    232: "Гроза с моросью ",
    300: "Легкая морось",
    301: "Морось",
    302: "Сильная морось",
    310: "Легкий моросящий дождь",
    311: "Моросящий дождь",
    312: "Сильный моросящий дождь",
    313: "Дождь с ливнем и моросью",
    314: "Сильный дождь и морось",
    321: "Моросящий дождь",
    500: "Небольшой дождь",
    501: "Умеренный дождь",
    502: "Дождь сильной интенсивности",
    503: "Очень сильный дождь",
    504: "Экстремальный дождь",
    511: "Холодный дождь",
    520: "Слабый ливневый дождь",
    521: "Ливневый дождь",
    522: "Сильный ливневый дождь",
    531: "Неровный ливневый дождь",
    600: "Небольшой снег",
    601: "Снег",
    602: "Сильный снегопад",
    611: "Мокрый снег",
    612: "Легкий дождь со снегом",
    613: "Мокрый дождь",
    615: "Небольшой дождь со снегом",
    616: "Дождь со снегом",
    620: "Слабый ливневый снег",
    621: "Снежный душ",
    622: "Сильный ливневый снег",
    701: "Туман",
    711: "Дым",
    721: "Дымка",
    731: "Вихри песка/пыли",
    741: "Туман",
    751: "Песок",
    761: "Пыль",
    762: "Вулканический пепел",
    771: "Шквалы",
    781: "Торнадо",
    800: "Ясно",
    801: "Малооблачно",
    802: "Облачно с прояснениями",
    803: "Облачно",
    804: "Пасмурно",
  },
  en: {
    200: "Thunderstorm with light rain",
    201: "Thunderstorm with rain",
    202: "Thunderstorm with heavy rain ",
    210: "Light thunderstorm",
    211: "Thunderstorm",
    221: "Ragged thunderstorm",
    230: "Thunderstorm with light drizzle",
    231: "Thunderstorm with drizzle",
    232: "Thunderstorm with heavy drizzle",
    300: "Light intensity drizzle",
    301: "Drizzle",
    302: "Heavy intensity drizzle",
    310: "Light intensity drizzle rain",
    311: "Drizzle rain",
    312: "Heavy intensity drizzle rain",
    313: "Shower rain and drizzle",
    314: "Heavy shower rain and drizzle",
    321: "Shower drizzle",
    500: "Light rain",
    501: "Moderate rain",
    502: "Heavy intensity rain",
    503: "Very heavy rain",
    504: "Extreme rain",
    511: "Freezing rain",
    520: "Light intensity shower rain",
    521: "Shower rain",
    522: "Heavy intensity shower rain",
    531: "Ragged shower rain",
    600: "Light snow",
    601: "Snow",
    602: "Heavy snow",
    611: "Sleet",
    612: "Light shower sleet",
    613: "Shower sleet",
    615: "Light rain and snow",
    616: "Rain and snow",
    620: "Light shower snow",
    621: "Shower snow",
    622: "Heavy shower snow",
    701: "Mist",
    711: "Smoke",
    721: "Haze",
    731: "Sand/ dust whirls",
    741: "Fog",
    751: "Sand",
    761: "Dust",
    762: "Volcanic ash",
    771: "Squalls",
    781: "Tornado",
    800: "Clear sky",
    801: "Few clouds",
    802: "Scattered clouds",
    803: "Broken clouds",
    804: "Overcast clouds",
  },
};
