import type { ViewProps, ViewStyle } from 'react-native';
import type { BaseUIComponent, Override } from '../../types';
import type { TAG_TYPE } from './constants';

export interface TagOverrides {
  [key: string]: Override<any>;
  container?: Override<ViewProps>;
}

export interface TagProps extends BaseUIComponent<TagOverrides, ViewStyle> {
  /**
   * Tag type.
   * @default TAG_TYPE.type1
   */
  type?: TAG_TYPE;
}
