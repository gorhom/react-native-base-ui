import React from 'react';
import { ThemeContext } from '../../contexts';
import { DarkTheme } from '../../themes';
import type { ThemeProviderProps } from './types';

const ThemeProvider = ({ theme = DarkTheme, children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
