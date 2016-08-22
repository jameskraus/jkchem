var path = require('path')
var webpack = require('webpack')

var babelQuery = {
        plugins: ['transform-object-rest-spread', 'transform-react-display-name'],
        presets: ['es2015', 'react'],
}

module.exports = {
    debug: true,
    entry: [
        'webpack-hot-middleware/client',
        './client/index.js'
        ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/jkchem/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin()
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
                test: /\.svg/,
                include: /icons/,
                loaders: [
                    'babel?' + JSON.stringify(babelQuery),
                    'svg-react',
                    'svgo'
                ]
            },
            {
                test: /\.(svg|png|jpg)/,
                loader: 'file-loader',
                exclude: /icons/
            }
        ]
    }
}