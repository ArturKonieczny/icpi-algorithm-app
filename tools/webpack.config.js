const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const projectPath = path.join(__dirname, '..');
const sourcePath = path.join(projectPath, 'src');
const distPath = path.join(projectPath, 'docs');
const filesPath = 'files';
const assetsPath = 'assets';
const isProduction = process.argv.indexOf('-p') > -1;
const nameSuffix = new Date().getTime() + (isProduction ? '.min' : '');
const port = 8080;
const extractSass = new ExtractTextPlugin({
  filename: path.join(assetsPath, `[name]${nameSuffix}.css`),
  disable: false,
  allChunks: true
});

const config = {
  entry: path.join(sourcePath, 'index.jsx'),
  output: {
    path: distPath,
    filename: path.join(assetsPath, `[name]${nameSuffix}.js`)
  },
  resolve: {
    extensions: ['.js', '.scss']
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, 'index.html'),
      filename: 'index.html',
      allChunks: true
    }),
    new CleanWebpackPlugin([distPath], {
      root: projectPath,
      verbose: false,
      dry: false,
      exclude: ['data']
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          sourcePath,
          path.join(projectPath, 'node_modules', 'icpi-tree'),
          path.join(projectPath, 'node_modules', 'icpi-algorithm')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }, {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [autoprefixer]
              }
            }
          }, {
            loader: 'sass-loader'
          }],
          fallback: 'style-loader'
        })
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }, {
        test: /\.(png|jpg|gif|txt)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `${path.join(filesPath, '[name].[ext]')}`
            }
          }
        ]
      }, {
        /* root static assets. */
        test: /\.ico$/i,
        loader: 'file?name=[name].[ext]'
      }, {
        /* data, config, mocks */
        test: /\.json$/i,
        loader: `file?name=${path.join(filesPath, '[name].[ext]')}`
      }, {
      /* templates */
        test: /\.(html|htm|svg|tpl)$/i,
        loader: 'template-minify-loader'
      }
    ]
  }
};

if (process.argv.indexOf('--watch') > -1) {
  require('serve-local')(distPath, port);
  config.plugins.push(new LiveReloadPlugin({
    appendScriptTag: true,
    ignore: /.(js|json|ico|woff)$/
  }));
}

if (isProduction) {
  config.plugins.push(new UglifyJsPlugin());
}

module.exports = config;
