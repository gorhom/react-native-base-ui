const path = require('path');
const pak = require('../package.json');
const node_modules = path.join(__dirname, 'node_modules');

module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          [pak.name]: path.join(__dirname, '..', pak.source),
          react: path.join(node_modules, 'react'),
        },
      },
    ],
  ],
};
