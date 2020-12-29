import type { ViewProps } from 'react-native';
import type { Override } from '../types';
import type { TYPE } from './constants';

export interface IconOverrides {
  [key: string]: Override<any>;
  container?: Override<ViewProps>;
}

export interface IconProps {
  /**
   * Icon type.
   * @default TYPE.type1
   */
  type?: TYPE;

  /**
   * Defines the icon overrides.
   * @default undefined
   */
  overrides?: IconOverrides;
}
