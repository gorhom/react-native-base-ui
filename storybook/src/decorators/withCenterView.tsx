import React from 'react';
import { View } from 'react-native';
import { makeDecorator } from '@storybook/addons';
import { createStyles } from '@gorhom/base-ui';

export const withCenterView = makeDecorator({
  name: 'withCenterView',
  parameterName: '',
  wrapper: (Story: any, context) => (
    <View style={styles.container}>
      <Story context={context} />
    </View>
  ),
});

const styles = createStyles({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
