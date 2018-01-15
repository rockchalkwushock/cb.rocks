// Native
const { resolve } = require('path')

// Packages
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const webpack = require('webpack')

// Conditional
const isDev = process.env.NODE_ENV !== 'production'

// Constants
const APP_NAME = 'codybrunner.rocks'
const PUBLIC_PATH = 'https://codybrunner.rocks/'

// Plugin Configs
const filesToCopy = [
  {
    from: './src/js/custom-evilicons.min.js',
    to: 'custom-evilicons.min.js'
  },
  {
    from: './src/js/custom-highlight.min.js',
    to: 'custom-highlight.min.js'
  },
  {
    from: './src/js/jquery.tagcloud.js',
    to: 'jquery.tagcloud.js'
  },
  {
    from: './src/js/tagcloud.js',
    to: 'tagcloud.js'
  },
  {
    from: './src/favicon.ico',
    to: 'favicon.ico'
  },
  {
    from: './src/browserconfig.xml',
    to: 'browserconfig.xml'
  },
  {
    from: './src/manifest.json',
    to: 'manifest.json'
  },
  {
    from: './src/icons/android-chrome-192x192.png',
    to: 'android-chrome-192x192.png'
  },
  {
    from: './src/icons/android-chrome-512x512.png',
    to: 'android-chrome-512x512.png'
  },
  {
    from: './src/icons/apple-touch-icon.png',
    to: 'apple-touch-icon.png'
  },
  {
    from: './src/icons/favicon-16x16.png',
    to: 'favicon-16x16.png'
  },
  {
    from: './src/icons/favicon-32x32.png',
    to: 'favicon-32x32.png'
  },
  {
    from: './src/icons/mstile-144x144.png',
    to: 'mstile-144x144.png'
  },
  {
    from: './src/icons/mstile-150x150.png',
    to: 'mstile-150x150.png'
  },
  {
    from: './src/icons/mstile-310x150.png',
    to: 'mstile-310x150.png'
  },
  {
    from: './src/icons/mstile-310x310.png',
    to: 'mstile-310x310.png'
  },
  {
    from: './src/icons/mstile-70x70.png',
    to: 'mstile-70x70.png'
  }
]
const swConfig = {
  cacheId: APP_NAME,
  debug: true,
  minify: true,
  navigateFallback: PUBLIC_PATH + 'index.html',
  staticFileGlobs: [
    './static/**.*',
    './static/icons/**.*',
    './static/images/**.*'
  ],
  stripPrefix: './static/'
}

// Plugin Instances
const extractCSS = new ExtractTextPlugin({
  filename: isDev
    ? '[name].css'
    : '[name].[sha512:contenthash:base64:7].min.css'
})

// Plugins by Environment
const devPlugins = [new CopyWebpackPlugin(filesToCopy), extractCSS]
const prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }),
  new webpack.HashedModuleIdsPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    names: 'manifest',
    minChunks: Infinity
  }),
  new CopyWebpackPlugin(filesToCopy),
  extractCSS,
  new SWPrecacheWebpackPlugin(swConfig)
]

module.exports = {
  bail: !isDev,
  devtool: isDev ? 'eval' : false,
  watch: isDev,
  entry: {
    bundle: resolve(__dirname, './src/js/flipcard.js')
  },
  output: {
    chunkFilename: '[name].[chunkhash].chunk.js',
    filename: isDev ? '[name].js' : '[name].[chunkhash].js',
    path: resolve(__dirname, './static/'),
    publicPath: isDev ? '/' : PUBLIC_PATH
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: !isDev,
            comments: isDev,
            minified: !isDev,
            plugins: ['transform-runtime', 'transform-object-rest-spread'],
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              hmr: isDev,
              sourceMap: isDev
            }
          },
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: !isDev,
                sourceMap: isDev
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: isDev
              }
            }
          ]
        })
      },
      {
        test: /.*\.(png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[sha512:hash:base64:7].[ext]',
              outputPath: 'images/'
            }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: isDev ? devPlugins : prodPlugins
}
