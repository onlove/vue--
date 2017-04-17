/**
 * Created by Administrator on 2017/4/16.
 */
var path = require('path');


module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    }
}