const { defineConfig } = require("cypress");
const webpackPreprocessor = require('@cypress/webpack-preprocessor')

module.exports = defineConfig({
  env: {
    MAILISK_NAMESPACE: "ynksmkqs49nh",
    MAILISK_API_KEY: "YRrC1kyxfLlQfCDp3JTwWO0TD5pm42MFtwM2RSr0ShY",
  },

  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        // send in the options from your webpack.config.js, so it works the same
        // as your app's code
        webpackOptions: {
          mode: 'development',
          module: {
            rules: [
              {
                test: /\.jsx?$/,
                exclude: [],
                use: [{
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                  },
                }],
              },
            ],
          },
        },
        watchOptions: {},
      }

      on('file:preprocessor', webpackPreprocessor(options))
    },
  },
});
