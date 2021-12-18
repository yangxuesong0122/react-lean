import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
	forward = () => {
		this.props.history.goForward()
	}
	back = () => {
		this.props.history.goBack()
	}
	go = () => {
		this.props.history.go(2)
	}
	render() {
		console.log('Header组件收到的props是',this.props);
		return (
			<div className="page-header">
				<h2>React Router Demo</h2>
				<button onClick={this.back}>回退</button>
				<button onClick={this.forward}>前进</button>
				<button onClick={this.go}>go</button>
			</div>
		)
	}
}
// withRouter 用于解决在一般组件里使用路由组件的api的，返回值是一个新组件
export default withRouter(Header)
