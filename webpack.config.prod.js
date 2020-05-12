import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
// import WebpackMd5Hash from "webpack-md5-hash";
// import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  mode: "production",
  // resolve: {
  //   extensions: ["*", ".js", ".json"]
  // },
  devtool: "source-map",
  entry: {
    vendor: path.resolve(__dirname, "src/vendor"),
    main: path.resolve(__dirname, "src/index")
  },
  target: "web",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    // filename: 'bundle.js'
    filename: "[name].js"
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
        },
        default: {
          // minChunks: 2,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    // Global loader configuration
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: true,
      noInfo: false // set to false to see a list of every file being bundled.
    }),

    // Generate an external css file with a hash in the filename
    // new ExtractTextPlugin("[name].[md5:contenthash:hex:20].css"),

    // Hash the files using MD5 so that their names change when the content changes.
    // new WebpackMd5Hash(),

    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
  //     // Properties you define here are available in index.html
  //     // using htmlWebpackPlugin.options.varName
  //     trackJSToken: "INSERT YOUR TOKEN HERE"
    })
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader','css-loader']}
    ]
  }
};
