const nodeExternals = require('webpack-node-externals');

const cwd = __dirname || process.cwd();

module.exports = {
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()],
  entry: `${cwd}/server/app.js`,
  output: {
    filename: 'server.build.js',
    path: `${cwd}/dist`,
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
    ],
  },
};
