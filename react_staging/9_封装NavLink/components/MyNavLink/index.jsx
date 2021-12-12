import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    /*console.log(this.props)
    const { path, children } = this.props*/
    return (
      /*<NavLink activeClassName="height-like" className="list-group-item" to={path}>
        {children}
      </NavLink>*/
      <NavLink activeClassName="height-like" className="list-group-item" {...this.props}/>
    )
  }
}