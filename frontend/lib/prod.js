const HtmlWebpackPlugin = require("html-webpack-plugin");

const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require('path')
module.exports = {
    mode:"production",
    module:{
        rules:[{
            test:/\.js$/,
            use:['babel-loader']
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'../public/index.html'),
            filename:"index.html"
        }),
        new CleanWebpackPlugin()
    ]
}