import "styled-coomponets";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      accentHover: string;
      focus: string;
      bg: string;
      bg300: string;
      surface: string;
      surfaceSecondary: string;
      body900: string;
      body700: string;
      body500: string;
      white: string;
      white200: string;
      white300: string;
      black: string;
      black300: string;
      black500: string;
      danger: string;
    };
  }
}
