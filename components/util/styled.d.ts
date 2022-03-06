import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      text: string;
      textLight: string;
      heading: string;
      headingBlack: string;
      accent: string;
      accent2: string;
      mainBg: string;
      bg: string;
    };
    fontSize: {
      sizeRoot: string;
      size0: string;
      size1: string;
      size2: string;
      size3: string;
      size4: string;
      size5: string;
      size6: string;
      size7: string;
    };
    space: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    mediaQueries: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      smMax: string;
    };
  }
}
