import "styled-coomponets";

declare module "styled-components" {
  export interface DefaultTheme {
    type: string;
    colors: {
      primary: string;
      accent: string;
      accentHover: string;
      focus: string;
      bg: string;
      notifyPopupBg: string;
      surface: string;
      surfaceSecondary: string;
      surfaceTertiary: string;
      searchBg: string;
      searchBgFocus: string;
      body900: string;
      body700: string;
      body500: string;
      body300: string;
      body100: string;
      body50: string;
      danger: string;
      buttonPrimaryText: string;
      buttonPrimaryBg: string;
      buttonPrimaryBgHover: string;
      buttonSecondaryText: string;
      buttonSecondaryBg: string;
      buttonSecondaryBgHover: string;
    };
  }
}
