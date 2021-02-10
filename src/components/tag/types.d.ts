import type {
  TextProps,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
} from 'react-native';
import type { BaseUIComponent, Override } from '../../types';
import type { IconProps } from '../icon';
import type { TAG_KIND, TAG_SIZE, TAG_VARIANT } from './constants';

export interface TagOverrides {
  [key: string]: Override<any>;
  button?: Override<TouchableOpacity>;
  container?: Override<ViewProps>;
  label?: Override<TextProps>;
  icon?: Override<IconProps>;
}

export interface TagProps extends BaseUIComponent<TagOverrides, ViewStyle> {
  /**
   * Defines tags look by purpose.
   * @default TAG_KIND.primary
   */
  kind?: TAG_KIND;
  /**
   * Defines tags look.
   * @default TAG_VARIANT.light
   */
  variant?: TAG_VARIANT;
  /**
   * Defines tags size.
   * @default TAG_SIZE.small
   */
  size?: TAG_SIZE;
  /**
   * Include or exclude the "x" button and click action.
   * @default true
   */
  closeable?: boolean;
  /**
   * Disable control from being changed.
   * @default false
   */
  disabled?: boolean;
  /**
   * Defines tags label.
   * @default ''
   */
  children?: string;

  // callbacks
  /**
   * An action to be fired when tag is pressed.
   * @default undefined
   */
  onPress?: () => void;
}
