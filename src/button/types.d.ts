import type { FC, ReactNode } from 'react';
import type {
  StyleProp,
  TouchableOpacityProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import type { Override } from '../types';
import type { KIND, SHAPE, SIZE } from './constants';

export interface ButtonOverrides {
  [key: string]: Override<any>;
  baseButton?: Override<TouchableOpacityProps>;
  content?: Override<ViewProps>;
  startEnhancer?: Override;
  endEnhancer?: Override;
}

export interface ButtonProps {
  /**
   * Defines the button overrides.
   * @default undefined
   */
  overrides?: ButtonOverrides;
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

  /**
   * Button content.
   * @default null
   */
  children?: ReactNode | ReactNode[] | string;

  style?: StyleProp<ViewStyle>;
  // callbacks
  /**
   * An action to be fired when button is pressed.
   * @default undefined
   */
  onPress?: () => void;
}

export interface ButtonContentProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}
