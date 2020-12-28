import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import type { Theme } from '../types';

type NamedStyles<T> = {
  [P in keyof Required<T>]: ViewStyle | TextStyle | ImageStyle;
};

export const createStyles = <T>(
  styles: (theme: Theme, ...args: any[]) => NamedStyles<T>
) => (theme: Theme, ...args: any[]): NamedStyles<T> =>
  StyleSheet.create(styles(theme, ...args));
