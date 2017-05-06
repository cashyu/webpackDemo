const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].bundle.js',
    // publicPath: 'http://cdn.com/'      //上线的路径
  },
  module: {
    loaders: [
      {
        test: /\.js$/, 
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, './node_modules/'),   //打包不包括的范围
        include: path.resolve(__dirname, './'),    //打包的范围
        query: {
          presets: ['latest']
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    })
    /*
    new htmlWebpackPlugin({
      filename: 'a.html',
      template: 'index.html',
      //inject: 'head',    //指定脚本放置在哪个标签
      inject: 'body',    //指定脚本放置在哪个标签
      title: 'this is a.html',
      //chunks: ['main', 'a']    //给制定的html文件里面,添加chunk
      excludeChunks: ['c']    //不添加的chunk
      //minify: {  //压缩html文件
      //  removeComments: true,
      //  collapseWhitespace: true
      //}
    }) */
  ]
}

