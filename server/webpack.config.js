const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const mode = 'development';

const config = {
  mode: mode,
  target: 'node',
  entry: './src/index.ts',
  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.js'],
  },

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
  },
};

module.exports = config;
