import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Home from './pages/Home' // Home 是路由组件
import About from './pages/About'
import Header from "./components/Header" // Header是一般组件

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* 原生html中，通过<a>跳转不同的页面 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							<NavLink activeClassName="height-like" className="list-group-item" to="/about">About</NavLink>
							<NavLink activeClassName="height-like" className="list-group-item" to="/home">Home</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								{/* 旧版本写法：*/}
								<Route path="/about" component={About}/>
								<Route path="/home" component={Home}/>
								{/* 新版本写法 Route 需要在 Routes 里，组件为 element,注意括号内为标签 */}
								{/*<Routes>
									<Route path="/about" element={<About/>}/>
									<Route path="/home" element={<Home/>}/>
								</Routes>*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
