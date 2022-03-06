import { DefaultTheme } from 'styled-components';

const breakpoints = ['0', '576px', '768px', '992px', '1200px'];

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: '#FFE81F',
    text: '#fff',
    textLight: '#4f5969',
    heading: '#1a202c',
    headingBlack: '#000',
    accent: '#d1dce5',
    accent2: '#ecf0f1',
    mainBg: '#000',
    bg: '#232323',
  },
  fontSize: {
    sizeRoot: '16px',
    size0: '0.833rem',
    size1: '1rem',
    size2: '1.2rem',
    size3: '1.44rem',
    size4: '1.728rem',
    size5: '2.074rem',
    size6: '2.488rem',
    size7: '2.986rem',
  },
  space: {
    xs: '20px',
    sm: '36px',
    md: '64px',
    lg: '96px',
  },
  mediaQueries: {
    xs: `@media screen and (min-width: ${breakpoints[0]})`,
    sm: `@media screen and (min-width: ${breakpoints[1]})`,
    md: `@media screen and (min-width: ${breakpoints[2]})`,
    lg: `@media screen and (min-width: ${breakpoints[3]})`,
    xl: `@media screen and (min-width: ${breakpoints[4]})`,
    smMax: `@media screen and (max-width: ${breakpoints[1]})`,
  },
};
