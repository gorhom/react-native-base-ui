import { useContext, useMemo } from 'react';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { ThemeContext } from '../contexts';
import type { Theme } from '../themes';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const useThemedStyle = <T extends NamedStyles<T> | NamedStyles<any>>(
  style: (theme: Theme) => T | NamedStyles<T>
): T | NamedStyles<T> => {
  //#region context
  const theme = useContext(ThemeContext);
  //#endregion

  //#region variables
  const themedStyle = useMemo(() => style(theme), [theme, style]);
  //#endregion

  return themedStyle;
};
