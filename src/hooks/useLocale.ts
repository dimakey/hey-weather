import {
  weatherCondition,
  windDescription,
} from "../constants/weather-condition";
import { useSettings } from "../store/useSettings";

export const LOCALES = {
  en: "en-US",
  ru: "ru-RU",
};

export const localeData = {
  en: {
    pages: {
      start: {
        title1: "Check out",
        title2: "the weather",
        subtitle: "Choose a city in input below, and find your city weather ",
      },
      preloader: {
        title: "Fetching city",
        subtitle: "Please wait a little",
      },
      error404: {
        title1: "We're sorry!",
        title2: "Page not found",
        subtitle: "Sadly this page you requested was not found!",
        backButtonTitle: "Back to home",
      },
      modal: {
        settings: "Settings",
        language: {
          title: "Language",
          subtitle: "Interface language",
        },
        theme: {
          title: "Color theme",
          subtitle: "Dark / Light",
        },
        temperature: {
          title: "Temperature",
          subtitle: "Air temperature",
        },
        windSpeed: {
          title: "Wind",
          subtitle: "Wind flow speed",
        },
        pressure: {
          title: "Pressure",
          subtitle: "Atmospheric pressure",
        },
        save: "Save settings",
        cancel: "Cancel",
      },
      footer: {
        thanks: "Thanks to ",
      },
    },
    widget: {
      duringDay: "During day",
      forecast: "Forecast",
      daylightHours: "Daylight hours",
    },
    notify: {
      cityMessage: "Are you in",
      buttonMessage: "Check the weather!",
    },
    weather: {
      feels: "Feels like",
      humidity: "Humidity",
      wind: "Wind",
      pressure: "Pressure",
      visibility: "Visibility",
      sunset: "Sunset",
      sunrise: "Sunrise",
      pop: "Precipitation probability",
      noPop: "No precipitation",
    },
    units: {
      km: "km",
      ms: "m/s",
      mb: "mb",
      h: "h",
      m: "m",
      celsius: "°",
      fahrenheit: "°F",
    },
    weekdays: {
      yesterday: "Yesterday",
      today: "Today",
      tomorrow: "Tomorrow",
    },
    dayParts: {
      morning: "Morning",
      day: "Afternoon",
      evening: "Evening",
      night: "Night",
    },
    search: {
      placeholder: "City or place",
      noOptionMessage: "There's nothing here",
    },
    windDescription: windDescription.en,
    weatherCondition: weatherCondition.en,
    other: {
      now: "Now",
      short: "Short",
    },
  },
  ru: {
    pages: {
      start: {
        title1: "Прогноз погоды",
        title2: "в любом городе",
        subtitle:
          "Введите названия города или места, и получите прогноз погоды!",
      },
      preloader: {
        title: "Идёт загрузка данных",
        subtitle: "Пожалуйста подождите немного",
      },
      error404: {
        title1: "",
        title2: "Страница не найдена",
        subtitle: "К сожалению, страница которую вы запросили не была найдена",
        backButtonTitle: "Вернуться на главную",
      },
      modal: {
        settings: "Настройки",
        language: {
          title: "Язык",
          subtitle: "Язык интерфейса",
        },
        theme: {
          title: "Тёмная тема",
          subtitle: "Светлая / тёмная тема",
        },
        temperature: {
          title: "Температура",
          subtitle: "Температура воздуха",
        },
        windSpeed: {
          title: "Ветер",
          subtitle: "Скорость ветра",
        },
        pressure: {
          title: "Давление",
          subtitle: "Атмосферное давление",
        },
        save: "Сохранить настройки",
        cancel: "Отменить",
      },
      footer: {
        thanks: "Спасибо ",
      },
    },
    widget: {
      duringDay: "В течении дня",
      forecast: "Прогноз на неделю",
      daylightHours: "Световой день",
    },
    notify: {
      cityMessage: "Ваш город",
      buttonMessage: "Узнать погоду!",
    },
    weather: {
      feels: "По ощущениям",
      humidity: "Влажность",
      wind: "Ветер",
      pressure: "Давление",
      visibility: "Видимость",
      sunset: "Закат",
      sunrise: "Восход",
      pop: "Вероятность осадков",
      noPop: "Без осадков",
    },

    units: {
      km: "км",
      ms: "м/c",
      mb: "мб",
      h: "ч",
      m: "м",
      celsius: "°",
      fahrenheit: "°F",
    },
    weekdays: {
      yesterday: "Вчера",
      today: "Сегодня",
      tomorrow: "Завтра",
    },
    dayParts: {
      morning: "Утром",
      day: "Днём",
      evening: "Вечером",
      night: "Ночью",
    },
    search: {
      placeholder: "Город или место",
      noOptionMessage: "К сожалению мы не смогли ничего найти!",
    },
    windDescription: windDescription.ru,
    weatherCondition: weatherCondition.ru,
    other: {
      now: "Сейчас",
      short: "Кратко",
    },
  },
};

/** Get locale from store settings */
export const useLocale = () => {
  const language = useSettings((state) => state.language);

  switch (language) {
    case "ru":
      return {
        locale: LOCALES.ru,
        data: localeData.ru,
      };
    case "en":
    default:
      return {
        locale: LOCALES.en,
        data: localeData.en,
      };
  }
};
