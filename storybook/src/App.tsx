import React from 'react';
import {
  addDecorator,
  configure,
  getStorybookUI,
} from '@storybook/react-native';
import { withCenterView } from './decorators/withCenterView';
import { withKnobs } from '@storybook/addon-knobs';
import Container from './Container';

// add decorators
addDecorator(withCenterView);
addDecorator(withKnobs);

configure(() => {
  require('./stories');
}, module);

const Storybook = getStorybookUI({
  // Pass AsyncStorage below if you want Storybook to open your
  // last visited story after you close and re-open your app
  asyncStorage: null,
  onDeviceUI: false,
});

export default () => <Container children={Storybook} />;
