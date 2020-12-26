import type { ReactNode } from 'react';
import type { Theme } from 'src/themes';

export interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode | ReactNode[];
}
