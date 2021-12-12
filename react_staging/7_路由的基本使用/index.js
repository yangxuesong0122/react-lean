//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
// 引入路由
// import { BrowserRouter as Router } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
//引入App
import App from './App'

ReactDOM.render(
	<Router>
		<App/>
	</Router>,
	document.getElementById('root')
)