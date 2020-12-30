import type { FC, ReactNode } from 'react';
import type {
  StyleProp,
  TouchableOpacityProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import type { Override } from '../types';
import type { BUTTON_KIND, BUTTON_SHAPE, BUTTON_SIZE } from './constants';

export interface ButtonOverrides {
  [key: string]: Override<any>;
  baseButton?: Override<TouchableOpacityProps>;
  content?: Override<ViewProps>;
  startEnhancer?: Override<ViewProps>;
  endEnhancer?: Override<ViewProps>;
}

export interface ButtonProps {
  /**
   * Defines the button overrides.
   * @default undefined
   */
  overrides?: ButtonOverrides;
  /**
   * Defines the kind (purpose) of a button.
   * @default BUTTON_KIND.primary
   */
  kind?: BUTTON_KIND;
  /**
   * Defines the shape of the button.
   * @default BUTTON_SHAPE.default
   */
  shape?: BUTTON_SHAPE;
  /**
   * Defines the size of the button
   * @default BUTTON_SIZE.default
   */
  size?: BUTTON_SIZE;

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
  startEnhancer?: FC<ViewProps>;
  /**
   * A helper rendered at the end of the button.
   * @default undefined
   */
  endEnhancer?: FC<ViewProps>;

  /**
   * Button content.
   * @default null
   */
  children?: ReactNode | ReactNode[] | string;

  style?: ViewStyle;
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
