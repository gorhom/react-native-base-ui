import React from 'react';
import { View } from 'react-native';
import { makeDecorator } from '@storybook/addons';
import { createStyles, useThemedStyle } from '@gorhom/base-ui';

// @ts-ignore
const CenterView = ({ children }) => {
  const styles = useThemedStyle(styleCreator);
  return <View style={styles.container}>{children}</View>;
};

export const withCenterView = makeDecorator({
  name: 'withCenterView',
  parameterName: '',
  wrapper: (getStory, context) => <CenterView>{getStory(context)}</CenterView>,
});

const styleCreator = createStyles(theme => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundPrimary,
  },
}));
