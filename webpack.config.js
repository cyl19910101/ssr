const { resolve } = require("path");

function getPath(relativePath) {
  return resolve(__dirname, relativePath);
}

module.exports = {
  entry: getPath("index.js"),
  output: {
    filename: "index.js",
    path: getPath("build")
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.jsx?$/,
            loader: "babel-loader",
            options: {
              babelrc: !!0,
              presets: ["react"]
            }
          }
        ]
      }
    ]
  }
};
