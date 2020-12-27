import type { FC, ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { KIND, SHAPE, SIZE } from './constants';

export interface ButtonProps {
  /**
   * Defines the kind (purpose) of a button.
   * @default KIND.primary
   */
  kind?: KIND;
  /**
   * Defines the shape of the button.
   * @default SHAPE.default
   */
  shape?: SHAPE;
  /**
   * Defines the size of the button
   * @default SIZE.default
   */
  size?: SIZE;

  /**
   * @default false
   */
  disabled?: boolean;
  /**
   * Indicates that the button is selected.
   * @default false
   */
  isSelected?: boolean;
  /**
   * Show loading button style and spinner.
   * @default false
   */
  isLoading?: boolean;

  // enhancer
  /**
   * A helper rendered at the start of the button.
   * @default undefined
   */
  startEnhancer?: ReactNode | FC;
  /**
   * A helper rendered at the end of the button.
   * @default undefined
   */
  endEnhancer?: ReactNode | FC;

  children?: ReactNode;

  style?: StyleProp<ViewStyle>;
  // callbacks
  /**
   * An action to be fired when button is pressed.
   * @default undefined
   */
  onPress?: () => void;
}
