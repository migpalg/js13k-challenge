const config = require('./webpack.config');

module.exports = {
  ...config,
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    compress: true,
    port: 4200,
  },
};
