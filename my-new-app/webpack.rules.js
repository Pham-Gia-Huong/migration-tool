module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.(tsx|js|ts)$/,
    use: [
      {
        loader: 'babel-loader',
      },
    ],
  },
  {
    test: /\.css$/,
    use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
  },
];
