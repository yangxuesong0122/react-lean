import React, {Component} from 'react'
// 容器组件
import Count from './containers/Count'

export default class Index extends Component {
  render() {
    return (
      <div>
        {/*给容器组件传递store*/}
        <Count/>
      </div>
    )
  }
}