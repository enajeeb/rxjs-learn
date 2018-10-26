const path = require('path');

module.exports = {
  // entry: './src/observable.ts',
  // entry: './src/subject.ts',
  // entry: './src/behavior-subject.ts',
  // entry: './src/replay-subject.ts',
  entry: './src/async-subject.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js', '.tsx' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};