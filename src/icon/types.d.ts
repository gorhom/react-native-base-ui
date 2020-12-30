import type { TextProps } from 'react-native';
import type { Override } from '../types';
import type { ICON_SETS } from './constants';

export type NAME = keyof typeof ICON_SETS;

export interface IconOverrides {
  [key: string]: Override<any>;
  container?: Override<TextProps>;
}

export interface IconProps {
  /**
   * Defines the icon overrides.
   * @default undefined
   */
  overrides?: IconOverrides;

  /**
   * Defines the icon name.
   */
  name: NAME;

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
