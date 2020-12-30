import {
  addDecorator,
  configure,
  getStorybookUI,
} from '@storybook/react-native';
import { withThemeProvider } from './decorators/withThemeProvider';
import { withCenterView } from './decorators/withCenterView';
import { withKnobs } from '@storybook/addon-knobs';

// add decorators
addDecorator(withCenterView);
addDecorator(withThemeProvider);
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

export default Storybook;
