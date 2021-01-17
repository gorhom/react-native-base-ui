import type { TextProps, TextStyle } from 'react-native';
import type { BaseUIComponent, Override } from '../../types';
import type { ICON_SETS } from './constants';

export type ICON_NAME = keyof typeof ICON_SETS;

export interface IconOverrides {
  [key: string]: Override<any>;
  container?: Override<TextProps>;
}

export interface IconProps extends BaseUIComponent<IconOverrides, TextStyle> {
  /**
   * Defines the icon name.
   */
  name: ICON_NAME;

  /**
   * Defines the icon size.
   * @default 24
   */
  size?: number;

  /**
   * Defines the icon color.
   * @default {contentPrimary}
   */
  color?: string;
}
