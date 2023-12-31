const path = require('path');

module.exports = {
  transpileDependencies: true,
  outputDir: 'dist',
  assetsDir: 'frontend',
  indexPath: 'frontend/index.html',
  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'frontend'));
    config.entry('app').clear().add(path.resolve(__dirname, 'frontend/main.js')).end();
  }
};
