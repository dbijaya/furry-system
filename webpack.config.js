module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // higher version of webpack has depricated to use just loader:'babel'
                // and also says not to use use[] either,
                // instead simply use: loader: 'babel-loader
                // use: {
                //     loader: "babel"
                // }
                loader: 'babel-loader'
            }
        ]
    }
}