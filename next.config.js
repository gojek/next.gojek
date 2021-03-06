const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withFonts = require('next-fonts');

const config = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: '/_next/static/',
          outputPath: 'static/',
          name: '[name].[ext]',
        },
      },
      devIndicators: {
        autoPrerender: false,
      },
    });
    return config;
  },
};

module.exports = withPlugins(
  [
    withImages({
      devIndicators: {
        autoPrerender: false,
      },
    }),
    [withFonts],
  ],
  config,
);
