import type { TextInputProps, ViewProps } from 'react-native';
import type { IconProps } from '../icon';
import type { Override } from '../types';
import type { INPUT_SIZE } from './constants';

export interface InputOverrides {
  [key: string]: Override<any>;
  container?: Override<ViewProps>;
  baseInput?: Override<TextInputProps>;
  startEnhancer?: Override<ViewProps>;
  endEnhancer?: Override<ViewProps>;
  clearIcon?: Override<IconProps>;
  clearIconContainer?: Override<ViewProps>;
}

export interface InputProps
  extends Omit<TextInputProps, 'style' | 'multiline'> {
  /**
   * Defines the input overrides.
   * @default undefined
   */
  overrides?: InputOverrides;
  // configs
  /**
   * Renders component in 'positive' state.
   * @default false
   */
  positive?: boolean;
  /**
   * Renders component in 'error' state.
   * @default false
   * @default
   */
  error?: boolean;
  /**
   * Renders component in 'disabled' state.
   * @default false
   */
  disabled?: boolean;
  /**
   * If true, adds a clear value icon button to the end of the input container.
   * @default false
   */
  clearable?: boolean;
  /**
   * Defines the size of the input.
   * @default SIZE.default
   */
  size?: INPUT_SIZE;

  // enhancer
  /**
   * A helper rendered at the start of the input.
   * @default undefined
   */
  startEnhancer?: FC;
  /**
   * A helper rendered at the end of the input.
   * @default undefined
   */
  endEnhancer?: FC;
}
