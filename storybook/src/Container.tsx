import React, { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import {
  createThemedStyles,
  DarkTheme,
  LightTheme,
  ThemeProvider,
} from '@gorhom/base-ui';
import { Button, BUTTON_SHAPE } from '@gorhom/base-ui/components/button';

const Container = ({ children: Children }: any) => {
  //#region state
  const [theme, setTheme] = useState(DarkTheme);
  //#endregion

  //#region variables
  const styles = useMemo(() => styleCreator(theme), [theme]);
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
      <View style={styles.container}>
        <Children />
        <Button
          shape={BUTTON_SHAPE.circle}
          $style={styles.button}
          onPress={handleToggleThemePress}
        >
          {toggleButtonText}
        </Button>
      </View>
    </ThemeProvider>
  );
};

const styleCreator = createThemedStyles(theme => ({
  container: {
    flex: 1,
    padding: 34,
    backgroundColor: theme.colors.backgroundPrimary,
  },

  button: {
    position: 'absolute',
    top: 34,
    right: 34,
  },
}));

export default Container;
