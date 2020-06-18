const path = require('path');

module.exports = {
    entry: './app.js',
    module: {
      loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader" },
        // ...
      ]
    },
    externals: ['axios']
  };