import React, { FC, useCallback, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { DarkTheme, LightTheme, ThemeProvider } from '@gorhom/base-ui';
import Button, { SHAPE } from '@gorhom/base-ui/button';

//@ts-ignore
const ThemeProviderContainer = ({ children }) => {
  //#region state
  const [theme, setTheme] = useState(DarkTheme);
  //#endregion

  //#region variables
  const toggleButtonText = useMemo(
    () => (theme.name === 'dark' ? '☀️' : '🌙'),
    [theme]
  );
  //#endregion

  //#region callbacks
  const handleToggleThemePress = useCallback(() => {
    setTheme(state => (state.name === 'dark' ? LightTheme : DarkTheme));
  }, []);
  //#endregion
  return (
    <ThemeProvider theme={theme}>
      <>
        {children}
        <Button
          shape={SHAPE.circle}
          overrides={{
            baseButton: {
              style: styles.button,
            },
          }}
          onPress={handleToggleThemePress}
        >
          {toggleButtonText}
        </Button>
      </>
    </ThemeProvider>
  );
};

export const withThemeProvider = (Story: FC) => (
  <ThemeProviderContainer>
    <Story />
  </ThemeProviderContainer>
);

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 34,
    right: 34,
  },
});
