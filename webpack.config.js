var webpack = require('webpack');
module.exports = {
  entry: [
    './components/app.js'
  ],
  externals:{
    
  },
  plugins: [
    new webpack.ProvidePlugin({
      
    })
  ],
  output: {
    path: __dirname,
    filename: './public/scripts/bundle.js'
  },
  resolve: {
    extensions: ['*','.js','.jsx'],
    modules: [__dirname, 'node_modules'],
    alias: {
      
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          "presets": ["env", "react"]
        }
      }
    ]
  }
};