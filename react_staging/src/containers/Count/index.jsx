import React, {Component} from 'react'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

// 定义UI组件
class Count extends Component {
  state = {
    carName: '奥拓'
  }

  increment = () => {
    const {value} = this.selectNum
    this.props.jia(value*1)
  }
  decrement = () => {
    const {value} = this.selectNum
    this.props.jian(value*1)
  }
  incrementIfOdd = () => {
    const {value} = this.selectNum
    if (this.props.sum % 2 !== 0) {
      this.props.jia(value*1)
    }
  }
  incrementAsync = () => {
    const {value} = this.selectNum
    this.props.asyncJia(value*1, 500)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>当前求和为: {this.props.sum}</h2>
        <select ref={c => this.selectNum = c}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

export default connect(
  state => ({ sum: state }),
  // mapDispatchToProps的一般写法
  // dispatch => ({
  //   jia: (data) => {
  //     // 通知 redux 执行加法
  //     dispatch(createIncrementAction(data))
  //   },
  //   jian: data => dispatch(createDecrementAction(data)),
  //   asyncJia: (data, time) => dispatch(createIncrementAsyncAction(data, time))
  // })

  // mapDispatchToProps的简写
  // react-redux 帮我们自动分发（dispatch）
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    asyncJia: createIncrementAsyncAction
  }
)(Count)