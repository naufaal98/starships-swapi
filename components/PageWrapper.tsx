import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './util/GlobalStyles';
import { defaultTheme } from './util/theme';

export const PageWrapper: React.FC = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
