var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./app.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  }
}
