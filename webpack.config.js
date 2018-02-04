const path = require('path');

module.exports = {
  entry: './MyPoligon/rxjs/initData/init.ts',
  output: {
    filename: 'rxBundle.js',
    path: path.resolve(__dirname, 'MyPoligon/rxjs/build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              "presets": [
                "es2015"
              ]
            }
          },
          {
            loader: 'ts-loader',
          }
        ]
      }

    ]
  },
  resolve: {
    alias: {
      "@node": path.resolve(__dirname,  './node_modules')
    },
    extensions: [".tsx", ".ts", ".js"],
  },
};