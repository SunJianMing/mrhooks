const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    mode:'development',
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'../public/index.html'),
            filename:"index.html"
        })
    ],
    module:{
        rules:[{
            test:/\.js$/,
            use:['babel-loader']
        }]
    },
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:6000'
            }
        }
    },
    devtool:"cheap-module-source-map"
}