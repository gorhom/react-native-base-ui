const { resolve } = require('path');
const { withUnimodules } = require('@expo/webpack-config/addons');
const { extraNodeModules } = require('../webpack.config');

const root = resolve(__dirname, '../../');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(js|jsx|ts|tsx)$/,
    include: resolve(root, 'src'),
    use: 'babel-loader',
  });

  Object.assign(config.resolve.alias, extraNodeModules);

  return withUnimodules(config, { projectRoot: resolve(__dirname, '../') });
};
