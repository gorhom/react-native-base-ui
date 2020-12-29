import type { TextInputProps, ViewProps } from 'react-native';
import type { Override } from '../types';

export interface InputOverrides {
  [key: string]: Override<any>;
  container?: Override<ViewProps>;
  baseInput?: Override<TextInputProps>;
  startEnhancer?: Override;
  endEnhancer?: Override;
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
   * Defines the size of the input.
   * @default SIZE.default
   */
  size?: SIZE;

  // enhancer
  /**
   * A helper rendered at the start of the input.
   * @default undefined
   */
  startEnhancer?: ReactNode | FC;
  /**
   * A helper rendered at the end of the input.
   * @default undefined
   */
  endEnhancer?: ReactNode | FC;

  //callbacks
  /**
   * Handler for the `focus` event
   * @default undefined
   */
  onFocus?: () => void;
  /**
   * Handler for the `blur` event.
   * @default undefined
   */
  onBlur?: () => void;
}
