module.exports = {
    devtool: 'eval-source-map',
    entry: './src/js/app.js',
    output: {
        path: './assets/js',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015','react']
            }
        }]
    }
}