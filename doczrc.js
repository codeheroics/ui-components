const TsConfigPathsPlugin = require('awesome-typescript-loader')
  .TsConfigPathsPlugin;
import { svgSpriteLoader } from 'docz-plugin-svg-sprite-loader';
import { css } from 'docz-plugin-css';

export default {
  title: 'UI Components',
  description: 'This is Dashlane UI components lib documentation',
  codeSandbox: false,
  typescript: true,
  dest: 'docs',
  host: 'localhost',
  hashRouter: true,
  base: '/ui-components/',
  modifyBundlerConfig: config => {
    config.resolve.plugins = [new TsConfigPathsPlugin()];
    return config;
  },
  plugins: [
    svgSpriteLoader(),
    css({
      preprocessor: 'sass',
      loaderOpts: {
        implementation: require('sass') // We want to force the use of 'sass' (dart-sass) and not 'node-sass'
      },
      cssmodules: true
    })
  ],
  menu: ['Getting Started', 'Components']
};
