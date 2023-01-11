//引入 nodeJs自带的包 path 用来获取某个文件在计算机中的指定位置
let path = require('path');
// 引入html打包工具
let htmlPack = require('html-webpack-plugin');
// 引入css打包工具
let cssPack = require('mini-css-extract-plugin');
const webpack = require('webpack');
let entryItems = ['login']

function setEntry(entryItems){
    let entry = {};
    entryItems.map(items=>{
        return entry[items]=`./public/mainJs/${items}.js`
    })
    return entry
}
//暴露
module.exports = {
    mode:'development',//指定打包模式  -development 开发模式
    entry:setEntry(entryItems),
    output:{ //设置打包输出的 路径 和 名称
        path :path.resolve(__dirname,'dist'),
        filename:'javaScript/[name].js'
    },
    // plugins:[
    //     new htmlPack({
    //         template:'./src/html/index.html/',
    //         filename:'html/index.html',
    //         chunks:['index'],
    //     }),
    //     new htmlPack({
    //         template:'./src/html/login.html',
    //         filename:'html/login.html',
    //         chunks:['login']
    //     }),
    //     new htmlPack({
    //         template:'./src/html/sc.html',
    //         filename:'html/sc.html',
    //         chunks:['sc']
    //     }),
    //     new cssPack({
    //         filename:'styleSheets/[name].css'
    //     }),
    //     new webpack.ProvidePlugin({
    //         "$":"jquery"
    //     })
    // ],
    // devServer:{
    //     port:8888,//服务器端口号,
    //     open:true,//布尔类型，是否服务器启动后浏览器自动打开指定页面,
    //     openPage:'./dist/html/index.html',//服务器启动成功时要打开的页面参照dist的路径',
    //     hot:true,//布尔值，是否打开热部署功能(源文件被修改后，自动将源文件重新打包),
    //     proxy:{//配置代理服务器信息
    //         "/":{
    //             target:'http://127.0.0.1:3000/'
    //         }
    //     }
    // },
    // module:{
    //     rules:[
    //         {
    //             test:/\.css$/i,
    //             use:[cssPack.loader,'css-loader']
    //         },
    //         {
    //             test:/\.scss$/i,
    //             use:[cssPack.loader,'css-loader','sass-loader']
    //         },
    //         {
    //             test:/\.(png|jpg|jpeg|gif|tif|tiff|wbmp|ico|jng|bmp|svg|svgz|webp)$/i,
    //             type:'javascript/auto',
    //             use:{
    //                 loader:'url-loader',
    //                 options:{
    //                     limit:10*1024,
    //                     outputPath:'./images/',
    //                     esModule:false
    //                 }
    //             }
    //         },                                                  
    //         {
    //             test:/\.html$/i,
    //             use:['html-withimg-loader']
    //         },
    //     ]
    // }
}