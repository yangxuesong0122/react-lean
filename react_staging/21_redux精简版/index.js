import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
// 用于获取redux中保存的状态
import store from './redux/store'

ReactDom.render(<App/>, document.getElementById('root'))
// 监测redux中状态的变化，只要变化，就调用 render
store.subscribe(() => {
  ReactDom.render(<App/>, document.getElementById('root'))
})