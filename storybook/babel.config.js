const path = require('path');
const pak = require('../package.json');
const node_modules = path.join(__dirname, 'node_modules');
const storybook_path = path.join(node_modules, '@storybook');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          // For development, we want to alias the library to the source
          [pak.name]: path.join(__dirname, '..', pak.source),
          react: path.join(node_modules, 'react'),
          '@storybook/react-native': path.join(storybook_path, 'react-native'),
          '@storybook/addon-knobs': path.join(storybook_path, 'addon-knobs'),
          '@storybook/addon-actions': path.join(
            storybook_path,
            'addon-actions'
          ),
        },
      },
    ],
  ],
};
