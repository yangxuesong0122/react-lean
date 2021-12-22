import React, {Component} from 'react'
// 引入容器组件
import Count from './containers/Count'
import Person from './containers/Person'

export default class Index extends Component {
  render() {
    return (
      <div>
        <Count/>
        <hr/>
        <Person/>
      </div>
    )
  }
}