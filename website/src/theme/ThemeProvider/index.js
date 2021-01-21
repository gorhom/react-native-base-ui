/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useMemo } from 'react';
import useTheme from '@theme/hooks/useTheme';
import ThemeContext from '@theme/ThemeContext';
import {
  DarkTheme,
  LightTheme,
  ThemeProvider as BaseThemeProvider,
} from '@gorhom/base-ui';

function ThemeProvider(props) {
  const { isDarkTheme, setLightTheme, setDarkTheme } = useTheme();

  const baseTheme = useMemo(() => (isDarkTheme ? DarkTheme : LightTheme), [
    isDarkTheme,
  ]);
  return (
    <BaseThemeProvider theme={baseTheme}>
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          setLightTheme,
          setDarkTheme,
        }}
      >
        {props.children}
      </ThemeContext.Provider>
    </BaseThemeProvider>
  );
}

export default ThemeProvider;
