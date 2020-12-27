import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import type { Theme } from '../types';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const createStyles = <T extends NamedStyles<T> | NamedStyles<any>>(
  styles: (theme: Theme, ...args: any[]) => NamedStyles<T>
) => (theme: Theme, ...args: any[]) =>
  StyleSheet.create(styles(theme, ...args));
