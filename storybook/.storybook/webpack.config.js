const { resolve, join } = require('path');
const { withUnimodules } = require('@expo/webpack-config/addons');
const { resolver } = require('../metro.config');

const root = path.resolve(__dirname, '../../');
const node_modules = join(__dirname, '../node_modules');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(js|jsx|ts|tsx)$/,
    include: resolve(root, 'src'),
    use: 'babel-loader',
  });

  Object.assign(config.resolve.alias, {
    ...resolver.extraNodeModules,
    'react-native-web': join(node_modules, 'react-native-web'),
  });

  return withUnimodules(config, { projectRoot: resolve(__dirname, '../') });
};
