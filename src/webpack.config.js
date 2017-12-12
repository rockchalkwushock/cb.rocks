// Native
const { resolve } = require('path')

// Packages
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const webpack = require('webpack')

const APP_NAME = 'codybrunner.rocks'
const PUBLIC_PATH = 'https://codybrunner.rocks/'

module.exports = {
  // Exit immediately if any problems exist.
  bail: true,
  entry: {
    // Only bundling & minifying 'flipcard' for now.
    // REVIEW: need to understand the externals stuff for jQuery.
    bundle: resolve(__dirname, './js/flipcard.js')
  },
  output: {
    // Send the output to the 'static/' since
    // hugo will compile from there.
    path: resolve(__dirname, '../static/'),
    // bundle.js
    filename: '[name].js',
    // make available at root.
    publicPath: PUBLIC_PATH
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: {
          compact: true
        }
      }
    ]
  },
  plugins: [
    // Generate service worker
    new SWPrecacheWebpackPlugin({
      cacheId: APP_NAME,
      debug: true,
      filename: `${APP_NAME}-sw.js`,
      minify: true,
      navigateFallback: PUBLIC_PATH + 'index.html',
      staticFileGlobs: [
        '../static/styles.min.css',
        '../static/icons/**.*',
        '../static/*.js'
      ],
      // remove ../static/ or we gonna have some issues
      stripPrefix: '../static/'
    })
  ]
}