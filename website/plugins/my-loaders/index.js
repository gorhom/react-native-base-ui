const { resolve, join } = require('path');
const root = resolve(__dirname, '../../../');
const rootPackage = require('../../../package.json');
const node_modules = join(__dirname, '../../node_modules');

module.exports = (context, options) => ({
  name: 'my-loaders',
  configureWebpack: (config, isServer) => {
    return {
      resolve: {
        alias: {
          [rootPackage.name]: resolve(root, 'src'),
          react: join(node_modules, 'react'),
          'react-native': 'react-native-web',
          'react-native-web': join(node_modules, 'react-native-web'),
        },
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx|ts|tsx)$/,
            include: resolve(root, 'src'),
            use: 'babel-loader',
          },
        ],
      },
    };
  },
});
