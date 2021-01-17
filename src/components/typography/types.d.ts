import type { TextStyle } from 'react-native';
import type { BaseUIComponent } from '../../types';
import type { TYPOGRAPHY_COLOR, TYPOGRAPHY_FONT } from './constants';

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
  color?: TYPOGRAPHY_COLOR;
  /**
   * Defines the font of the typography.
   */
  font?: TYPOGRAPHY_FONT;
}
