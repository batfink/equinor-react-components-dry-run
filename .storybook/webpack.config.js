module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'stylelint-custom-processor-loader',
                exclude: /node_modules/
            },
            {
                test: /\.woff$/,
                loader: 'file-loader'
            }
        ]
    }
};
