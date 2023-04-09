// 公共配置
import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const path = require('path')

const baseConfig: Configuration = {
  entry: path.join(__dirname,'../src/index.tsx'),//入口文件
  output:{
    filename:'static/js/[name].js',//每个输出js的名称
    path:path.join(__dirname,'../dist'),//打包输出路径
    clean:true,//webpack4需要配置clean-webpack-plugin来删除dist文件，wbepack5内置了
    publicPath:'/',//打包文件的公共前缀路径
  },
  //loader配置
  module:{
    rules:[
      {
        test:/.(ts|tsx)$/,//匹配.ts，tsx文件
        use:'babel-loader',
      },
      {
        test:/.css$/,//匹配css文件
        use:['style-loader','css-loader'],
      },
    ],
  },
  resolve:{
    extensions:['.tsx','.ts','.jsx','.js'],
  },
  //plugin的配置
  plugins:[
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'../public/index.html'),
      //压缩的html资源
      minify:{
        collapseWhitespace:true,//去空格
        removeComments:true,//去注释
      },
    }),
  ],
}

export default baseConfig