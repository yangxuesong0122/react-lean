import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
	render() {
		console.log('0000000000000', this.props)
		return (
			<NavLink activeClassName="height-like" className="list-group-item" {...this.props}/>
		)
	}
}
