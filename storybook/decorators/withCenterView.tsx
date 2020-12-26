import React, { FC } from 'react';
import { View } from 'react-native';
import { createStyles, useThemedStyle } from '@gorhom/base-ui';

const styleCreator = createStyles(theme => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.accent,
  },
}));

const CenterView = ({ children }) => {
  const styles = useThemedStyle(styleCreator);

  return <View style={styles.container}>{children}</View>;
};

export const withCenterView = (Story: FC) => (
  <CenterView>
    <Story />
  </CenterView>
);
