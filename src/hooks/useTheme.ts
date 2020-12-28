import { useContext } from 'react';
import { ThemeContext } from '../contexts';

export const useTheme = () => useContext(ThemeContext);
