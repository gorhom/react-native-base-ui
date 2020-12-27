const path = require('path');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { resolver } = require('./metro.config');

const root = path.resolve(__dirname, '..');
const node_modules = path.join(__dirname, 'node_modules');
const storybook_path = path.join(node_modules, '@storybook');

const extraNodeModules = {
  ...resolver.extraNodeModules,
  '@storybook/react-native': path.join(storybook_path, 'react-native'),
  '@storybook/addon-knobs': path.join(storybook_path, 'addon-knobs'),
  '@storybook/addon-actions': path.join(storybook_path, 'addon-actions'),
  'react-native-web': path.join(node_modules, 'react-native-web'),
};
module.exports.extraNodeModules = extraNodeModules;

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.push({
    test: /\.(js|jsx|ts|tsx)$/,
    include: path.resolve(root, 'src'),
    use: 'babel-loader',
  });

  // We need to make sure that only one version is loaded for peerDependencies
  // So we alias them to the versions in example's node_modules
  Object.assign(config.resolve.alias, extraNodeModules);

  return config;
};
