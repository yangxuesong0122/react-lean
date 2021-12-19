const { override, fixBabelImports } = require('customize-cra')

// 配置具体的修改规则
module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: 'css'
   })
 )