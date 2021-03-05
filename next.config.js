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
  env: {
    whatsAppToken: process.env.whatsAppToken,
    whatsAppAddApi: process.env.whatsAppAddApi,
    whatsAppTemplateApi: process.env.whatsAppTemplateApi,
    jobDetailsApi: process.env.jobDetailsApi,
    ghostBlogsApi: process.env.ghostBlogsApi,
    ghostKey: process.env.ghostKey,
    domain: process.env.domain,
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
