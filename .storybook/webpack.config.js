const path = require('path');
const srcPath = path.join(__dirname, '../src');
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);
  config.module.rules.push({
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader!postcss-loader", "sass-loader"],        
        include: path.resolve(__dirname, '../src')
  })
  config.resolve.extensions.push('.css', '.scss', '.sass');
  return config;
};