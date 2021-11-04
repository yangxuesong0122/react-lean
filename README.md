- React 特点：
  + 采用**组件化**模式，**声明式编码**，提高开发效率及组件复用率
  + 在 React Native 中可以使用 React 语法进行**移动端开发**
  + 使用**虚拟DOM**+优秀的**Diffing算法**，尽量减少与真实DOM的交互
    * 不是页面上的真实DOM，代码运行时放在内存里
    * 先进行新旧虚拟DOM的比较，如果一样，直接复用页面的真实dom
- React 脚手架文件分析：
  + public 静态资源文件夹
    * index.html 主页面
  + src 源码文件夹
    * index.js 入口文件
    * App.js App组件
    * ronots.txt 爬虫协议文件
    * manifest.json 应用加壳的配置文件