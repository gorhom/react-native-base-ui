import type { TextProps } from 'react-native';
import type { COLOR, FONT } from './constants';

export interface TypographyProps extends TextProps {
  color?: string | COLOR;
  font?: string | FONT;
}
