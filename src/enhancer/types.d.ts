import type { FC } from 'react';
import type { ViewStyle } from 'react-native';

export interface EnhancerProps {
  style?: ViewStyle;
  children?: null | FC | string;
}
