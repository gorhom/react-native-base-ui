import {
  addDecorator,
  configure,
  getStorybookUI,
} from '@storybook/react-native';
import { registerRootComponent } from 'expo';
import { withThemeProvider } from './decorators/withThemeProvider';
import { withCenterView } from './decorators/withCenterView';
import { withKnobs } from '@storybook/addon-knobs';

// add decorators
addDecorator(withThemeProvider);
addDecorator(withCenterView);
addDecorator(withKnobs);

configure(() => {
  // Since require.context doesn't exist in metro bundler world, we have to
  // manually import files ending in *.stories.js
  require('./stories');
}, module);

const Storybook = getStorybookUI({
  // Pass AsyncStorage below if you want Storybook to open your
  // last visited story after you close and re-open your app
  asyncStorage: null,
  onDeviceUI: false,
});

registerRootComponent(Storybook);

export default Storybook;
