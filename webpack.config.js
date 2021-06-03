import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import DotEnv from 'dotenv-webpack';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { NODE_ENV } = process.env;
console.log(NODE_ENV);

const plugins = [
  new HtmlWebpackPlugin({ template: './app/client/index.html' }),
];

if (NODE_ENV !== 'production') {
  plugins.push(new DotEnv());
}

export default {
  entry: './app/client/index',
  // Output
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'index.bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  // Devserver
  devServer: {
    port: 3000,
    watchContentBase: true,
  },
  // Rules
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins,
};
