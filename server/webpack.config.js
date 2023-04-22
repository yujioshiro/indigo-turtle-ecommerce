const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const mode = 'development';

const config = {
  watch: mode === 'development',

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
    extensions: ['.ts', '.js'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
  },
};

module.exports = config;
