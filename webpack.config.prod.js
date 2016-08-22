var path = require('path')
var webpack = require('webpack')

var babelQuery = {
    plugins: ['transform-object-rest-spread', 'transform-react-display-name'],
    presets: ['es2015', 'react'],
}

module.exports = {
    entry: [
        //'webpack-hot-middleware/client',
        './client/index.js'
        ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/jkchem/dist/',
        //sourceMapFilename: '[name].js.map'
    },
    devtool: 'source-map',
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': "'production'"
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: babelQuery
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&sourceMap&localIdentName=[name]---[local]---[hash:base64:5]',
                    'sass?sourceMap'
                ]
            },
            {
                test: /.svg/,
                include: [
                    path.resolve(__dirname, 'client/images'),
                ],
                loaders: [
                    'babel?presets[]=es2015,presets[]=react',
                    'svg-react',
                    'svgo-loader'
                ]
            },
            {
                test: /\.(svg|png|jpg)/,
                loader: 'file-loader',
                exclude: [
                    path.resolve(__dirname, 'client/images'),
                ]
            }
        ]
    }
}