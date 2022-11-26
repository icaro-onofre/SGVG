module.exports = {
 experiments: {
      topLevelAwait: true
  },
  entry: [
    './src/App.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        type:"javascript/esm",
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },
  // plugins: []
};
