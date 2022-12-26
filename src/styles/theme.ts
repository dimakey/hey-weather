export const darkTheme = {
  type: "dark",
  colors: {
    primary: "#9392c7",
    secondary: "#ffb341", // ?
    accent: "#ffb341",
    accentHover: "#e68a00",
    focus: "hsla(192, 94%, 44%, 75%)",
    bg: "#302f5b",
    bg300: "#4a4385",
    surface: "hsla(360, 100%, 100%, 3%)",
    surfaceSecondary: "hsla(360, 100%, 100%, 5%)",
    white: "hsl(240, 33%, 98%)",
    black: "hsl(240, 31%, 13%)",
    body900: "hsl(240, 33%, 98%)",
    body700: "hsla(240, 33%, 98%, 70%)",
    body500: "hsla(240, 33%, 98%, 50%)",
    body300: "hsla(240, 33%, 98%, 30%)",
    body100: "hsla(240, 33%, 98%, 10%)",
    body50: "hsla(360, 100%, 100%, 5%)",
    danger: "hsl(1, 78%, 69%)",
    searchBg: "#262649",
    searchBgFocus: "#1d1c37",
    buttonPrimaryText: "hsl(240, 31%, 13%)",
    buttonPrimaryBg: "#ffb341", // accent
    buttonPrimaryBgHover: "#e68a00", // surfaceSecondary
    buttonSecondaryText: "hsl(240, 33%, 98%)",
    buttonSecondaryBg: "hsla(360, 100%, 100%, 5%)",
    buttonSecondaryBgHover: "hsla(360, 100%, 100%, 10%)",
  },
};

export const lightTheme = {
  ...darkTheme,
  type: "light",
  colors: {
    ...darkTheme.colors,
    bg: "hsl(240, 32%, 93%)",
    body900: "hsl(240, 31%, 13%)",
    body700: "hsla(240, 31%, 13%, 70%)",
    body500: "hsla(240, 31%, 13%, 50%)",
    body300: "hsla(240, 31%, 13%, 30%)",
    body100: "hsla(240, 31%, 13%, 15%)",
    body50: "hsla(240, 31%, 13%, 5%)",
    surface: "hsla(360, 100%, 100%, 33%)",
    surfaceSecondary: "hsla(240, 31%, 87%, 35%)",
    searchBg: "#d5d5e9",
    searchBgFocus: "#fff",
    // buttonPrimaryText: "red",
    // buttonPrimaryBg: "green",
    buttonSecondaryText: "hsl(240, 31%, 13%)", //body900
    buttonSecondaryBg: "#d5d5e9", //searchBg
    buttonSecondaryBgHover: "#c5c4e1", //iou
  },
};
