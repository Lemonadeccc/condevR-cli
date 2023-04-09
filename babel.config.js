module.exports = {
  //预设执行顺序从右到左，所以先处理ts，再处理jsx
  presets:[
    [
      '@babel/preset-env',
      {
        //设置兼容目标浏览器版本，也可以在根目录配置.borwserslistrc文件，babel-loader会自动寻找上面配置好的文件.browserslistr
        //'targets':{
        //   'chrome':35,
        //   'ie':9
        // }
        targets:{ browsers:['> 1%','last 2 versions','not ie <= 8']},
        useBuiltIns:'usage',//根据配置的浏览器兼容，以及代码中使用的api进行引入polyfill按需添加
        corejs:3,//配置使用core-js使用的版本
        loose:true,
      },
    ],
    //如果使用的是babel和react17，可能需要将'runtime':'automatic'添加到配置中，
    //否则可能会出现错误：Uncaught ReferenceError:React is not defined
    ['@babel/preset-react',{ runtime: 'automatic'}],
    '@babel/preset-typescript',
  ],
}