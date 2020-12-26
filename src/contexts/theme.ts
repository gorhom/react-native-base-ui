import { createContext } from 'react';
import { DarkTheme, Theme } from '../themes';

export const ThemeContext = createContext<Theme>(DarkTheme);
