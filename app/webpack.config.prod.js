const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "dist/");

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['env'] }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        publicPath: bundlePath,
        filename: "bundle.js"
    },
    plugins: [ new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
                'process.env': {
                  'NODE_ENV': JSON.stringify('production')
                }
              }) ]
}