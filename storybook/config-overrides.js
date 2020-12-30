const {
  addWebpackAlias,
  babelInclude,
  fixBabelImports,
  removeModuleScopePlugin,
  addBabelPlugin,
  addWebpackModuleRule,
  override,
} = require('customize-cra');
const { plugins } = require('./babel.config');
const path = require('path');

const root = path.resolve(__dirname, '../');

module.exports = override(
  addWebpackModuleRule({
    test: /\.(js|jsx|ts|tsx)$/,
    include: path.resolve(root, 'src'),
    use: 'babel-loader',
  }),
  fixBabelImports('module-resolver', {
    alias: {
      '^react-native$': 'react-native-web',
      ...plugins[1][1].alias,
    },
  }),
  addWebpackAlias({
    'react-native': 'react-native-web',
    ...plugins[1][1].alias,
  }),

  //#region plugins
  addBabelPlugin(plugins[1]),
  addBabelPlugin([
    '@babel/plugin-proposal-class-properties',
    {
      loose: true,
    },
  ]),
  addBabelPlugin(['@babel/plugin-transform-react-jsx'], {
    runtime: 'automatic',
  }),
  //#endregion
  babelInclude([
    path.resolve('src'),
    path.resolve('app.json'),
    path.resolve('storybook'),
    root,

    // any react-native modules you need babel to compile
    path.resolve('./node_modules/react-native-swipe-gestures'),
  ]),
  removeModuleScopePlugin()
);
