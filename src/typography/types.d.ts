import type { TextProps, TextStyle } from 'react-native';
import type { BaseUIComponent } from '../types';
import type { COLOR, FONT } from './constants';

export interface TypographyOverrides {
  [key: string]: Override<any>;
  container?: Override<TypographyProps>;
}

export interface TypographyProps
  extends BaseUIComponent<TypographyOverrides, TextStyle> {
  /**
   * Defines the color of the typography.
   * @default contentPrimary
   */
  color?: string | COLOR;
  /**
   * Defines the font of the typography.
   */
  font?: string | FONT;
}
