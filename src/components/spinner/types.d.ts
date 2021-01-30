import type { ViewStyle } from 'react-native';
import type { BaseUIComponent, Override } from '../../types';

export interface SpinnerOverrides {
  [key: string]: Override<any>;
}

export interface SpinnerProps
  extends BaseUIComponent<SpinnerOverrides, ViewStyle> {
  /**
   * Defines the spinner size.
   * @default 44
   */
  size?: number;

  /**
   * Defines the spinner active color.
   * @default {contentAccent}
   */
  activeColor?: string;

  /**
   * Defines the spinner track color.
   * @default {backgroundTertiary}
   */
  trackColor?: string;
}
