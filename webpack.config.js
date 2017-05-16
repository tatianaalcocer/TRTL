module.exports = {

  // will allow errors in console to display on correct page and line
  devtool: 'source-map',

  // This code will be compiled
  entry: "./app/app.js",

  // Then output into this file
  output: {
    filename: "app/public/bundle.js",
    publicPath: './app/public'
  },

  module: {
      loaders: [
        {
          test: /.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    },

// // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
// // Without this the console says all errors are coming from just coming from bundle.js
// devtool: "eval-source-map"
};
