export const darkTheme = {
  type: "dark",
  colors: {
    body900: "hsl(240, 33%, 98%)",
    body700: "hsla(240, 33%, 98%, 70%)",
    body500: "hsla(240, 33%, 98%, 50%)",
    body300: "hsla(240, 33%, 98%, 30%)",
    body100: "hsla(240, 33%, 98%, 10%)",
    body50: "hsla(360, 100%, 100%, 5%)",
    primary: "hsl(241, 32%, 68%)",
    accent: "hsl(36, 100%, 63%)",
    accentHover: "hsl(36, 100%, 45%)",
    focus: "hsla(192, 94%, 44%, 75%)",
    bg: "hsl(241, 32%, 27%)",
    notifyPopupBg: "hsl(241, 32%, 40%)", // notify popup
    surface: "hsla(360, 100%, 100%, 3%)",
    surfaceSecondary: "hsla(360, 100%, 100%, 5%)",
    surfaceTertiary: "hsla(360, 100%, 100%, 10%)",
    danger: "hsl(1, 78%, 69%)",
    searchBg: "hsl(240, 32%, 22%)",
    searchBgFocus: "hsl(240, 32%, 16%)",
    buttonPrimaryText: "hsl(240, 31%, 13%)",
    buttonPrimaryBg: "hsl(36, 100%, 63%)",
    buttonPrimaryBgHover: "hsla(36, 100%, 70%)",
    buttonSecondaryText: "hsl(240, 33%, 98%)",
    buttonSecondaryBg: "hsla(360, 100%, 100%, 5%)",
    buttonSecondaryBgHover: "hsla(360, 100%, 100%, 10%)"
  }
};

export const lightTheme = {
  ...darkTheme,
  type: "light",
  colors: {
    ...darkTheme.colors,
    body900: "hsl(240, 31%, 13%)",
    body700: "hsla(240, 31%, 13%, 70%)",
    body500: "hsla(240, 31%, 13%, 50%)",
    body300: "hsla(240, 31%, 13%, 30%)",
    body100: "hsla(240, 31%, 13%, 15%)",
    body50: "hsla(240, 31%, 13%, 5%)",
    bg: "hsl(240, 32%, 93%)",
    notifyPopupBg: "hsl(0, 0%, 100%)",
    surface: "hsla(0, 0%, 100%, 30%)",
    surfaceSecondary: "hsla(0, 0%, 100%, 40%)",
    surfaceTertiary: "hsla(0, 0%, 100%, 50%)",
    searchBg: "hsl(240, 31%, 87%)",
    searchBgFocus: "hsl(0, 0%, 100%)",
    buttonSecondaryText: "hsl(240, 31%, 13%)",
    buttonSecondaryBg: "hsl(240, 31%, 87%)",
    buttonSecondaryBgHover: "hsl(242, 33%, 83%)"
  }
};
