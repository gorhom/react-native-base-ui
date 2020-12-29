import type { FC, ReactNode } from 'react';
import type { ViewStyle } from 'react-native';
import type { POSITION } from './constants';

export interface EnhancerProps {
  style?: ViewStyle;
  component?: null | ReactNode | FC;
  position: keyof typeof POSITION;
}
