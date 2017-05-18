var path = require('path');

module.exports = {

  // will allow errors in console to display on correct page and line
  devtool: 'source-map',

  // This code will be compiled
  entry: "./app/app.js",

  // Then output into this file
  output: {
    filename: "app/public/bundle.js",
    publicPath: './app/Public'
  },

  module: {
    rules: [
        { test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: [
                    'es2015',
                    'react'
                ],
            plugins: []
        },

        include: [
            path.resolve(__dirname, 'app')
        ]
        },  {
            test: /\.json$/,
            loader: "json-loader"
        }
    ]
  },

  resolve: {
      modules: [
          path.join(process.cwd(), 'app'),
          'node_modules'
      ],
      extensions: ['.js', '.json']
  },

  devtool: false

// // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
// // Without this the console says all errors are coming from just coming from bundle.js
// devtool: "eval-source-map"
};
