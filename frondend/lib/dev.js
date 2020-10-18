const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    mode:'development',
    module:{
        rules:[{
            test:/\.js$/,
            use:['babel-loader']
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'../public/index.html'),
            filename:'index.html'
        })
    ],
    devServer:{
        contentBase:'./dist',
        hot:true,
        proxy:{
            '/api':{
                target:'http://localhost:3000'
            }
        }
    },
    devtool:'cheap-module-source-map'
}