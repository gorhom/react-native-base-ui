import type { Theme, NamedStyles } from '../types';

export const createThemedStyles = <T>(
  styles: (theme: Theme, ...args: any[]) => NamedStyles<T>
) => (theme: Theme, ...args: any[]): NamedStyles<T> => styles(theme, ...args);
