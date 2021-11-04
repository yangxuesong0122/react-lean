// 创建外壳组件App
// import React from "react"
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         hello, react
//       </div>
//     )
//   }
// }
// // 暴露 App 组件
// export default App

import React, {Component} from "react"
import Index from "./components/Hello"

// 创建并暴露App组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Index/>
      </div>
    )
  }
}