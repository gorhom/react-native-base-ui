import {
  addDecorator,
  configure,
  getStorybookUI,
} from '@storybook/react-native';
import { registerRootComponent } from 'expo';
import { withThemeProvider } from './decorators/withThemeProvider';
import { withCenterView } from './decorators/withCenterView';

addDecorator(withThemeProvider);
addDecorator(withCenterView);

configure(() => {
  // Since require.context doesn't exist in metro bundler world, we have to
  // manually import files ending in *.stories.js
  require('./stories');
}, module);

const Storybook = getStorybookUI({
  // Pass AsyncStorage below if you want Storybook to open your
  // last visited story after you close and re-open your app
  asyncStorage: null,
});

registerRootComponent(Storybook);
