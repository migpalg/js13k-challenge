const config = require('./webpack.config');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  ...config,
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
        },
      }),
    ],
  },
};
