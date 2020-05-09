// 从customize-cra引入一些相关的方法
const { override, addWebpackAlias } = require('customize-cra')
const path = require('path');

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src')
  })
)
// https://blog.csdn.net/ajh99990/article/details/104263457/