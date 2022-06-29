const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);
  
  singleSpaWebpackConfig.output.filename = (pathData) => {
    return pathData.chunk.name === 'main' ? 'login.[name].js' : '[name].js';
  }
  

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
