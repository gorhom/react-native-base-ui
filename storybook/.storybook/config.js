import { configure } from '@storybook/react-native';

configure(require.context('../stories', true, /\.stories\.js$/), module);
